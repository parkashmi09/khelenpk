import React from 'react'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Box, Divider } from '@mui/material'
import { 
  Google as GoogleIcon,
  SportsEsports as SteamIcon,
  AccountBalanceWallet as MetaMaskIcon
} from '@mui/icons-material'

import hero from '../../assets/images/homepageCarousel/hero.jpg'
import Button from '../Common/Button'
import './RegisterCarouselBanner.scss'

export const RegisterCarouselBanner = () => {
  const theme = useTheme()
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  const handleRegisterClick = () => {
    console.log('Register button clicked')
  }

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`)
  }

  return (
    <Box className="register-carousel-banner-new">
      {/* Left Side - Football Players Background */}
      <Box className="banner-background-new">
        <Box className="football-players-overlay-new">
          <img src={hero} alt="Football Players" className="hero-image-new" />
        </Box>
      </Box>

      {/* Right Side - Registration Panel */}
      <Box className="registration-panel-new">
        <Box className="panel-content-new">
          <Typography variant="h3" className="welcome-title-new">
            Welcome To Roobet
          </Typography>
          
          <Typography variant="h6" className="hop-in-subtitle">
            Hop In
          </Typography>

          <Button
            variant="primary"
            size="large"
            onClick={handleRegisterClick}
            fullWidth
          >
            Register Now
          </Button>

          <Divider className="separator-new">
            <Typography variant="body2" className="separator-text-new">
              Or continue with
            </Typography>
          </Divider>

          <Box className="social-login-buttons-new">
            <Button
              variant="secondary"
              size="medium"
              onClick={() => handleSocialLogin('Google')}
              leftIcon={<GoogleIcon />}
            />
            
            <Button
              variant="secondary"
              size="medium"
              onClick={() => handleSocialLogin('Steam')}
              leftIcon={<SteamIcon />}
            />
            
            <Button
              variant="secondary"
              size="medium"
              onClick={() => handleSocialLogin('MetaMask')}
              leftIcon={<MetaMaskIcon />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default RegisterCarouselBanner
