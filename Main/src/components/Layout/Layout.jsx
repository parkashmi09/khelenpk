import React, { useState, useEffect } from 'react'
import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import Header from './Header'
// import Sidebar from './Sidebar'
import Loader from '../Loader'
import LoginPage from '../LoginPage/LoginPage'
import './Layout.scss'
import RegisterPage from '../RegisterPage/RegisterPage'
import Footer from './Footer'
import RegionRestricted from '../RegionRestricted'

const Layout = ({ children, chatOpen, setChatOpen, showLogin, setShowLogin, showRegister, setShowRegister }) => {
  const theme = useTheme()
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [sidebarOpen, setSidebarOpen] = useState(isTabletOrDesktop)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [regionChecked, setRegionChecked] = useState(false)
  const [isRegionAllowed, setIsRegionAllowed] = useState(true)


  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Geo-IP check: allow only Pakistan (PK)
  // useEffect(() => {
  //   const controller = new AbortController()
  //   const fetchGeo = async () => {
  //     try {
  //       const response = await fetch('https://ipapi.co/json/', { signal: controller.signal })
  //       if (!response.ok) throw new Error('GeoIP request failed')
  //       const data = await response.json()

  //       console.log(data)
  //       const isPakistan = (data && (data.country || data.country_code)) ? (data.country_code === 'PK' || data.country === 'PK') : false
  //       setIsRegionAllowed(Boolean(isPakistan))
  //     } catch (err) {
  //       // In case of error, default to blocked for safety
  //       setIsRegionAllowed(false)
  //     } finally {
  //       setRegionChecked(true)
  //     }
  //   }
  //   fetchGeo()
  //   return () => controller.abort()
  // }, [])

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <Box className="layout">
      {/* Loader/Splash Screen */}
      <Loader isLoading={isLoading} />

      {regionChecked && !isRegionAllowed && !isLoading && (
        <RegionRestricted />
      )}

      <Header
        onSidebarToggle={handleSidebarToggle}
        onSidebarCollapse={handleSidebarCollapse}
        sidebarOpen={sidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />

      <Box className={`layout-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Sidebar hidden */}
        <Box
          className="main-content"
          sx={{
            marginLeft: '0px',
            marginRight: chatOpen ? '350px' : '0px', // Full margin when chat is open
            transition: 'all 0.3s ease-in-out',
            width: chatOpen ? 'calc(100vw - 350px)' : 'auto',
            overflowY: 'auto', // Ensure scrolling works
            height: '100vh',

          }}
        >
          <Box className="container-padding" sx={{ minHeight: '100%', flex: 1, }}>
            {children}
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
