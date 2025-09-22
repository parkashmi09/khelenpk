import React from 'react'
import { Box, Typography, Button } from '@mui/material'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    
    // Log error to console
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '100vh',
            padding: 3,
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" color="error" gutterBottom>
            Something went wrong!
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            The application encountered an error. Please check the console for more details.
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => window.location.reload()}
            sx={{ mt: 2 }}
          >
            Reload Page
          </Button>
          {this.state.error && (
            <Box sx={{ mt: 3, textAlign: 'left', maxWidth: '600px' }}>
              <Typography variant="h6" gutterBottom>
                Error Details:
              </Typography>
              <Typography variant="body2" component="pre" sx={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                padding: 2, 
                borderRadius: 1,
                overflow: 'auto',
                fontSize: '0.8rem'
              }}>
                {this.state.error.toString()}
              </Typography>
            </Box>
          )}
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
