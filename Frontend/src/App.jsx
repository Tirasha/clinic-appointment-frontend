import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import AdminLayout from "./components/Admin/AdminLayout";

//Admin Pages - Dulanka
import Dashboard from "./pages/admin/Dashboard";
import Doctors from "./pages/admin/Doctors";
import Appointments from "./pages/admin/Appointments";
import Patients from "./pages/admin/Patients";
import ClinicSettings from "./pages/admin/ClinicSettings";
import Profile from "./pages/admin/Profile";

const AppContent = () => {
  const location = useLocation();

  const hideNavbar = location.pathname.startswith("/admin");

  return (
    <>
    {!hideNavbar && <Navbar/>}

    <Routes>
      {/*Public Route*/}
      <Route path="/" element={<Home/>}/>

      {/*Admin Routes*/}
      <Route path="/admin" element={<AdminLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="doctors" element={<Doctors/>}/>
      <Route path="appointments" element={<Appointments/>}/>
      <Route path="patients" element={<Patients/>}/>
      <Route path="settings" element={<ClinicSettings/>}/>
      <Route path="profile" element={<Profile/>}/>
      </Route>
    </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent/>
    </Router>
  );
};

export default App