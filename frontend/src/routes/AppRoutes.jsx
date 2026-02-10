import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PatientDashboard from "../pages/PatientDashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import Contact from "../pages/Contact";
import ScanPrescription from "../pages/ScanPrescription";
import DoctorAdvice from "../pages/DoctorAdvice";


import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/scan-prescription" element={<ScanPrescription />} />
      <Route path="/doctor-advice" element={<DoctorAdvice />} />
    </Routes>
  );
};

export default AppRoutes;
