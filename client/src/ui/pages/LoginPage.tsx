import UserIcon from '../../assets/gg_profile.png'


const LoginPage = () => {
  return (
    <section className="login-page">
      <div className="content-login">
        <div className="text-thumbnail" style={{ textAlign: "center" }}>
          <p>Selamat datang di SMPN 17 Tangerang..<br />
            SMPN 17 Tangerang merupakan sekolah menengah pertama yang bernaung di bawah Dinas<br /> Pendidikan dan Kebudayaan Kota Tangerang yang bertujuan melahirkan warga Negara Indonesia<br /> yang berjiwa Pancasila, Berbudi Pekerti dan berakhlak Mulia.</p>
        </div>
        <div className="form-login">
          <div className="card d-flex justify-content-center">
            <div className="card-body text-center">
              <span style={{ color: "#FFFB98", fontWeight: "bold", display: "block" }}>Login</span>
              <img src={UserIcon} alt="" className='my-3' style={{ width: "30px" }} />
              <div className="group-form my-1">
                <label className="d-block" style={{ color: "#FFFB98", fontSize: "10px", fontWeight: "bold" }}>NIP/NIS</label>
                <input type="text" style={{ borderRadius: "10px" }} />
              </div>
              <div className="group-form my-4">
                <label className="d-block" style={{ color: "#FFFB98", fontSize: "10px", fontWeight: "bold" }}>Password</label>
                <input type="text" style={{ borderRadius: "10px" }} />
              </div>
              <button className="btn" style={{ backgroundColor: "#FFFB98", width: "160px", fontWeight: "bold", fontSize: "15px" }}>LOGIN</button>
            </div>
          </div>
        </div>
        <span style={{ display: "block", textAlign: "center", fontSize: "12px", fontWeight: "bold", marginTop: "-10px" }}>Lupa Password ?</span>
      </div>
    </section>
  )
}

export default LoginPage