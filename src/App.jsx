import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Frontend
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import AboutUsPage from "./pages/Home/AboutUsPage";
import ServicePage from "./pages/Home/ServicePage";
import ContactUsPage from './pages/Home/ContactUsPage';
import BlogsPage from './pages/Home/BlogsPage';

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
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/blog" element={<BlogsPage />} />

      </Routes>
    </Router>
  );
};

export default App;
