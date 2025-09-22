import React from 'react'
import { Box, Container, Typography, Link as MuiLink } from '@mui/material'
import './Footer.scss'
import KhelenLogo from '../../assets/logo/logo.png'

const Footer = () => {
  return (
    <Box className="site-footer">
      <Container maxWidth={false} disableGutters>
        <Box className="footer-inner">
          <Box className="footer-divider" />
          <Box className="footer-brand">
            <img src={KhelenLogo} alt="KHELEN" className="footer-logo" />
          </Box>

          <Typography variant="body2" className="footer-description">
            Khelen.com is a brand name of Raw Entertainment B.V, Reg No 157205, having its registered address at Korporaalweg 10, Curacao, licensed to conduct online gaming operations by the Government of Curacao under license OGL/2024/687/0427. Raw Entertainment Ltd, Reg No HE421735, having its registered address at Voukourestiou, 25, Neptune House, 1st Floor, Flat/Office11, Zakaki, 3045, Limassol, Cyprus is a company of the Roobet group that acts as a paying and operational agent on behalf of Raw Entertainment B.V. 18+ to play.
          </Typography>

          <Typography variant="h6" className="footer-heading">24x7 Support</Typography>

          <Box className="footer-links">
            <MuiLink className="footer-link" href="#" underline="hover">About Us</MuiLink>
            <span className="dot" />
            <MuiLink className="footer-link" href="#" underline="hover">Terms and Conditions</MuiLink>
            <span className="dot" />
            <MuiLink className="footer-link" href="#" underline="hover">Responsible Gaming</MuiLink>
          </Box>

          <Box className="footer-badges">
            <Box className="badge-left">
              <img
                src={'https://wver.sprintstaticdata.com/v172/static/front/img/ssl.png'}
                alt="SSL Secure"
                className="ssl-badge"
              />
              <Box className="badge-copy">
                <Typography variant="h6" className="safe-title">100% SAFE</Typography>
                <Typography variant="body2" className="safe-sub">Protected connection and encrypted data</Typography>
              </Box>
            </Box>

            <Box className="compliance-icons">
              <img src={'https://wver.sprintstaticdata.com/v172/static/front/img/18plus.png'} alt="18+" />
              <img src={'https://wver.sprintstaticdata.com/v172/static/front/img/gamecare.png'} alt="GameCare" />
              <img src={'https://wver.sprintstaticdata.com/v172/static/front/img/gt.png'} alt="GT" />
            </Box>
          </Box>

          <Typography variant="body2" className="footer-legal">
            © Copyright {new Date().getFullYear()}. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer


