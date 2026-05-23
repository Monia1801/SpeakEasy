import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';
import DashboardHome from './components/DashboardHome';
import MockInterview from './components/MockInterview';
import TongueTwisters from './components/TongueTwisters';
import Pronunciation from './components/Pronunciation';
import Progress from './components/Progress';
import Upcoming from './components/Upcoming';
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<DashboardHome/>}/>
          <Route path="mock-interview" element={<MockInterview />} />
          <Route path="tongue-twisters" element={<TongueTwisters />} />
          <Route path="pronunciation" element={<Pronunciation />} />
          <Route path="progress" element={<Progress />} />
          <Route path="upcoming" element={<Upcoming />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App