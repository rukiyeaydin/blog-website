import { React } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Anasayfa from "./routes/Anasayfa"
import Hakkimda from "./routes/Hakkimda"
import Arsiv from "./routes/Arsiv"
import Iletisim from "./routes/Iletisim"
import Bilgisayartarihi from './pages/Bilgisayartarihi'
import Internetnedir from './pages/Internetnedir'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Anasayfa/>} />
      <Route path="/hakkimda" element={<Hakkimda/>} />
      <Route path="/arsiv" element={<Arsiv/>} />
      <Route path="/iletisim" element={<Iletisim/>} />
      <Route path="/gecmisten-bugune-bilgisayar-tarihi-ve-gelisimi" element={<Bilgisayartarihi/>} />
      <Route path="/internet-nedir-ve-nasil-calisir" element={<Internetnedir/>} />

    </Routes>
    </>
  )
}

export default App
