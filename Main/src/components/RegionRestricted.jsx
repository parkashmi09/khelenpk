import React from 'react'
import { Box } from '@mui/material'

const RegionRestricted = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, rgba(17,17,17,0.96) 0%, rgba(17,17,17,0.98) 100%)',
        zIndex: 2000,
        color: '#fff',
        textAlign: 'center',
        padding: '24px'
      }}
    >
      <Box>
        <Box sx={{ fontSize: { xs: '22px', md: '28px' }, fontWeight: 700, mb: 1 }}>
          Access unavailable in your region
        </Box>
        <Box sx={{ fontSize: { xs: '14px', md: '16px' }, opacity: 0.85, mb: 3 }}>
          This website is only available to users located in Pakistan.
        </Box>
        <Box sx={{ fontSize: '13px', opacity: 0.7 }}>
          If you believe this is a mistake, please try again later or contact support.
        </Box>
      </Box>
    </Box>
  )
}

export default RegionRestricted


