import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./ui/pages/LoginPage"
import Layout from "./ui/components/Layout"
import { PanelAdmins, PanelWaliKelasRoute, PanelWaliRoute } from "./routing"

const App = () => {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/panel-wali/*" element={<PanelWaliRoute />} />
            <Route path="/panel-wali-kelas/*" element={<PanelWaliKelasRoute />} />
            <Route path="/panel-admin/*" element={<PanelAdmins/>} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App