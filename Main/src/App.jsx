import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Layout from './components/Layout/Layout'
import HomePage from './pages/Home/HomePage'
import TestComponent from './components/TestComponent'
import FontDemo from './components/FontDemo'
import GamesPage from './pages/Games/GamesPage'
import CasinoPage from './pages/Casino/CasinoPage'
import SportsPage from './pages/Sports/SportsPage'
import ProfilePage from './pages/Profile/ProfilePage'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import './styles/App.scss'

function App() {
  const [chatOpen, setChatOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  return (
    <Box className="app">
      <Routes>
        {/* Full-screen pages outside Layout */}
        <Route path="/login" element={<LoginPage onClose={() => setShowLogin(false)} />} />
        <Route path="/register" element={<RegisterPage onClose={() => setShowRegister(false)} />} />
        
        {/* Main app routes wrapped in Layout */}
        <Route path="/*" element={
          <Layout chatOpen={chatOpen} setChatOpen={setChatOpen} showLogin={showLogin} setShowLogin={setShowLogin} showRegister={showRegister} setShowRegister={setShowRegister}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/fonts" element={<FontDemo />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/casino" element={<CasinoPage />} />
              <Route path="/sports" element={<SportsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Box>
  )
}

export default App
