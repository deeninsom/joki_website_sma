import { Route, Routes } from "react-router-dom"
import * as PanelWali from "../ui/pages/PanelWali"
import * as PanelWaliKelas from "../ui/pages/PanelWaliKelas"

export const PanelWaliRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<PanelWali.Dashboard />} />
      <Route path="/view-informasi" element={<PanelWali.ViewInformasi />} />
      <Route path="/view-informasi/detail" element={<PanelWali.ViewDetailInformasi />} />
      <Route path="/view-undangan" element={<PanelWali.ViewLetter />} />
      <Route path="/view-undangan/detail" element={<PanelWali.ViewDetailLetter />} />
      <Route path="/entry-kritik" element={<PanelWali.EntriKritik />} />
      <Route path="/balasan-kritik" element={<PanelWali.BalasanKritik />} />
      <Route path="/balasan-tanggapan" element={<PanelWali.BalasanTanggapan />} />
      <Route path="/profile" element={<PanelWali.Profile />} />
    </Routes>
  )
}

export const PanelWaliKelasRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<PanelWaliKelas.Dashboard />} />
      <Route path="/view-informasi" element={<PanelWaliKelas.ViewInformasi />} />
      <Route path="/view-informasi/detail" element={<PanelWaliKelas.ViewDetailInformasi />} />
      <Route path="/kirim-undangan" element={<PanelWaliKelas.SendLetter />} />
      <Route path="/view-kritik" element={<PanelWaliKelas.ViewKritik />} />
      <Route path="/entry-kritik" element={<PanelWaliKelas.EntriKritik />} />
      <Route path="/balasan-tanggapan" element={<PanelWaliKelas.BalasanTanggapan />} />
      <Route path="/profile" element={<PanelWaliKelas.Profile />} />
    </Routes>
  )
}