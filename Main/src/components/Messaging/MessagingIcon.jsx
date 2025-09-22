import React, { useState } from 'react'
import {
  IconButton,
  Popover,
  Box,
  Typography,
  Badge,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Chat as ChatIcon } from '@mui/icons-material'

const MessagingIcon = ({ isLoggedIn }) => {
  const theme = useTheme()
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [anchorEl, setAnchorEl] = useState(null)

  // Mock data - replace with your actual messaging data
  const [unreadMessages] = useState(3)
  const [hasMrRooMessages] = useState(true)

  const handleMessagingClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMessagingClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  if (!isLoggedIn || !isTabletOrDesktop) {
    return null
  }

  return (
    <>
      <IconButton
        size="medium"
        onClick={handleMessagingClick}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          width: '40px',
          height: '40px',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            transform: 'scale(1.05)',
          },
          transition: 'all 0.2s ease-in-out',
          ...(open && {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }),
        }}
      >
        <Badge 
          badgeContent={unreadMessages} 
          color="error"
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: hasMrRooMessages ? '#ff6b6b' : '#00ff41',
              color: 'white',
              fontSize: '10px',
              fontWeight: 'bold',
            }
          }}
        >
          <ChatIcon />
        </Badge>
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleMessagingClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiPopover-paper': {
            background: 'rgb(25, 25, 57)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            minWidth: '300px',
            marginTop: '8px',
          }
        }}
      >
        <Box sx={{ padding: '20px' }}>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 600,
              marginBottom: '16px',
              fontSize: '18px',
              textAlign: 'center'
            }}
          >
            💬 Messages
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {hasMrRooMessages && (
              <Box
                sx={{
                  padding: '16px',
                  backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 107, 107, 0.3)',
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#ff6b6b',
                    fontWeight: 600,
                    fontSize: '16px'
                  }}
                >
                  Mr. Roo Message!
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '14px',
                    marginTop: '4px'
                  }}
                >
                  You have a special message from Mr. Roo
                </Typography>
              </Box>
            )}

            <Box
              sx={{
                padding: '16px',
                backgroundColor: 'rgba(0, 255, 65, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 255, 65, 0.3)',
                textAlign: 'center'
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#00ff41',
                  fontWeight: 600,
                  fontSize: '16px'
                }}
              >
                {unreadMessages} Unread Messages
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px',
                  marginTop: '4px'
                }}
              >
                Click to view all messages
              </Typography>
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  )
}

export default MessagingIcon
