import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './styles/index.scss'

// Fix emotion CSS issues
if (typeof window !== 'undefined') {
  // Clear any cached emotion styles that might be causing issues
  const emotionSheets = document.querySelectorAll('style[data-emotion]');
  emotionSheets.forEach(sheet => {
    if (sheet.textContent.includes('undefined')) {
      sheet.remove();
    }
  });
}

// Add class to body when React loads to hide HTML loader
document.body.classList.add('react-loaded')

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(25, 25, 57)', // Exact color from image
      light: '#636581',
      dark: '#232542',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e6be4b', // Same as existing casino site
      light: '#eac96c',
      dark: '#d4a83a',
      contrastText: '#3d3d3d',
    },
    background: {
      default: '#2a2a5a',        // Primary background color from gradient
      paper: '#1a1a3a',          // Secondary background color from gradient
    },
    text: {
      primary: 'rgba(255, 255, 255)',
      secondary: 'rgba(255, 255, 255, 0.7)',
      hint: 'rgba(255, 255, 255, 0.3)',
      disabled: 'rgba(255, 255, 255, 0.3)',
    },
    success: {
      main: '#00D4AA',
    },
    error: {
      main: '#FF6B35',
    },
    warning: {
      main: '#FFB800',
    },
    info: {
      main: '#007AFF',
    },
    action: {
      selected: 'rgba(255, 255, 255, 0.14)',
      disabled: 'rgba(255, 255, 255, 0.26)',
    },
  },
  typography: {
    fontFamily: 'Excon, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.655rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.3rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.225rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
    fontWeightBold: 700,
    fontWeightMedium: 500,
  },
  shape: {
    borderRadius: 4, // Same as existing casino site
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1100, // Same as existing casino site
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#423C7A',
          color: '#fff',
          '& [class*="MuiListItem-button"]:hover': {
            background: 'rgba(255,255,255,0.1)',
          },
          '& [class*="MuiListItemText-primary"]': {
            fontWeight: '500',
            fontSize: '0.875rem',
          },
          '& [class*="MuiListItemIcon-root"]': {
            fontSize: 18,
            fontWeight: '400',
            color: '#b4baff !important',
            marginRight: '8px',
            minWidth: 'auto !important',
          },
        },
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
