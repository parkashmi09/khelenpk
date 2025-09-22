import React, { useState } from 'react'
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  IconButton, 
  Divider,
  Link
} from '@mui/material'
import { 
  Visibility, 
  VisibilityOff,
  Close as CloseIcon
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

import RoobetLogo from '../../assets/images/logo.svg'
import LoginImage from '../../assets/images/login-img.webp'
import GoogleIcon from '../../assets/images/google.svg'
import SteamIcon from '../../assets/images/steam.svg'
import MetaIcon from '../../assets/images/meta.svg'
import ButtonComponent from '../Common/Button'
import './LoginPage.scss'

const LoginPage = ({ onClose }) => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Login form submitted:', formData)
    
    // Store login credentials in localStorage
    localStorage.setItem('isLoggedRobit', 'true')
    localStorage.setItem('userCredentials', JSON.stringify(formData))
    
    // Navigate to home page after successful login
    navigate('/')
  }

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`)
  }

  const handleClose = () => {
    navigate("/")
  }

  return (
    <Box className="login-page-overlay">
      <Box className="login-page-container">
        {/* Logo at top left */}
        <Box className="logo-section">
          <img src={RoobetLogo} alt="ROOBET" className="roobet-logo" />
        </Box>
        
        <Box className="login-content">
          {/* Left Section - Login Form */}
          <Box className="login-form-section">
            <Box className="form-container">
              <Typography variant="h4" className="login-title">
                Login to your account
              </Typography>
              
              <Box className="register-prompt">
                <Typography variant="body1" className="no-account-text">
                  Don't have an account?{' '}
                  <Link onClick={() => navigate('/register')} className="register-link" sx={{ cursor: 'pointer' }}>
                    Register
                  </Link>
                </Typography>
              </Box>

              <Box component="form" onSubmit={handleSubmit} className="login-form">
                <TextField
                  fullWidth
                  placeholder="Username, email Or phone"
                  variant="outlined"
                  value={formData.username}
                  onChange={handleInputChange('username')}
                  className="form-field"
                  InputProps={{
                    className: 'input-field'
                  }}
                />

                <TextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  variant="outlined"
                  value={formData.password}
                  onChange={handleInputChange('password')}
                  className="form-field"
                  InputProps={{
                    className: 'input-field',
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        className="password-toggle"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    )
                  }}
                />

                <Link href="#" className="forgot-password">
                  Forgot Password?
                </Link>

                <ButtonComponent
                  variant="primary"
                  size="large"
                  onClick={handleSubmit}
                  fullWidth
                  // className="play-now-button"
                >
                  Play Now
                </ButtonComponent>

                <Divider className="separator">
                  <Typography variant="body2" className="separator-text">
                    Or continue with
                  </Typography>
                </Divider>

                <Box className="social-login-buttons">
                  <ButtonComponent
                    variant="secondary"
                    size="medium"
                    onClick={() => handleSocialLogin('Google')}
                    leftIcon={<img src={GoogleIcon} alt="Google" className="social-icon" />}
                    className="social-button google"
                  >
                    Google
                  </ButtonComponent>
                  
                  <ButtonComponent
                    variant="secondary"
                    size="medium"
                    onClick={() => handleSocialLogin('Steam')}
                    leftIcon={<img src={SteamIcon} alt="Steam" className="social-icon" />}
                    className="social-button steam"
                  >
                    Steam
                  </ButtonComponent>
                  
                  <ButtonComponent
                    variant="secondary"
                    size="medium"
                    onClick={() => handleSocialLogin('MetaMask')}
                    leftIcon={<img src={MetaIcon} alt="MetaMask" className="social-icon" />}
                    className="social-button metamask"
                  >
                    MetaMask
                  </ButtonComponent>
                </Box>

                <Typography variant="caption" className="footer-text">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Section - Snoop Dogg Image */}
          <Box className="football-section">
            {/* Close Button positioned on the right side of image */}
            <IconButton onClick={handleClose} className="image-close-button">
              <CloseIcon />
            </IconButton>
            
            <Box className="players-container">
              <img 
                src={LoginImage} 
                alt="Snoop Dogg" 
                className="players-image"
              />
            
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage

