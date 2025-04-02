import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';

function App() {
  return (
    <><div className='app'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={LandingPage} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/appointments" element={<h1>Appointments</h1>} />
        </Routes>
        </BrowserRouter>
      </div>
      </>
  );
}

export default App;
