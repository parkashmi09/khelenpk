import React from 'react'
import { Box } from '@mui/material'
import RoobetLogo from '../../assets/logo/logo.png'
import './Loader.scss'

const Loader = ({ isLoading = true, isFading = false }) => {
  if (!isLoading) return null

  return (
    <Box className={`loader-overlay ${isFading ? 'fade-out' : ''}`}>
      <Box className="loader-container">
    
        
        {/* Logo in Center */}
        <Box className="logo-center">
          <img 
            src={RoobetLogo} 
            alt="Roobet Logo" 
            className="loader-logo"
          />
        </Box>
        
      
      </Box>
    </Box>
  )
}

export default Loader
