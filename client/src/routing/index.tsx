import { Route, Routes } from "react-router-dom"
import * as PanelWali from "../ui/pages/PanelWali"
import * as PanelWaliKelas from "../ui/pages/PanelWaliKelas"
import * as PanelAdmin from "../ui/pages/PanelAdmin"


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
      <Route path="/tanggapan-kritik" element={<PanelWaliKelas.EntriKritik />} />
      <Route path="/profile" element={<PanelWaliKelas.Profile />} />
      <Route path="/data-siswa" element={<PanelWaliKelas.DataSiswa />} />
    </Routes>
  )
}

export const PanelAdmins = () => {
  return (
    <Routes>
      <Route path="/" element={<PanelAdmin.Dashboard />} />
      <Route path="/entry-data-kelas" element={<PanelAdmin.EntryDataKelas />} />
      <Route path="/view-data-kelas" element={<PanelAdmin.ViewDataKelas />} />
      <Route path="/entry-data-siswa" element={<PanelAdmin.EntryDataSiswa />} />
      <Route path="/view-data-siswa" element={<PanelAdmin.ViewDataSiswa />} />
      <Route path="/entry-data-wali-kelas" element={<PanelAdmin.EntryDataWaliKelas />} />
      <Route path="/view-data-wali-kelas" element={<PanelAdmin.ViewDataWaliKelas />} />
      <Route path="/entry-informasi" element={<PanelAdmin.EntryInformasi />} />
      <Route path="/view-informasi" element={<PanelAdmin.ViewDataInformasi />} />
      <Route path="/profile" element={<PanelAdmin.Profile />} />
      <Route path="/data-siswa" element={<PanelAdmin.DataSiswa />} />
    </Routes>
  )
}