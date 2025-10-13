import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Frontend
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import AboutUsPage from "./pages/Home/AboutUsPage";
import ServicePage from "./pages/Home/ServicePage";

// Admin
import AdminLayout from "./admin/AdminLayout";

const App = () => {
  const isAdmin = window.location.pathname.startsWith("/admin");

  return (
    <Router>
      {!isAdmin && <Navbar />}

      <Routes>
        {/* Frontend */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicePage />} />

        {/* Admin */}
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
