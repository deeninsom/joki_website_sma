import React, { ReactNode, useState } from 'react'
import DropdownIcon from '../../assets/🦆 icon _arrow down_.png'
import { useNavigate } from 'react-router-dom';


export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [dropdownInfo, setDropdownInfo] = useState(false);
  const [dropdownCritique, setDropdownCritique] = useState(false);
  const [dropdownAccount, setDropdownAccount] = useState(false);
  const navigate = useNavigate();

  const handlePage = (page: string) => {
    navigate(page)
  }

  const handleDropdownToggle = (dropdownType: any) => {
    switch (dropdownType) {
      case 'info':
        setDropdownInfo(!dropdownInfo);
        break;
      case 'critique':
        setDropdownCritique(!dropdownCritique);
        break;
      case 'account':
        setDropdownAccount(!dropdownAccount);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 fixed" style={{ backgroundColor: "#FFFB98FC" }}>
          <div className="d-flex flex-column align-items-center align-items-sm-start ps-5 pt-4 text-white min-vh-100">
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" style={{ marginLeft: "-50px", marginTop: "20px" }} id="menu">
              <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", justifyContent: "space-between", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }}
                onClick={() => handleDropdownToggle('info')}
              >
                <span className=" d-none d-sm-inline">DATA MASTER</span>
                <img src={DropdownIcon} alt="" style={{ width: "20px", marginLeft: "15px" }} />
              </li>
              {dropdownInfo && (
                <>
                  <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }} onClick={() => handlePage("/panel-admin/entry-data-kelas")}>
                    <span className=" d-none d-sm-inline">Entry Data Kelas</span>
                  </li>
                  <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }} onClick={() => handlePage("/panel-admin/entry-data-siswa")}>
                    <span className=" d-none d-sm-inline">Entry Data siswa</span>
                  </li>
                  <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }} onClick={() => handlePage("/panel-admin/entry-data-wali-kelas")}>
                    <span className=" d-none d-sm-inline">Entry Data Wali Kelas</span>
                  </li>
                </>
              )}
              <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", justifyContent: "space-between", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }}
                onClick={() => handleDropdownToggle('critique')}
              >
                <span className=" d-none d-sm-inline">INFORMASI</span>
                <img src={DropdownIcon} alt="" style={{ width: "20px", marginLeft: "15px" }} />
              </li>
              {
                dropdownCritique && (
                  <>
                    <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }} onClick={() => handlePage("/panel-admin/entry-informasi")}>
                      <span className=" d-none d-sm-inline">Entry Informasi</span>
                    </li>
                  </>
                )
              }
              <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }}>
                <span className=" d-none d-sm-inline">LOGOUT</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3" style={{ backgroundColor: "#08073A" }}>
          <main style={{ marginBottom: "50px" }}>{children}</main>
        </div>
      </div>
    </div>
  )
}

export const Dashboard = () => {
  const navigate = useNavigate();

  const handlePage = (page: string) => {
    navigate(page)
  }

  const newInfo: any = [
    {
      tittle: "PENGUMUMAN PEMBAGIAN RAPOR SEMESTER GANJIL",
      date: '8 Des 2023',
      text: "Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...",
    }
  ]

  const currInfo: any = [
    {
      tittle: "PENGUMUMAN PEMBAGIAN RAPOR SEMESTER GANJIL",
      date: '8 Des 2023',
      text: "Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...",
    }
  ]

  return (
    <DashboardLayout>
      <section>
        <div className="group-informasi my-1">
          <div className="group-title" style={{ backgroundColor: "#5E9EFF", width: "20%", padding: "10px", borderRadius: "20px", fontWeight: "bold", position: "absolute", top: "20%", left: "19%" }}>
            INFORMASI TERBARU
          </div>
          {
            newInfo.length > 0 ? newInfo.map((val: any, index: any) => (
              <div key={index} className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "25px" }}>
                <div className="group-date" style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", width: "46px" }}>
                  <span>{val.date}</span>
                </div>
                <div className="group-text ms-4" style={{
                  height: "75px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "normal", width: "95%", display: "-webkit-box", WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}>
                  <div className="group-tittle" style={{ fontWeight: "bold", fontSize: "20px" }}>
                    {val.tittle}
                  </div>
                  {val.text}
                </div>
              </div>
            )) : (
              <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "25px" }}>
                Belum ada informasi terkait
              </div>
            )
          }
        </div>
        <div className="group-informasi my-1">
          <div className="group-title" style={newInfo.length > 0 ? { backgroundColor: "#5E9EFF", width: "20%", padding: "10px", borderRadius: "20px", fontWeight: "bold", position: "absolute", top: "48%", left: "19%" } : { backgroundColor: "#5E9EFF", width: "20%", padding: "10px", borderRadius: "20px", fontWeight: "bold", position: "absolute", top: "38%", left: "19%" }}>
            INFORMASI SEBELUMNYA
          </div>
          {
            currInfo.length > 0 ? currInfo.map((val: any, index: any) => (
              <div key={index} className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "50px" }}>
                <div className="group-date" style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", width: "46px" }}>
                  <span>{val.date}</span>
                </div>
                <div className="group-text ms-4" style={{
                  height: "75px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "normal", width: "95%", display: "-webkit-box", WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}>
                  <div className="group-tittle" style={{ fontWeight: "bold", fontSize: "20px" }}>
                    {val.tittle}
                  </div>
                  {val.text}
                </div>
              </div>
            )) : (
              <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "55px" }}>
                Belum ada informasi terkait
              </div>
            )
          }
        </div>
      </section>
    </DashboardLayout >
  )
}

export const EntryDataKelas = () => {
  const navigate = useNavigate();

  const handlePage = (page: string) => {
    navigate(page)
  }
  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px" }}>
          ENTRY DATA KELAS
        </div>
        <div className="detail-informasi" style={{ display: "flex", justifyContent: "center" }}>
          <div className="body" style={{ backgroundColor: "#FFFB98FC", borderRadius: "10px", padding: "20px", marginTop: "25px", width: "50%" }}>
            <ul style={{ listStyle: "none" }}>
              <li style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
                <div style={{ fontWeight: "bold", width: "23%" }}>ID KELAS</div>
                <div>:</div>
              </li>
              <div className="group-content ms-2" style={{ backgroundColor: "#08073A", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={2} cols={50} style={{ width: "100%", backgroundColor: "#08073A", color: "#FFFB98FC", borderRadius: "10px", border: "none", height: "40px" }}>
                </textarea>
              </div>
              <li style={{ color: "#08073A", display: "flex", alignItems: "center", marginTop: "20px" }}>
                <div style={{ fontWeight: "bold", width: "23%" }}>NAMA KELAS</div>
                <div>:</div>
              </li>
              <div className="group-content ms-2" style={{ backgroundColor: "#08073A", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={2} cols={50} style={{ width: "100%", color: "#FFFB98FC", backgroundColor: "#08073A", borderRadius: "10px", border: "none", height: "40px" }}>
                </textarea>
              </div>
              <li style={{ display: "flex", justifyContent: "end", marginRight: "20px", marginTop: "10px" }}>
                <button style={{ backgroundColor: "#08073A", color: "#FFFB98FC", paddingLeft: "20px", paddingRight: "20px", fontWeight: "bold", border: "none", borderRadius: " 10px" }} onClick={() => handlePage("/panel-admin/view-data-kelas")}>SUBMIT</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </DashboardLayout>
  )
}

export const ViewDataKelas = () => {

  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px" }}>
          ENTRY DATA KELAS
        </div>
        <div className="detail-informasi" style={{ marginTop: "20px" }}>
          <table style={{ backgroundColor: "#FFFB98FC", width: "100%", borderRadius: "10px" }} >
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th style={{ padding: "6px", width: "5%" }}>NO</th>
                <th style={{ padding: "6px" }}>ID KELAS</th>
                <th style={{ padding: "6px" }}>NAMA KELAS</th>
                <th style={{ padding: "6px" }}>AKSI</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <td style={{ padding: "6px", width: "20px" }}>1</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }} className='d-flex gap-3 justify-content-center'>
                  <i className="fa fa-solid fa-pen-to-square" style={{ cursor: "pointer" }}></i>
                  <i className="fa fa-solid fa-trash-can" style={{ cursor: "pointer" }}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  )
}

export const EntryDataSiswa = () => {
  const navigate = useNavigate();

  const handlePage = (page: string) => {
    navigate(page)
  }
  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
          ENTRY DATA SISWA
        </div>
        <div className="detail-form-kritik" style={{ marginTop: "20px", backgroundColor: "#FFFB98FC", borderRadius: "10px", padding: "10px" }}>
          <ul style={{ listStyle: "none" }}>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NIS</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NAMA LENGKAP</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>TANGGAL LAHIR</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>JENIS KELAMIN</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>AGAMA</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>ALAMAT</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NAMA ORANG TUA</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NO. TELP ORTU</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>PILIH KELAS</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>PASSWORD</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li style={{ display: "flex", justifyContent: "end", marginRight: "20px", marginTop: "10px" }}>
              <button style={{ backgroundColor: "#08073A", color: "#FFFB98FC", paddingLeft: "20px", paddingRight: "20px", fontWeight: "bold", border: "none", borderRadius: " 10px" }} onClick={() => handlePage("/panel-admin/view-data-siswa")}>SUBMIT</button>
            </li>
          </ul>
        </div>
      </section>
    </DashboardLayout>
  )
}

export const ViewDataSiswa = () => {
  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
          ENTRY DATA SISWA
        </div>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
          <ul style={{ listStyle: "none" }}>
            <li style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "280%" }}>KELAS</div>
              <div>:</div>
              <select name="" id="" style={{ marginLeft: "10px", backgroundColor: "#FFFB98FC", fontWeight: "bold", borderRadius: "5px", fontSize: "10px", padding: "7px" }}>
                <option >Pilih Kelas</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="detail-form-kritik" style={{ marginTop: "20px", backgroundColor: "#FFFB98FC", borderRadius: "10px", padding: "10px" }}>
          <table style={{ backgroundColor: "#FFFB98FC", width: "100%", borderRadius: "10px" }} >
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th style={{ padding: "6px", width: "5%" }}>NO</th>
                <th style={{ padding: "6px" }}>NIS</th>
                <th style={{ padding: "6px" }}>NAMA SISWA</th>
                <th style={{ padding: "6px" }}>AKSI</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <td style={{ padding: "6px", width: "20px" }}>1</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }} className='d-flex gap-3 justify-content-center'>
                  <i className="fa fa-solid fa-pen-to-square" style={{ cursor: "pointer" }}></i>
                  <i className="fa fa-solid fa-trash-can" style={{ cursor: "pointer" }}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  )
}

export const EntryDataWaliKelas = () => {
  const navigate = useNavigate();

  const handlePage = (page: string) => {
    navigate(page)
  }
  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
          ENTRY DATA WALI KELAS
        </div>
        <div className="detail-form-kritik" style={{ marginTop: "20px", backgroundColor: "#FFFB98FC", borderRadius: "10px", padding: "10px" }}>
          <ul style={{ listStyle: "none" }}>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NIP</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NAMA LENGKAP</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>TANGGAL LAHIR</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>JENIS KELAMIN</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>AGAMA</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>ALAMAT</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NAMA ORANG TUA</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NO. TELP</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>PILIH KELAS</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#08073A", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>PASSWORD</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#08073A", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li style={{ display: "flex", justifyContent: "end", marginRight: "20px", marginTop: "10px" }}>
              <button style={{ backgroundColor: "#08073A", color: "#FFFB98FC", paddingLeft: "20px", paddingRight: "20px", fontWeight: "bold", border: "none", borderRadius: " 10px" }} onClick={() => handlePage("/panel-admin/view-data-wali-kelas")}>SUBMIT</button>
            </li>
          </ul>
        </div>
      </section>
    </DashboardLayout>
  )
}

export const ViewDataWaliKelas = () => {
  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
          ENTRY DATA WALI KELAS
        </div>
        <div className="detail-form-kritik" style={{ marginTop: "20px", backgroundColor: "#FFFB98FC", borderRadius: "10px", padding: "10px" }}>
          <table style={{ backgroundColor: "#FFFB98FC", width: "100%", borderRadius: "10px" }} >
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th style={{ padding: "6px", width: "5%" }}>NO</th>
                <th style={{ padding: "6px" }}>NIP</th>
                <th style={{ padding: "6px" }}>NAMA WALI KELAS</th>
                <th style={{ padding: "6px" }}>AKSI</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <td style={{ padding: "6px", width: "20px" }}>1</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }} className='d-flex gap-3 justify-content-center'>
                  <i className="fa fa-solid fa-pen-to-square" style={{ cursor: "pointer" }}></i>
                  <i className="fa fa-solid fa-trash-can" style={{ cursor: "pointer" }}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  )
}

export const EntryInformasi = () => {
  const navigate = useNavigate();

  const handlePage = (page: string) => {
    navigate(page)
  }
  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
          KRITIK & SARAN MASUK
        </div>

        <div className="detail-form-kritik" style={{ marginTop: "20px" }}>
          <ul style={{ listStyle: "none" }}>
            <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "13%" }}>Tanggal</div>
              <div>:</div>
              <div className='d-flex' style={{ fontWeight: "bold", marginLeft: "10px" }}>
                <button className='gap-2' style={{ backgroundColor: "#FFFB98FC", fontWeight: "bold", borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>dd <i className="fa fa-solid fa-chevron-down" style={{ fontSize: "12px" }}></i></button>
                <button className='gap-2' style={{ backgroundColor: "#FFFB98FC", fontWeight: "bold", borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>mm <i className="fa fa-solid fa-chevron-down" style={{ fontSize: "12px" }}></i></button>
                <button className='gap-2' style={{ backgroundColor: "#FFFB98FC", fontWeight: "bold", borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>yyyy <i className="fa fa-solid fa-chevron-down" style={{ fontSize: "12px" }}></i></button>
              </div>
            </li>
            <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "13%" }}>Judul</div>
              <div>:</div>
            </li>
            <li>
              <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={4} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", border: "none" }}>
                </textarea>
              </div>
              <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
                <div style={{ fontWeight: "bold", width: "18%", marginTop: "10px" }}>ISI INFORMASI</div>
                <div style={{ marginTop: "10px" }}>:</div>
              </li>
              <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={4} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", border: "none", height: "100px" }}>
                </textarea>
              </div>
              <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
                <div style={{ fontWeight: "bold", width: "18%", marginTop: "10px" }}>UPLOAD FILE</div>
                <div style={{ marginTop: "10px" }}>:</div>
              </li>
              <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
                <input placeholder='Input FIle' style={{ backgroundColor: "#FFFB98FC", border: "none" }} className="form-control form-control-sm" id="formFileSm" type="file" />
              </div>
            </li>
            <li style={{ display: "flex", justifyContent: "end", marginRight: "20px", marginTop: "10px" }}>
              <button style={{ backgroundColor: "#FFFB98FC", paddingLeft: "20px", paddingRight: "20px", fontWeight: "bold", border: "none", borderRadius: " 10px" }} onClick={()=> handlePage("/panel-admin/view-informasi")}>SUBMIT</button>
            </li>
          </ul>
        </div>
      </section>
    </DashboardLayout>
  )
}

export const ViewDataInformasi = () => {
  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
          ENTRY INFORMASI
        </div>
        <div className="detail-form-kritik" style={{ marginTop: "20px", backgroundColor: "#FFFB98FC", borderRadius: "10px", padding: "10px" }}>
          <table style={{ backgroundColor: "#FFFB98FC", width: "100%", borderRadius: "10px" }} >
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th style={{ padding: "6px", width: "5%" }}>NO</th>
                <th style={{ padding: "6px" }}>NIP</th>
                <th style={{ padding: "6px" }}>NAMA WALI KELAS</th>
                <th style={{ padding: "6px" }}>AKSI</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <td style={{ padding: "6px", width: "20px" }}>1</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }} className='d-flex gap-3 justify-content-center'>
                  <i className="fa fa-solid fa-pen-to-square" style={{ cursor: "pointer" }}></i>
                  <i className="fa fa-solid fa-trash-can" style={{ cursor: "pointer" }}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  )
}

export const EntriKritik = () => {
  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
          TANGGAPI KRITIK & SARAN
        </div>
        <div className="detail-form-kritik" style={{ marginTop: "20px", backgroundColor: "#08073A" }}>
          <ul style={{ listStyle: "none" }}>
            <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "13%" }}>Tanggal</div>
              <div>:</div>
              <div className='d-flex' style={{ fontWeight: "bold", marginLeft: "10px" }}>
                <button className='gap-2' style={{ backgroundColor: "#FFFB98FC", fontWeight: "bold", borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>dd <i className="fa fa-solid fa-chevron-down" style={{ fontSize: "12px" }}></i></button>
                <button className='gap-2' style={{ backgroundColor: "#FFFB98FC", fontWeight: "bold", borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>mm <i className="fa fa-solid fa-chevron-down" style={{ fontSize: "12px" }}></i></button>
                <button className='gap-2' style={{ backgroundColor: "#FFFB98FC", fontWeight: "bold", borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>yyyy <i className="fa fa-solid fa-chevron-down" style={{ fontSize: "12px" }}></i></button>
              </div>
            </li>
            <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "13%" }}>Nama</div>
              <div>:</div>
              <div className="group-content ms-2" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={2} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", borderRadius: "10px", border: "none", height: "40px" }}>
                </textarea>
              </div>
            </li>
            <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "13%" }}>Judul</div>
              <div>:</div>
              <div className="group-content ms-2" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={2} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", borderRadius: "10px", border: "none", height: "40px" }}>
                </textarea>
              </div>
            </li>
            <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "13%" }}>Kritik & Saran</div>
              <div>:</div>
            </li>
            <li>
              <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={4} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", borderRadius: "10px", border: "none" }}>
                </textarea>
              </div>
              <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
                <div style={{ fontWeight: "bold", width: "13%", marginTop: "10px" }}>TANGGAPAN</div>
                <div style={{ marginTop: "10px" }}>:</div>
              </li>
              <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={4} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", borderRadius: "10px", border: "none", height: "200px" }}>
                </textarea>
              </div>
            </li>
            <li style={{ display: "flex", justifyContent: "end", marginRight: "20px", marginTop: "10px" }}>
              <button style={{ backgroundColor: "#5E9EFF", paddingLeft: "20px", paddingRight: "20px", fontWeight: "bold", border: "none", borderRadius: " 10px" }}>SUBMIT</button>
            </li>
          </ul>
        </div>
      </section>
    </DashboardLayout>
  )
}


export const DataSiswa = () => {
  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
          DATA SISWA
        </div>
        <div className="detail-form-kritik" style={{ marginTop: "20px" }}>
          <ul style={{ listStyle: "none" }}>
            <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "16%" }}>ID KELAS</div>
              <div>:</div>
              <div className="group-content ms-2" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={2} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", borderRadius: "10px", border: "none", height: "40px" }}>
                </textarea>
              </div>
            </li>
            <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "16%" }}>TAHUN PELAJARAN</div>
              <div>:</div>
              <div className="group-content ms-2" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={2} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", borderRadius: "10px", border: "none", height: "40px" }}>
                </textarea>
              </div>
            </li>
            <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "16%" }}>SEMESTER</div>
              <div>:</div>
              <div className="group-content ms-2" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={2} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", borderRadius: "10px", border: "none", height: "40px" }}>
                </textarea>
              </div>
            </li>
          </ul>
        </div>
        <div className="search d-flex justify-content-end">
          <input type="text" name="search" style={{ backgroundColor: "#FFFB98FC", border: "none", borderRadius: "10px", fontSize: "15px", padding: "4px" }} placeholder='Search'>
          </input>
        </div>
        <div className="detail-form-siswa" style={{ marginTop: "20px" }}>
          <table style={{ backgroundColor: "#FFFB98FC", width: "100%", borderRadius: "10px" }}>
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th style={{ padding: "6px" }}>NO</th>
                <th style={{ padding: "6px" }}>NIS</th>
                <th style={{ padding: "6px" }}>NAMA</th>
                <th style={{ padding: "6px" }}>TGL LAHIR</th>
                <th style={{ padding: "6px" }}>JENIS KELAMIN</th>
                <th style={{ padding: "6px" }}>AGAMA</th>
                <th style={{ padding: "6px" }}>NAMA ORANG TUA</th>
                <th style={{ padding: "6px" }}>NO. TELP ORANG TUA</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <td style={{ padding: "6px" }}>1</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  )
}

export const Profile = () => {
  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
          PROFILE
        </div>
        <div className="detail-form-kritik" style={{ marginTop: "20px" }}>
          <ul style={{ listStyle: "none" }}>
            <li className='my-3' style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NIS</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#FFFB98FC", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NAMA LENGKAP</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#FFFB98FC", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>TANGGAL LAHIR</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#FFFB98FC", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>JENIS KELAMIN</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#FFFB98FC", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>AGAMA</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#FFFB98FC", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>ALAMAT</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#FFFB98FC", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NAMA ORANG TUA</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#FFFB98FC", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
            <li className='my-3' style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "18%" }}>NO. TELP ORTU</div>
              <div className='me-3'>:</div>
              <div style={{ width: "100%" }}>
                <input type="text" style={{ width: "100%", backgroundColor: "#FFFB98FC", border: "none", borderRadius: "5px", padding: "5px" }} />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </DashboardLayout>
  )
}
