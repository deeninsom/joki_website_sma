import { ReactNode } from 'react'
import logo from '../../assets/Logo_SMPN_17_TGR-removebg-preview.png'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <div className="layout" style={{ padding: "10px", display: "flex", backgroundColor: "#5E9EFF", alignItems: "center" }}>
        <img src={logo} alt="" style={{ width: "7%" }} />
        <div className="text-header " style={{ fontWeight: "bold", marginLeft: "20px" }}>
          <span style={{ display: "block", fontSize: "50px" }}>SMPN 17 TANGERANG</span>
          <span>“Terwujudnya warga sekolah yang beriman, berprestasi dan berwawasan lingkungan”</span>
        </div>
      </div>
      <main>{children}</main>
    </section>
  )
}

export default Layout