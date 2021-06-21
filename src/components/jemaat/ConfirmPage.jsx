import React, { Fragment } from 'react';

export default function ConfirmPage() {
	return (
		<Fragment className="content-wrapper">
			{/* table voting */}
			<div className="row justify-content-center w-100">
				<div className="col-md-12 fixed-top mx-auto mt-2">
					<div className="card border-radius-15">
						<div className="card card-widget widget-user-2 m-0 border-radius-15">
							{/* Add the bg color to the header using any of the bg-* classes */}
							<div className="widget-user-header bg-cust p-2 border-top-radius-15">
								<div className="widget-user-image">
									<img
										className="img-circle elevation-2 mr-3"
										src="assets/logogetor.png"
										alt="User Avatar"
									/>
								</div>
								{/* /.widget-user-image */}
								<h6 className="text-bold text-white mt-2">[Nama Pemilih]</h6>
								<h6 className="text-bold text-white">Sektor 1</h6>
							</div>
						</div>
						<div className="row custom m-1 mt-1 justify-content-center bg-cust2">
							<div className="col-md-9">
								<div className="card card-primary card-outline mb-1">
									{/* /.card-header */}
									<div className="card-body p-0 m-0">
										<div className="mailbox-read-info p-1 m-0">
											<h5>Selamat!</h5>
										</div>
										<div className="mailbox-read-message">
											<h6 className="mb-1">Hello [Nama Pemilih],</h6>
											<p className="mb-2">
												&emsp;Data pilihan majelis (Penatua dan Diaken) pilihan anda, sudah kami
												terima. Terima kasih sudah berpartisipasi dalam pemilihan ini
											</p>
											<p className="mb-2">
												&emsp;Setelah bakal calon ditetapkan yaitu 2 kali dari jumlah komposisi
												majelis yang dibutuhkan yakni sebanyak 72 orang yang terdiri dari 42
												Penatua dan 30 Diaken, maka akan dilaksanakan pemilihan majelis pada
												tanggal ... 2021, setelah ibadah hari minggu. Harap bapak/ibu bisa
												mengikuti kembali.
											</p>
											<p className="mb-2">
												&emsp;Mari kita mendoakan agar proses ini bisa berjalan dengan baik dan
												berkenan bagi Tuhan.
											</p>

											<p className="mb-1">
												Tuhan memberkati,
												<br />
												Panitia Pemilhan Penatua dan Diaken
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row m-2 justify-content-center">
							<div className="col-sm-2 justify-content-center mx-auto">
								<btn className="btn submit-btn mx-auto p-1 m-0 justify-content-center">
									Tutup Aplikasi
								</btn>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}