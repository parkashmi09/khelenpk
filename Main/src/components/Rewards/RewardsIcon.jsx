import React, { useState } from 'react'
import {
  IconButton,
  Popover,
  Box,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { CardGiftcard as GiftIcon } from '@mui/icons-material'

const RewardsIcon = ({ isLoggedIn }) => {
  const theme = useTheme()
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [anchorEl, setAnchorEl] = useState(null)

  const handleRewardsClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleRewardsClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  if (!isLoggedIn) {
    return null
  }

  return (
    <>
      <IconButton
        size={isTabletOrDesktop ? 'medium' : 'small'}
        onClick={handleRewardsClick}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          width: '40px',
          height: '40px',
          color: '#ffd700',
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
        <GiftIcon />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleRewardsClose}
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
            minWidth: '320px',
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
            🎁 Rewards & Bonuses
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              marginBottom: '20px'
            }}
          >
            Check your daily rewards and claim bonuses!
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <Box
              sx={{
                padding: '16px',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                textAlign: 'center'
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#ffd700',
                  fontWeight: 600,
                  fontSize: '16px'
                }}
              >
                Daily Bonus Available!
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px',
                  marginTop: '4px'
                }}
              >
                Claim your daily reward
              </Typography>
            </Box>

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
                Welcome Bonus
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px',
                  marginTop: '4px'
                }}
              >
                Get 100% bonus on first deposit
              </Typography>
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  )
}

export default RewardsIcon
