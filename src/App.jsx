import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Employee from "./pages/Employee";
import Attendance from "./pages/Attendance";
import AttendanceShow from "./pages/AttendanceShow"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<Product />} path="/product" />
          <Route element={<Employee />} path="/employee" />
          <Route element={<Attendance />} path="/attendance" />
          <Route element={<AttendanceShow />} path="/attendanceshow" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
