// MyRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApplyAdmin from './pages/ApplyAdmin';
import NotificationPage from './pages/NotificationPage';
import Admins from './pages/admin/Admins';
import Users from './pages/admin/Users';
import Profile from './pages/faculty/Profile';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Appointments from './pages/Appointments';
import FacultyAppointments from './pages/faculty/FacultyAppointments';
import Login from './pages/Login';
import Register from './pages/Register';
import CertificatePdf from "./pages/CertificatePdf";
export default function MyRoutes() {
  return (
    <Routes>

      <Route path="/" element={<> <Navbar />
<Home />        <Footer />
</>} />
      <Route path="/H" element={<HomePage />} />

      <Route path="/apply-admin" element={<ApplyAdmin />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/admin/admins" element={<Admins />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/CertificatePdf" element={<CertificatePdf />} />
      <Route path="/faculty-appointments" element={<FacultyAppointments />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/faculty/profile/:id" element={<Profile />} />
      <Route path="/faculty/book-appointment/:facultyId" element={<BookingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
