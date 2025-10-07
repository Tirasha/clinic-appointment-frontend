import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import PatientProfile from './pages/PatientProfile';
import DoctorProfile from './pages/DoctorProfile';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PatientProfile" element={<PatientProfile />} />
        <Route path="/DoctorProfile" element={<DoctorProfile />} />
      </Routes>
    </Router>
  )
}

export default App