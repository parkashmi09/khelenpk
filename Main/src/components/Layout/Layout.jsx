import React, { useState, useEffect } from 'react'
import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import Header from './Header'
// import Sidebar from './Sidebar'
import Loader from '../Loader'
import LoginPage from '../LoginPage/LoginPage'
import './Layout.scss'
import RegisterPage from '../RegisterPage/RegisterPage'

const Layout = ({ children, chatOpen, setChatOpen, showLogin, setShowLogin, showRegister, setShowRegister }) => {
  const theme = useTheme()
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [sidebarOpen, setSidebarOpen] = useState(isTabletOrDesktop)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

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
            height: isTabletOrDesktop ? 'calc(100vh - 80px)' : 'auto', // Auto height on mobile
            minHeight: 'calc(100vh - 80px)', // Minimum height for both
          }}
        >
          <Box className="container-padding" sx={{ minHeight: '100%', flex: 1 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
