import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import PatientProfile from './pages/PatientProfile';
import MyAppointments from './pages/MyAppointments';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PatientProfile" element={<PatientProfile />} />
        <Route path="/MyAppointments" element={<MyAppointments />} />
      </Routes>
    </Router>
  )
}

export default App