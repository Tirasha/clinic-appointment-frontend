import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar';
import AboutUsPage from './pages/Home/AboutUsPage';
import ServicePage from './pages/Home/ServicePage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </Router>
  )
}

export default App