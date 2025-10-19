import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Dashboard from './pages/admin/Dashboard';
import Appointments from './pages/admin/Appointments';
import Doctors from './pages/admin/Doctors';
import Patients from './pages/admin/Patients';
import Settings from './pages/admin/Settings';
import Profile from './pages/admin/Profile';


// Wrapper component to control navbar visibility
const AppContent = () => {
  const location = useLocation();

  // Define the paths where you DON'T want the Navbar
  const hideNavbarPaths = ["/Dashboard","/Appointments","/Doctor","/Patients","/Settings","/Profile"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Appointments" element={<Appointments />} />
        <Route path="/Doctor" element={<Doctors />} />
        <Route path="/Patients" element={<Patients />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
