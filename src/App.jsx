import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminPage from './Pages/homePage/adminPage/adminPage';
import LoginPage from './Pages/loginPage';
import HomePage from './Pages/homePage/homePage';
import RegisterPage from './Pages/registerPage';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
