import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./pages/layout"
import Home from "./pages/home"
import ContentDaftarMotor from "./pages/daftarMotor"
import "./index.css"
import ScrollToTop from "./components/ScrollToTop"
import RulesRental from "./pages/rulesRental"


export default function App() {


  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="daftar-motor" element={<ContentDaftarMotor />} />
          <Route path="syarat-rental" element={<RulesRental />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}




