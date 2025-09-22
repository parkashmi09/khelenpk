import React, { useState } from 'react'
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  IconButton, 
  Divider,
  Link,
  Checkbox,
  FormControlLabel
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
import './RegisterPage.scss'

const RegisterPage = ({ onClose }) => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [agreements, setAgreements] = useState({
    age: false,
    policies: false
  })

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }))
  }

  const handleAgreementChange = (field) => (event) => {
    setAgreements(prev => ({
      ...prev,
      [field]: event.target.checked
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Register form submitted:', formData, agreements)
    
    // Store registration credentials in localStorage
    localStorage.setItem('isLoggedRobit', 'true')
    localStorage.setItem('userCredentials', JSON.stringify(formData))
    
    // Navigate to home page after successful registration
    navigate('/')
  }

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`)
  }

  const handleClose = () => {
    navigate("/")
  }

  return (
    <Box className="register-page-overlay">
      <Box className="register-page-container">
        {/* Logo at top left */}
        <Box className="logo-section">
          <img src={RoobetLogo} alt="ROOBET" className="roobet-logo" />
        </Box>
        
        <Box className="register-content-auth">
          {/* Left Section - Registration Form */}
          <Box className="register-form-section">
            <Box className="form-container">
              <Typography variant="h4" className="register-title-auth">
                Create your account
              </Typography>
              
              <Box className="login-prompt">
                <Typography variant="body1" className="have-account-text">
                  Already have an account?{' '}
                  <Link onClick={() => navigate('/login')} className="login-link" sx={{ cursor: 'pointer' }}>
                    Login
                  </Link>
                </Typography>
              </Box>

              <Box component="form" onSubmit={handleSubmit} className="register-form">
                <Box className="field-group">
                  <Typography variant="body2" className="field-label">
                    Username
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Username"
                    variant="outlined"
                    value={formData.username}
                    onChange={handleInputChange('username')}
                    className="form-field"
                    InputProps={{
                      className: 'input-field'
                    }}
                  />
                </Box>

                <Box className="field-group">
                  <Typography variant="body2" className="field-label">
                    Email Address
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Email Address"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    className="form-field"
                    InputProps={{
                      className: 'input-field'
                    }}
                  />
                </Box>

                <Box className="field-group">
                  <Typography variant="body2" className="field-label">
                    Password
                  </Typography>
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
                </Box>

                <Box className="field-group">
                  <Typography variant="body2" className="field-label">
                    Referral Code (Optional)
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Referral Code"
                    variant="outlined"
                    className="form-field"
                    InputProps={{
                      className: 'input-field'
                    }}
                  />
                </Box>

                <Typography variant="caption" className="password-requirement">
                  Password must be at least 7 characters
                </Typography>

                <Box className="agreements-section">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={agreements.policies}
                        onChange={handleAgreementChange('policies')}
                        className="agreement-checkbox"
                      />
                    }
                    label={
                      <Typography variant="body2" className="agreement-text">
                        I am 18+ and have read and accept the{' '}
                        <Link href="#" className="policy-link">Terms of Service</Link> and{' '}
                        <Link href="#" className="policy-link">Privacy Policy</Link>. *
                      </Typography>
                    }
                  />
                </Box>

             

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
                  This site is protected by reCAPTCHA and the{' '}
                  <Link href="#" className="policy-link">Google Privacy Policy</Link> and{' '}
                  <Link href="#" className="policy-link">Terms of Service</Link> apply.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Section - Background Image */}
          <Box className="background-section">
            {/* Close Button positioned on the right side */}
            <IconButton onClick={handleClose} className="image-close-button">
              <CloseIcon />
            </IconButton>
            
            <Box className="background-container">
              <img 
                src={LoginImage} 
                alt="Background" 
                className="background-image"
              />
              
           
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default RegisterPage
