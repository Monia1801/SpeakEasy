import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App