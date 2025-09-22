import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const TestComponent = () => {
  const navigate = useNavigate()
  
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: 3,
      textAlign: 'center'
    }}>
      <Typography variant="h2" color="primary" gutterBottom>
        🎰 Casino UI is Working! 🎰
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        The React application is successfully running
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        You can now navigate to different pages using the sidebar and header navigation
      </Typography>
      <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" size="large" onClick={() => navigate('/home')}>
          🏠 Home
        </Button>
        <Button variant="outlined" color="secondary" size="large" onClick={() => navigate('/fonts')}>
          🔤 Fonts Demo
        </Button>
        <Button variant="outlined" color="warning" size="large" onClick={() => navigate('/games')}>
          🎮 Games
        </Button>
        <Button variant="outlined" color="info" size="large" onClick={() => navigate('/casino')}>
          🎰 Casino
        </Button>
        <Button variant="outlined" color="success" size="large" onClick={() => navigate('/sports')}>
          ⚽ Sports
        </Button>
        <Button variant="outlined" color="success" size="large" onClick={() => navigate('/profile')}>
          👤 Profile
        </Button>
      </Box>
      
      <Box sx={{ mt: 6, p: 4, bgcolor: 'background.paper', borderRadius: 2, maxWidth: '800px' }}>
        <Typography variant="h6" gutterBottom>
          Layout Test Content
        </Typography>
        <Typography variant="body1" paragraph>
          This content should be visible in the main area to the right of the fixed sidebar.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The sidebar should be fixed on the left, and this content should be scrollable independently.
        </Typography>
      </Box>
    </Box>
  )
}

export default TestComponent
