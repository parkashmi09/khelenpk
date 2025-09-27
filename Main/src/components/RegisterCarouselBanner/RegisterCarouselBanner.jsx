import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Box, Divider } from '@mui/material'
import { 
  Google as GoogleIcon,
  SportsEsports as SteamIcon,
  AccountBalanceWallet as MetaMaskIcon
} from '@mui/icons-material'

import banner1 from '../../assets/images/homepageCarousel/banner 1.jpg'
import banner2 from '../../assets/images/homepageCarousel/banner 2.jpg'
import banner3 from '../../assets/images/homepageCarousel/banner 3.jpg'
import Button from '../Common/Button'
import './RegisterCarouselBanner.scss'

export const RegisterCarouselBanner = () => {
  const theme = useTheme()
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  const images = [banner1, banner2, banner3]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 2000)

    return () => clearInterval(intervalId)
  }, [images.length])

  const handleRegisterClick = () => {
    window.location.href = 'https://khelen.com/'
  }

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`)
  }

  return (
    <Box className="register-carousel-banner-new">
      {/* Left Side - Football Players Background */}
      <Box className="banner-background-new">
        <Box className="football-players-overlay-new">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Football Players"
            className="hero-image-new"
          />
        </Box>
      </Box>

      {/* Right Side - Registration Panel */}
      <Box className="registration-panel-new">
        <Box className="panel-content-new">
          <Typography sx={{mb:4}} variant="h3" className="welcome-title-new">
            Welcome To <span style={{fontStyle:'italic'}} className="khelen-title">KHELEN</span>
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
