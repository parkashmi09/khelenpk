import React, { useState, useRef } from 'react'
import {
  Box,
  Typography,
  IconButton,
  Popover,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material'
import {
  KeyboardArrowDown as ChevronDownIcon,
  KeyboardArrowUp as ChevronUpIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material'
import BalancePlusIcon from '../../assets/icons/newDesignIcons/BalancePlus.svg'

// Import the exact same crypto utility functions - using PNG icons from balances directory
import BTCIcon from '../../assets/images/balances/crypto.png'
import ETHIcon from '../../assets/images/balances/eth.png'
import LTCIcon from '../../assets/images/balances/ltc.png'
import CashIcon from '../../assets/images/balances/cash.png'
import USDTIcon from '../../assets/images/balances/usdt.png'
import USDCIcon from '../../assets/images/balances/usdc.png'
import XRPIcon from '../../assets/images/balances/xrp.png'
import DogeIcon from '../../assets/images/balances/doge.png'
import TRXIcon from '../../assets/images/balances/trx.png'

// Define the exact same balance types and icon mapping
const balanceTypeIconMap = {
  cash: CashIcon,
  crypto: BTCIcon, // This maps to crypto.png which represents Bitcoin
  eth: ETHIcon,
  ltc: LTCIcon,
  usdt: USDTIcon,
  usdc: USDCIcon,
  xrp: XRPIcon,
  doge: DogeIcon,
  trx: TRXIcon,
}

const balanceTypeNameMap = {
  cash: 'USD',
  crypto: 'Bitcoin',
  eth: 'Ethereum',
  ltc: 'Litecoin',
  usdt: 'Tether',
  usdc: 'USD Coin',
  xrp: 'Ripple',
  doge: 'Dogecoin',
  trx: 'TRON',
}

const getBalanceTypeIcon = (balanceType) => {
  return balanceTypeIconMap[balanceType] || BTCIcon
}

const BalanceDropdown = ({ isLoggedIn }) => {
  const theme = useTheme()
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [anchorEl, setAnchorEl] = useState(null)
  const balanceRef = useRef(null)

  // Mock data - replace with your actual balance data
  const [selectedBalanceType, setSelectedBalanceType] = useState('crypto')
  const [balances] = useState({
    cash: 150.00,
    crypto: 0.00543210,
    eth: 0.12345678,
    ltc: 2.34567890,
    usdt: 100.00,
    usdc: 75.50,
    xrp: 500.00,
    doge: 10000.00,
    trx: 1000.00
  })

  // Use the exact same cashier options structure as the older code
  const cashierOptions = [
    {
      balanceType: 'crypto',
      shortCode: 'btc',
      crypto: 'Bitcoin',
      walletName: 'Bitcoin Wallet',
    },
    {
      balanceType: 'eth',
      shortCode: 'eth',
      crypto: 'Ethereum',
      walletName: 'Ethereum Wallet',
    },
    {
      balanceType: 'ltc',
      shortCode: 'ltc',
      crypto: 'Litecoin',
      walletName: 'Litecoin Wallet',
    },
    {
      balanceType: 'usdt',
      shortCode: 'usdt',
      crypto: 'Tether',
      walletName: 'USDT Wallet',
    },
    {
      balanceType: 'usdc',
      shortCode: 'usdc',
      crypto: 'USD Coin',
      walletName: 'USDC Wallet',
    },
    {
      balanceType: 'xrp',
      shortCode: 'xrp',
      crypto: 'Ripple',
      walletName: 'XRP Wallet',
    },
    {
      balanceType: 'doge',
      shortCode: 'doge',
      crypto: 'Dogecoin',
      walletName: 'DOGE Wallet',
    },
    {
      balanceType: 'trx',
      shortCode: 'trx',
      crypto: 'TRON',
      walletName: 'TRX Wallet',
    },
    {
      balanceType: 'cash',
      shortCode: 'usd',
      crypto: 'US Dollar',
      walletName: 'USD Wallet',
    }
  ]

  const handleBalanceClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleBalanceClose = () => {
    setAnchorEl(null)
  }

  const handleWalletChange = (balanceType) => {
    setSelectedBalanceType(balanceType)
    handleBalanceClose()
  }

  const handleDeposit = () => {
    // Handle deposit action
    console.log('Deposit clicked')
    handleBalanceClose()
  }

  const handleWalletSettings = () => {
    // Handle wallet settings
    console.log('Wallet settings clicked')
    handleBalanceClose()
  }

  const open = Boolean(anchorEl)

  if (!isLoggedIn) {
    return null
  }

  const currentBalance = balances[selectedBalanceType]
  const currentOption = cashierOptions.find(opt => opt.balanceType === selectedBalanceType)

  // Format balance display exactly like the older code
  const formatBalance = (balance, balanceType) => {
    if (balanceType === 'cash') {
      return `$${balance.toFixed(2)}`
    } else if (balanceType === 'crypto') {
      return `${balance.toFixed(8)} BTC`
    } else if (balanceType === 'eth') {
      return `${balance.toFixed(8)} ETH`
    } else if (balanceType === 'ltc') {
      return `${balance.toFixed(8)} LTC`
    } else if (balanceType === 'usdt') {
      return `${balance.toFixed(2)} USDT`
    } else if (balanceType === 'usdc') {
      return `${balance.toFixed(2)} USDC`
    } else if (balanceType === 'xrp') {
      return `${balance.toFixed(2)} XRP`
    } else if (balanceType === 'doge') {
      return `${balance.toFixed(2)} DOGE`
    } else if (balanceType === 'trx') {
      return `${balance.toFixed(2)} TRX`
    }
    return `${balance.toFixed(2)}`
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '8px',
      width: '100%'
    }}>
      <Box
        ref={balanceRef}
        onClick={handleBalanceClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          padding: '8px 12px',
         backgroundColor: 'rgb(25, 25, 57)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            transform: 'scale(1.02)',
          },
          minWidth: '140px',
          width: '100%',
        }}
      >
        {/* Balance Icon - Using the exact same icon system */}
        <Box
          sx={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img 
            src={getBalanceTypeIcon(selectedBalanceType)}
            alt={selectedBalanceType}
            style={{
              width: '24px',
              height: '24px',
              objectFit: 'contain'
            }}
          />
        </Box>

        {/* Balance Amount */}
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            fontWeight: 600,
            fontSize: '14px',
            flex: 1,
            textAlign: 'center'
          }}
        >
          {formatBalance(currentBalance, selectedBalanceType)}
        </Typography>

        {/* Chevron Icon */}
        <Box sx={{ color: 'white' }}>
          {open ? <ChevronUpIcon fontSize="small" /> : <ChevronDownIcon fontSize="small" />}
        </Box>
      </Box>

      {/* Deposit Button */}
      <IconButton
        onClick={handleDeposit}
        sx={{
          backgroundColor: 'rgba(0, 255, 65, 0.2)',
          borderRadius: '12px',
          width: '40px',
          height: '40px',
          color: '#00ff41',
          border: '1px solid rgba(0, 255, 65, 0.3)',
          marginLeft: '8px',
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 65, 0.3)',
            transform: 'scale(1.05)',
          },
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <img 
          src={BalancePlusIcon} 
          alt="Deposit" 
          style={{ width: '20px', height: '20px' }}
        />
      </IconButton>

      {/* Balance Dropdown */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleBalanceClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '& .MuiPopover-paper': {
            background: 'rgb(25, 25, 57)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            minWidth: '280px',
            marginTop: '8px',
            left: '50% !important',
            transform: 'translateX(-50%) !important',
          }
        }}
      >
        <Box sx={{ padding: '16px' }}>
          {/* Balance Type Selection */}
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 600,
              marginBottom: '16px',
              fontSize: '16px'
            }}
          >
            Select Wallet
          </Typography>

          <List sx={{ padding: 0 }}>
            {cashierOptions.map((option, idx) => {
              const isSelected = option.balanceType === selectedBalanceType
              const balance = balances[option.balanceType]

              return (
                <ListItemButton
                  key={`${option.shortCode}-${idx}`}
                  selected={isSelected}
                  onClick={() => handleWalletChange(option.balanceType)}
                  sx={{
                    borderRadius: '8px',
                    marginBottom: '4px',
                    backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      },
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '40px' }}>
                    <img
                      src={getBalanceTypeIcon(option.balanceType)}
                      alt={option.walletName}
                      style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain'
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        sx={{
                          color: isSelected ? 'white' : 'rgba(255, 255, 255, 0.8)',
                          fontWeight: isSelected ? 600 : 500,
                          fontSize: '14px'
                        }}
                      >
                        {option.crypto}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '12px',
                          marginTop: '2px'
                        }}
                      >
                        {option.shortCode.toUpperCase()}
                      </Typography>
                    }
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#00ff41',
                      fontWeight: 600,
                      fontSize: '14px',
                      marginLeft: '16px'
                    }}
                  >
                    {formatBalance(balance, option.balanceType)}
                  </Typography>
                </ListItemButton>
              )
            })}
          </List>

          <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', margin: '16px 0' }} />

          {/* Wallet Settings */}
          <ListItemButton
            onClick={handleWalletSettings}
            sx={{
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'blue',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#ffd700', minWidth: '40px' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '14px'
                  }}
                >
                  Wallet Settings
                </Typography>
              }
            />
          </ListItemButton>
        </Box>
      </Popover>
    </Box>
  )
}

export default BalanceDropdown
