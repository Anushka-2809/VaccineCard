import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/register";
import PatientDashboard from "../pages/patientDashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import QRCode from "../pages/QRcode";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/qr" element={<QRCode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
