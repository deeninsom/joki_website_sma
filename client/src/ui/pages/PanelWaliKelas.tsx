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
                <span className=" d-none d-sm-inline">INFORMASI</span>
                <img src={DropdownIcon} alt="" style={{ width: "20px", marginLeft: "15px" }} />
              </li>
              {dropdownInfo && (
                <>
                  <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }} onClick={() => handlePage("/panel-wali-kelas/view-informasi")}>
                    <span className=" d-none d-sm-inline">View Informasi</span>
                  </li>
                  <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }} onClick={() => handlePage("/panel-wali-kelas/kirim-undangan")}>
                    <span className=" d-none d-sm-inline">Kirim Surat Undangan</span>
                  </li>
                </>
              )}
              <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", justifyContent: "space-between", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }}
                onClick={() => handleDropdownToggle('critique')}
              >
                <span className=" d-none d-sm-inline">KRITIK & SARAN</span>
                <img src={DropdownIcon} alt="" style={{ width: "20px", marginLeft: "15px" }} />
              </li>
              {
                dropdownCritique && (
                  <>
                    <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }} onClick={() => handlePage("/panel-wali-kelas/view-kritik")}>
                      <span className=" d-none d-sm-inline">Kritik & Saran Masuk</span>
                    </li>
                  </>
                )
              }
              <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", justifyContent: "space-between", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }}
                onClick={() => handleDropdownToggle('account')}
              >
                <span className=" d-none d-sm-inline" >AKUN</span>
                <img src={DropdownIcon} alt="" style={{ width: "20px", marginLeft: "15px" }} />
              </li>
              {
                dropdownAccount && (
                  <>
                    <li className="nav-item my-2" style={{ cursor: "pointer", display: "flex", alignItems: "start", backgroundColor: "#08073A", width: "200px", padding: "10px", borderRadius: "20px", fontWeight: "bold" }} onClick={() => handlePage("/panel-wali-kelas/profile")}>
                      <span className=" d-none d-sm-inline">Profile</span>
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

  const invitationLetter: any = [
    {
      date: '8 Des 2023',
      text: "UNDANGAN PEMBAGIAN RAPOR SEMESTER GANJIL",
    },
    {
      date: '8 Des 2023',
      text: "UNDANGAN PEMBAGIAN RAPOR SEMESTER GANJIL",
    }
  ]

  const newReply: any = [
    {
      date: '8 Des 2023',
      text: "UNDANGAN PEMBAGIAN RAPOR TENGAH SEMESTER GANJIL",
    },
    {
      date: '8 Des 2023',
      text: "UNDANGAN PEMBAGIAN RAPOR TENGAH SEMESTER GANJIL",
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
                <div style={{ position: "absolute", right: "5%", top: "40%", fontSize: "14px", cursor: "pointer" }} onClick={() => handlePage("/panel-wali-kelas/view-informasi")} ><span>lihat selengkapnya ...</span></div>
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
                <div style={{ position: "absolute", right: "5%", top: "68%", fontSize: "14px", cursor: "pointer" }} onClick={() => handlePage("/panel-wali-kelas/view-informasi")}><span>lihat selengkapnya ...</span></div>
              </div>
            )) : (
              <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "55px" }}>
                Belum ada informasi terkait
              </div>
            )
          }
        </div>
        <div className="group-undangan d-flex gap-2" style={{ justifyContent: "space-between" }}>
          <div className="group-informasi my-1" style={{ width: "50%", }}>
            <div className="group-title" style={currInfo.length > 0 ? { backgroundColor: "#5E9EFF", width: "20%", padding: "10px", borderRadius: "20px", fontWeight: "bold", position: "absolute", top: "77%", left: "19%" } : { backgroundColor: "#5E9EFF", width: "20%", padding: "10px", borderRadius: "20px", fontWeight: "bold", position: "absolute", top: "57%", left: "19%" }}>
              SURAT UNDANGAN MASUK
            </div>
            <div className="content" style={{ backgroundColor: "#FFFB98FC", borderRadius: "10px", padding: "20px", marginTop: "50px" }}>
              {
                invitationLetter.length > 0 ? invitationLetter.map((val: any, index: any) => (
                  <div key={index}>
                    <div className="group-content my-4" style={{ display: "flex" }}>
                      <div className="group-date" style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", width: "46px" }}>
                        <span>{val.date}</span>
                      </div>
                      <div className="group-body ms-4">
                        <div className="group-text ms-4" style={{
                          height: "72px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "normal", width: "95%", display: "-webkit-box", WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                        }}>
                          {val.text}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex" style={{ justifyContent: "end", marginTop: "-20px" }}>
                      <div style={{ fontSize: "13px", color: "#FFFB98FC", height: "20px", width: "40%", paddingLeft: "10px", paddingRight: "10px", borderRadius: "10px", cursor: "pointer", backgroundColor: "#08073A" }} onClick={() => handlePage("/panel-wali-kelas/view-undangan")}>
                        <span>Buka surat undangan ...</span>
                      </div>
                    </div>
                  </div>
                )) : (
                  <>
                    Belum ada informasi terkait
                  </>
                )
              }
            </div>
          </div>
          <div className="group-informasi my-1" style={{ width: "50%", }}>
            <div className="group-title" style={currInfo.length > 0 ? { backgroundColor: "#5E9EFF", width: "20%", padding: "10px", borderRadius: "20px", fontWeight: "bold", position: "absolute", top: "77%", left: "60%" } : { backgroundColor: "#5E9EFF", width: "20%", padding: "10px", borderRadius: "20px", fontWeight: "bold", position: "absolute", top: "57%", left: "60%" }}>
              BALASAN KRITIK & SARAN
            </div>
            <div className="content" style={{ backgroundColor: "#FFFB98FC", borderRadius: "10px", padding: "20px", marginTop: "50px" }}>
              {
                newReply.length > 0 ? newReply?.map((val: any, index: any) => (
                  <div key={index}>
                    <div className="group-content my-4" style={{ display: "flex" }}>
                      <div className="group-date" style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", width: "46px" }}>
                        <span>{val.date}</span>
                      </div>
                      <div className="group-body ms-4">
                        <div className="group-text ms-4" style={{
                          height: "72px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "normal", width: "95%", display: "-webkit-box", WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                        }}>
                          {val.text}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex" style={{ justifyContent: "end", marginTop: "-20px" }}>
                      <div style={{ fontSize: "13px", color: "#FFFB98FC", height: "20px", width: "40%", paddingLeft: "10px", paddingRight: "10px", borderRadius: "10px", cursor: "pointer", backgroundColor: "#08073A" }} onClick={() => handlePage("/panel-wali-kelas/view-undangan")}>
                        <span>Buka surat undangan ...</span>
                      </div>
                    </div>
                  </div>
                )) : (
                  <>
                    Belum ada informasi terkait
                  </>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout >
  )
}

export const ViewInformasi = () => {
  const newInfo: any = [
    {
      date: '8 Des 2023',
      text: "Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*t_G1kZwKv0p2arQCgYG7IQ.gif"
    },
    {
      date: '8 Des 2023',
      text: "Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Pelajaran 2023/2024, dimohon kehadiran orang tua/wali kelas ...",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*t_G1kZwKv0p2arQCgYG7IQ.gif"
    }
  ]
  const navigate = useNavigate();

  const handlePage = (page: string) => {
    navigate(page)
  }
  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px" }}>
          INFORMASI
        </div>
        <div className="detail-informasi">
          {
            newInfo.length > 0 ? newInfo.map((val: any, index: any) => (
              <>
                <div className="body" style={{ backgroundColor: "#FFFB98FC", borderRadius: "10px", padding: "20px", marginTop: "25px" }}>
                  <div style={{
                    backgroundColor: "#FFFB98FC",
                    display: "flex",
                    borderRadius: "10px",
                    height: "150px",
                    padding: "20px",
                    marginTop: "25px",
                    backgroundImage: `url(${val.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}>
                  </div>
                  <div key={index} className="group-content" style={{ display: "flex", marginTop: "20px" }}>
                    <div className="group-date" style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", width: "46px" }}>
                      <span>{val.date}</span>
                    </div>
                    <div className="group-text ms-4" style={{
                      height: "72px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "normal", width: "95%", display: "-webkit-box", WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                    }}>
                      {val.text}
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "end", fontSize: "14px", cursor: "pointer" }} onClick={() => handlePage("/panel-wali-kelas/view-informasi/detail")}><span>lihat selengkapnya ...</span></div>
                </div>
              </>
            )) : (
              <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", height: "200px" }}>
                Belum ada informasi terkait
              </div>
            )
          }
        </div>
      </section>
    </DashboardLayout>
  )
}

export const ViewDetailInformasi = () => {
  const newInfo: any = {
    tittle: "PENGUMUMAN PEMBAGIAN RAPOR SEMESTER GANJIL",
    date: '8 Des 2023',
    text: "Sehubungan dengan telah dilaksanakannya Penilaian Akhir Semester (PAS) Ganjil Tahun Ajaran 2023/2024, dimohon kehadiran orang tua/wali murid pada Pembagian Rapor Semester Ganjil yang akan dilaksanakan pada :Hari/Tanggal        : Jumat, 15 Desember 2023Waktu                    : 13.30 s/d 15.00Tempat                  : Ruang kelas masing masing Demikian pemberitahuan ini kami sampaikan, atas perhatiannya kami ucapkan terima kasih.",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*t_G1kZwKv0p2arQCgYG7IQ.gif"
  }

  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px" }}>
          INFORMASI
        </div>
        <div className="detail-informasi">
          <>
            <div className="body" style={{ backgroundColor: "#FFFB98FC", borderRadius: "10px", padding: "20px", marginTop: "25px" }}>
              <div className="group-content" style={{ marginTop: "20px" }}>
                <div className="group-date" style={{ fontSize: "25px", fontWeight: "bold" }}>
                  <span>{newInfo.tittle}</span>
                </div>
                <div className="group-date" style={{ fontSize: "14px", fontWeight: "bold" }}>
                  <span>{newInfo.date}</span>
                </div>
                <div style={{
                  backgroundColor: "#FFFB98FC",
                  display: "flex",
                  borderRadius: "10px",
                  height: "150px",
                  padding: "20px",
                  marginTop: "20px",
                  backgroundImage: `url(${newInfo.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}>
                </div>
                {/* <div className="group-text mt-3">
                  {newInfo.text}
                </div> */}
                <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: "inherit" }}>
                  {newInfo.text.split('\n').map((line: any, index: any) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </pre>
              </div>
            </div>
          </>
        </div>
      </section>
    </DashboardLayout>
  )
}

export const SendLetter = () => {

  return (
    <DashboardLayout>
      <section>
        <div className="group-content" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", padding: "20px", marginTop: "10px", fontWeight: "bold" }}>
          KIRIM SURAT UNDANGAN
        </div>
        <div className="detail-form-kritik" style={{ marginTop: "20px" }}>
          <ul style={{ listStyle: "none" }}>
            <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "13%" }}>Kirim Ke</div>
              <div>:</div>
              <div className="group-content ms-2" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold" }}>
                <textarea id="w3review" name="w3review" rows={2} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", borderRadius: "10px", border: "none", height: "40px" }}>
                </textarea>
              </div>
            </li>
            <li style={{ color: "#FFFB98FC", display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "13%" }}>Judul</div>
              <div>:</div>
            </li>
            <div className="group-content ms-2" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold" }}>
              <textarea id="w3review" name="w3review" rows={2} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", borderRadius: "10px", border: "none" }}>
              </textarea>
            </div>
            <li style={{ color: "#FFFB98FC", display: "flex", marginTop: "10px", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", width: "13%" }}>Isi Surat</div>
              <div>:</div>
            </li>
            <div className="group-content ms-2" style={{ backgroundColor: "#FFFB98FC", display: "flex", borderRadius: "10px", marginTop: "10px", fontWeight: "bold", height: "200px" }}>
              <textarea id="w3review" name="w3review" rows={2} cols={50} style={{ width: "100%", backgroundColor: "#FFFB98FC", borderRadius: "10px", border: "none" }}>
              </textarea>
            </div>
            <li className='gap-3' style={{ display: "flex", justifyContent: "end", marginRight: "20px", marginTop: "10px" }}>
              <button style={{ backgroundColor: "#5E9EFF", paddingLeft: "20px", paddingRight: "20px", fontWeight: "bold", border: "none", borderRadius: " 10px" }} >SUBMIT</button>
            </li>
          </ul>
        </div>
      </section>
    </DashboardLayout>
  )
}

export const ViewKritik = () => {
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
          <table style={{ backgroundColor: "#FFFB98FC", width: "100%", borderRadius: "10px" }}>
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th style={{ padding: "6px" }}>NO</th>
                <th style={{ padding: "6px" }}>TANGGAL</th>
                <th style={{ padding: "6px" }}>NAMA</th>
                <th style={{ padding: "6px" }}>JUDUL</th>
                <th style={{ padding: "6px" }}>KRITIK & SARAN</th>
                <th style={{ padding: "6px" }}>TANGGAPI</th>
                <th style={{ padding: "6px" }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <td style={{ padding: "6px" }}>1</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>$100</td>
                <td style={{ padding: "6px" }}>
                  <i className="fa fa-solid fa-pen-to-square" style={{ cursor: "pointer" }} onClick={() => handlePage('/panel-wali-kelas/tanggapan-kritik')}></i>
                </td>
                <td style={{ padding: "6px" }}>$100</td>
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
