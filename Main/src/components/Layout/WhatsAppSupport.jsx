import React from 'react'
import './WhatsAppSupport.scss'

import { Box, Typography } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';



const WhatsAppSupport = () => {
  // styles moved to SCSS
  const handleClick = () => {
    window.open('https://wa.me/00000000000', '_blank', 'noopener,noreferrer')
  }
  // no classes needed from makeStyles

  return (

    <Box className="whatsapp-cta" onClick={handleClick}>
      <WhatsApp className="whatsapp-icon" />
      <Box>
        <Typography variant="body2" className="whatsapp-text">
          Get an ID Instantly on
        </Typography>
        <Typography variant="body2" className="whatsapp-text">
          Whatsapp <span className="click-here">CLICK HERE</span>
        </Typography>
      </Box>
    </Box>
  )
}

export default WhatsAppSupport


