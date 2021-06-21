import React, { useReducer, createContext } from 'react';
import Admin from "./components/admin/Admin";
import Jemaat from "./components/jemaat/Jemaat";
import { AccountBox } from "./components/accountBox";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

export const AuthContext = createContext();
const initiaState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initiaState);
  return (
    <Router>
      <Switch>
        <AuthContext.Provider
          value={{
            state,
            dispatch,
          }}
        >
          {state.isAuthenticated ? (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          ) : (
            <Redirect
              to={{
                pathname: 'landingpage',
              }}
            />
          ) ? (<Route exact path="/admin" component={Admin} />) : ""}
          <Route exact path="/" component={AccountBox} />
          <Route exact path="/landingpage" component={Jemaat} />
        </AuthContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
