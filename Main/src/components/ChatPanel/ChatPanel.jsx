import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Avatar,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material'
import {
  Close as CloseIcon,
  ChevronLeft as ChevronLeftIcon,
  Language as LanguageIcon,
  Send as SendIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material'

const ChatPanel = ({ open, onClose, onMinimize, minimized }) => {
  const [message, setMessage] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const [slowMode, setSlowMode] = useState(true)
  const messagesEndRef = useRef(null)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      username: 'zlEdah',
      badge: 'gold',
      message: '5k ARS buy paid 237',
      timestamp: '10:45 AM'
    },
    {
      id: 2,
      username: 'Baadior',
      badge: 'purple',
      message: 'Wazaaaaaa',
      timestamp: '10:46 AM'
    },
    {
      id: 3,
      username: 'VORTEX333',
      badge: 'green',
      message: '@s495850253 best of luck bro',
      timestamp: '10:46 AM'
    },
    {
      id: 4,
      username: 'hamzaz',
      badge: 'red',
      message: 'damn',
      timestamp: '10:47 AM'
    },
    {
      id: 5,
      username: 'zlEdah',
      badge: 'gold',
      message: 'Welp rip balance, better luck next time ig idk',
      timestamp: '10:47 AM'
    },
    {
      id: 6,
      username: 'PoloWizard',
      badge: 'purple',
      message: '@s495850253 good luckkk',
      timestamp: '10:48 AM'
    },
    {
      id: 7,
      username: 'getmoneyallday7',
      badge: 'green',
      message: '',
      timestamp: '10:48 AM'
    },
    {
      id: 8,
      username: 'xCashaddict',
      badge: 'red',
      message: '@zlEdah ouch',
      timestamp: '10:49 AM'
    },
    {
      id: 9,
      username: 'cantstop11',
      badge: 'purple',
      message: 'hi guys',
      timestamp: '10:49 AM'
    },
    {
      id: 10,
      username: 'cantstop11',
      badge: 'purple',
      message: 'new gambler here',
      timestamp: '10:49 AM'
    }
  ])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  // Simulate new messages every 2 seconds when chat is open
  useEffect(() => {
    if (!open) return

    const interval = setInterval(() => {
      const newMessage = {
        id: Date.now(),
        username: `User${Math.floor(Math.random() * 1000)}`,
        badge: ['purple', 'gold', 'green', 'red'][Math.floor(Math.random() * 4)],
        message: `Message ${Math.floor(Math.random() * 1000)}`,
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        })
      }
      setChatMessages(prev => [...prev, newMessage])
    }, 2000)

    return () => clearInterval(interval)
  }, [open])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        username: 'You',
        badge: 'blue',
        message: message.trim(),
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        })
      }
      setChatMessages(prev => [...prev, newMessage])
      setMessage('')
    }
  }

  const getBadgeColor = (badgeType) => {
    switch (badgeType) {
      case 'purple': return '#8B5CF6'
      case 'gold': return '#F59E0B'
      case 'green': return '#10B981'
      case 'red': return '#EF4444'
      case 'blue': return '#3B82F6'
      default: return '#6B7280'
    }
  }

  const formatMessage = (text) => {
    // Highlight @mentions
    return text.replace(/@(\w+)/g, '<span style="color: #8B5CF6; text-decoration: underline;">@$1</span>')
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0, // Below header
        right: open ? 0 : '-400px', // Slide in from right
        width: '350px',
        height: 'calc(100vh - 0px)',
        background: 'linear-gradient(135deg, #2a2a5a 0%, #1a1a3a 100%)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
        // Remove border radius for clean edges
        zIndex: 1300,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: open ? '-4px 0 20px rgba(0, 0, 0, 0.3)' : 'none',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        opacity: open ? 1 : 0.8,
      }}
    >
      {/* Header */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(255, 255, 255, 0.05)',
      }}>
        {/* Language Selector */}
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            sx={{
              color: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
              '& .MuiSvgIcon-root': {
                color: 'white',
              },
            }}
            IconComponent={LanguageIcon}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Spanish">Spanish</MenuItem>
            <MenuItem value="French">French</MenuItem>
            <MenuItem value="German">German</MenuItem>
          </Select>
        </FormControl>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <IconButton
            onClick={onMinimize}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              width: '32px',
              height: '32px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={onClose}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              width: '32px',
              height: '32px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Chat Messages */}
      <Box sx={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '2px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(255, 255, 255, 0.3)',
        },
      }}>
        {chatMessages.map((msg) => (
          <Box
            key={msg.id}
            sx={{
              marginBottom: '16px',
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              // Remove border radius for clean edges
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Username and Badge */}
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px',
            }}>
              {/* Hexagonal Badge */}
              <Box sx={{
                width: '16px',
                height: '16px',
                background: getBadgeColor(msg.badge),
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                marginRight: '8px',
              }} />
              
              {/* Username */}
              <Typography sx={{
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                marginRight: '8px',
              }}>
                {msg.username}
              </Typography>

              {/* Timestamp */}
              <Typography sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '12px',
                marginLeft: 'auto',
              }}>
                {msg.timestamp}
              </Typography>
            </Box>

            {/* Message Content */}
            <Typography sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '14px',
              lineHeight: 1.4,
            }}>
              {msg.message}
            </Typography>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Box>

      {/* Slow Mode Indicator */}
      {slowMode && (
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <TimeIcon sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '16px' }} />
          <Typography sx={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '12px',
            fontWeight: 500,
          }}>
            Slow Mode
          </Typography>
        </Box>
      )}

      {/* Chat Input */}
      <Box sx={{
        padding: '16px 20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(255, 255, 255, 0.05)',
      }}>
        <Box sx={{
          display: 'flex',
          gap: '12px',
          marginBottom: '8px',
        }}>
          <TextField
            fullWidth
            placeholder="Enter a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                // Remove border radius for clean edges
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'rgba(138, 118, 255, 0.5)',
                },
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'rgba(255, 255, 255, 0.5)',
                opacity: 1,
              },
            }}
          />
          <Button
            onClick={handleSendMessage}
            sx={{
              minWidth: '48px',
              height: '48px',
              // Remove border radius for clean edges
              background: 'linear-gradient(135deg, #8a76ff 0%, #00ff41 100%)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(135deg, #00ff41 0%, #8a76ff 100%)',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <SendIcon />
          </Button>
        </Box>

        {/* Character Count */}
        <Typography sx={{
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '12px',
          textAlign: 'center',
          marginBottom: '12px',
        }}>
          {message.length}/120
        </Typography>

        {/* Links */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}>
          <Typography sx={{
            color: '#8a76ff',
            fontSize: '12px',
            cursor: 'pointer',
            textDecoration: 'underline',
            '&:hover': {
              color: '#00ff41',
            },
          }}>
            Rain
          </Typography>
          <Typography sx={{
            color: '#8a76ff',
            fontSize: '12px',
            cursor: 'pointer',
            textDecoration: 'underline',
            '&:hover': {
              color: '#00ff41',
            },
          }}>
            Chat Rules
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatPanel
