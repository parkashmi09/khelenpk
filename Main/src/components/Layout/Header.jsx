import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button as MuiButton,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Search as SearchIcon,
  AccountCircle as ProfileIcon,
  Wallet as WalletIcon,
  CardGiftcard as GiftIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  History as HistoryIcon,
  Share as ShareIcon,
  Help as HelpIcon,
  HeadsetMic as SupportIcon,
  Logout as LogoutIcon
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

import RoobetLogo from '../../assets/logo/logo.png'
import Button from '../Common/Button'
import { BalanceDropdown } from '../Balance'
import { RewardsIcon } from '../Rewards'
import { MessagingIcon } from '../Messaging'

const Header = ({ onSidebarToggle, onSidebarCollapse, sidebarOpen, sidebarCollapsed, setShowLogin, setShowRegister }) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  // Check if user is logged in on component mount
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedRobit')
    setIsLoggedIn(loginStatus === 'true')
  }, [])

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleProfileClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedRobit')
    localStorage.removeItem('userCredentials')
    setIsLoggedIn(false)
    setAnchorEl(null)
    navigate('/')
  }



  const handleLoginClick = () => {
    navigate('/login')
    console.log('Login clicked')
  }

  const handleRegisterClick = () => {
    navigate('/register')
  }

  const open = Boolean(anchorEl)
  const id = open ? 'profile-popover' : undefined

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'rgb(25, 25, 57)',
        zIndex: 1200,
        width: '100vw',
        transition: 'all 0.3s ease-in-out',
        left: 0,
      }}
    >
      <Toolbar sx={{
        minHeight: '64px !important',
        padding: { xs: '0 16px', md: '0 24px' },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Left Section - Sidebar Toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <IconButton
            onClick={onSidebarCollapse}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              width: '48px',
              height: '48px',
              color: 'white',
              border: '6px solid black',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.2s ease-in-out',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {sidebarCollapsed ? <svg class="Ui-root css-1486z3x" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g class="Ui-stroke" stroke="#fff" stroke-linecap="round" stroke-width="2"><path d="m18 16v-8"></path><path d="m5 12h8"></path><path d="m10.1538 7.84619 3.6923 4.00001-3.6923 4"></path></g></svg>
              : <svg class="Ui-root css-1486z3x" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g class="Ui-stroke" stroke="#fff" stroke-linecap="round" stroke-width="2"><path d="m5 16v-8"></path><path d="m18 12h-8"></path><path d="m12.8462 7.84619-3.69232 4.00001 3.69232 4"></path></g></svg>}
          </IconButton> */}

     
          <Box
            onClick={() => navigate('/')}
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.02)',
              },
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            <img
              src={RoobetLogo}
              alt="Roobet Logo"
              style={{
                width: '120px',
                height: 'auto',
                maxHeight: '32px',
                marginLeft: '00px',
              }}
            />
          </Box>
        </Box>

        {/* Center Section - ROOBET Logo (Desktop Only) */}
        <Box
          onClick={() => navigate('/')}
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
              transform: 'scale(1.02)',
            },
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          <img
            src={RoobetLogo}
            alt="Roobet Logo"
            style={{
              width: '160px',
              height: 'auto',
              maxHeight: '40px',
              marginLeft: '200px',
            }}
          />
        </Box>

        {/* Right Section - Navigation Actions */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: { xs: '6px', sm: '8px', md: '12px' },
          flex: 1,
        }}>
      

          {/* Rewards Icon - Only show when logged in */}
          <RewardsIcon isLoggedIn={isLoggedIn} />

          {/* Messaging Icon - Only show when logged in on desktop */}
          <MessagingIcon isLoggedIn={isLoggedIn} />

          {/* Auth Buttons or Balance/Profile Button */}
          {!isLoggedIn ? (
            <>
              {/* Login Button */}
              <Button
                variant="secondary"
                size="medium"
                onClick={handleLoginClick}
              >
                Login
              </Button>

              {/* Register Button */}
              <Button
                variant="primary"
                size="medium"
                onClick={handleRegisterClick}
              >
                Register
              </Button>
            </>
          ) : (
            <>
              {/* Balance Dropdown */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                <BalanceDropdown isLoggedIn={isLoggedIn} />
              </Box>

              {/* Profile Button */}
              <Button
                variant="secondary"
                size="medium"
                onClick={handleProfileClick}
                leftIcon={<ProfileIcon />}
              >
                Profile
              </Button>
            </>
          )}


        </Box>
      </Toolbar>



      {/* Profile Popover */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleProfileClose}
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
            minWidth: '220px',
            marginTop: '8px',
          }
        }}
      >
        <List sx={{ padding: '8px 0' }}>
          {/* Top Section - User-related actions */}
          <ListItem button sx={{ color: 'white', padding: '12px 20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
            <ListItemIcon sx={{ color: '#ffd700', minWidth: '36px' }}>
              <WalletIcon />
            </ListItemIcon>
            <ListItemText primary="Cashier" primaryTypographyProps={{ fontWeight: 500, fontSize: '14px' }} />
          </ListItem>

          <ListItem button sx={{ color: 'white', padding: '12px 20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
            <ListItemIcon sx={{ color: '#ffd700', minWidth: '36px' }}>
              <GiftIcon />
            </ListItemIcon>
            <ListItemText primary="Rewards" primaryTypographyProps={{ fontWeight: 500, fontSize: '14px' }} />
          </ListItem>

          <ListItem button sx={{ color: 'white', padding: '12px 20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
            <ListItemIcon sx={{ color: '#ffd700', minWidth: '36px' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Account Settings" primaryTypographyProps={{ fontWeight: 500, fontSize: '14px' }} />
          </ListItem>

          <ListItem button sx={{ color: 'white', padding: '12px 20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
            <ListItemIcon sx={{ color: '#ffd700', minWidth: '36px' }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" primaryTypographyProps={{ fontWeight: 500, fontSize: '14px' }} />
          </ListItem>

          <ListItem button sx={{ color: 'white', padding: '12px 20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
            <ListItemIcon sx={{ color: '#ffd700', minWidth: '36px' }}>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History" primaryTypographyProps={{ fontWeight: 500, fontSize: '14px' }} />
          </ListItem>

          <ListItem button sx={{ color: 'white', padding: '12px 20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
            <ListItemIcon sx={{ color: '#ffd700', minWidth: '36px' }}>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary="Refer & Earn" primaryTypographyProps={{ fontWeight: 500, fontSize: '14px' }} />
          </ListItem>

          <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', margin: '4px 0' }} />

          {/* Middle Section - Support-related actions */}
          <ListItem button sx={{ color: 'white', padding: '12px 20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
            <ListItemIcon sx={{ color: '#ffd700', minWidth: '36px' }}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help Center" primaryTypographyProps={{ fontWeight: 500, fontSize: '14px' }} />
          </ListItem>

          <ListItem button sx={{ color: 'white', padding: '12px 20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
            <ListItemIcon sx={{ color: '#ffd700', minWidth: '36px' }}>
              <SupportIcon />
            </ListItemIcon>
            <ListItemText primary="Live Support" primaryTypographyProps={{ fontWeight: 500, fontSize: '14px' }} />
          </ListItem>

          <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', margin: '4px 0' }} />

          {/* Bottom Section - Account management */}
          <ListItem button onClick={handleLogout} sx={{ color: 'white', padding: '12px 20px', '&:hover': { backgroundColor: 'rgba(255, 0, 0, 0.1)' } }}>
            <ListItemIcon sx={{ color: '#ff6b6b', minWidth: '36px' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" primaryTypographyProps={{ fontWeight: 500, fontSize: '14px' }} />
          </ListItem>
        </List>
      </Popover>
    </AppBar>
  )
}

export default Header
