import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./page/Home";
import Owner from "./page/Owner";
import Admin from "./components/Admin";
import Edit from "./components/Edit";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/edit/:id" element={<Edit />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
