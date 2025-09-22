import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Avatar,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material'
import {
  PlayArrow as PlayIcon,
  Star as StarIcon,
  TrendingUp as TrendingIcon,
  Casino as CasinoIcon,
  SportsEsports as SportsIcon,
  EmojiEvents as TrophyIcon,
  Group as GroupIcon,
  AttachMoney as MoneyIcon,
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
import RegisterCarouselBanner from '../../components/RegisterCarouselBanner'
import { SlotPotatoBanner } from '../../components/Home'
import './HomePage.scss'

const HomePage = () => {
  const navigate = useNavigate()
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

  const handleLogin = () => {
    navigate('/login')
  }

  const handleRegister = () => {
    navigate('/register')
  }

  const open = Boolean(anchorEl)
  const id = open ? 'profile-popover' : undefined

  // KOTH Banner Data
  const kothBanner = {
    title: "King of the Hill",
    subtitle: "Compete for the ultimate prize",
    image: "/placeholder.svg",
    buttonText: "Join Now",
    buttonLink: "/koth"
  }

  // Register Now Banner Data
  const registerBanner = {
    title: "Join the Ultimate Casino Experience",
    subtitle: "Get 100% bonus up to $1000 on your first deposit",
    buttonText: "Register Now",
    buttonLink: "/register"
  }



  // Raffle Banners Data
  const raffleBanners = [
    {
      id: 1,
      title: "Weekly Raffle",
      subtitle: "Win up to $10,000",
      image: "/placeholder.svg",
      buttonText: "Enter Now",
      buttonLink: "/raffle"
    },
    {
      id: 2,
      title: "VIP Raffle",
      subtitle: "Exclusive prizes for VIP members",
      image: "/placeholder.svg",
      buttonText: "VIP Access",
      buttonLink: "/vip-raffle"
    }
  ]

  // Sports Betting & Live Casino CTAs
  const gameCTAs = [
    {
      id: 1,
      title: "Casino",
      subtitle: "Thousands of Games",
      background: "/placeholder.svg",
      images: [
        { src: "/placeholder.svg", style: { width: '30%', top: '10%', left: '5%' } },
        { src: "/placeholder.svg", style: { width: '25%', top: '20%', right: '10%' } },
        { src: "/placeholder.svg", style: { width: '20%', bottom: '10%', left: '15%' } }
      ],
      buttonText: "Play Now",
      buttonLink: "/casino",
      icon: <CasinoIcon />
    },
    {
      id: 2,
      title: "Sports Betting",
      subtitle: "Support Your Team",
      background: "/placeholder.svg",
      images: [
        { src: "/placeholder.svg", style: { width: '35%', top: '15%', right: '5%' } }
      ],
      buttonText: "Bet Now",
      buttonLink: "/sports",
      icon: <SportsIcon />
    }
  ]

  // Popular Games Data
  const popularGames = [
    {
      id: 1,
      title: 'Crash',
      image: '/placeholder.svg',
      category: 'Crash Games',
      players: '1.2k',
      rating: 4.8,
      isHot: true
    },
    {
      id: 2,
      title: 'Dice',
      image: '/placeholder.svg',
      category: 'Dice Games',
      players: '856',
      rating: 4.6,
      isHot: false
    },
    {
      id: 3,
      title: 'Mines',
      image: '/placeholder.svg',
      category: 'Mines Games',
      players: '1.5k',
      rating: 4.9,
      isHot: true
    },
    {
      id: 4,
      title: 'Plinko',
      image: '/placeholder.svg',
      category: 'Plinko Games',
      players: '2.1k',
      rating: 4.7,
      isHot: false
    }
  ]

  // Roobet Exclusives Data
  const roobetExclusives = [
    {
      id: 1,
      title: 'MISSION UNCROSSABLE',
      image: '/placeholder.svg',
      category: 'Roobet Original',
      players: '2.5k',
      rating: 4.9,
      isExclusive: true
    },
    {
      id: 2,
      title: 'CRASH',
      image: '/placeholder.svg',
      category: 'Roobet Original',
      players: '3.1k',
      rating: 4.8,
      isExclusive: true
    },
    {
      id: 3,
      title: 'PLINKO',
      image: '/placeholder.svg',
      category: 'Roobet Original',
      players: '1.8k',
      rating: 4.7,
      isExclusive: true
    }
  ]

  // Sportsbook List Data
  const sportsbookList = [
    {
      id: 1,
      title: 'Football',
      image: '/placeholder.svg',
      matches: '15 Live',
      buttonText: 'View Matches',
      buttonLink: '/sports/football'
    },
    {
      id: 2,
      title: 'Basketball',
      image: '/placeholder.svg',
      matches: '8 Live',
      buttonText: 'View Matches',
      buttonLink: '/sports/basketball'
    },
    {
      id: 3,
      title: 'Tennis',
      image: '/placeholder.svg',
      matches: '12 Live',
      buttonText: 'View Matches',
      buttonLink: '/sports/tennis'
    }
  ]

  // Roobet Partners Data
  const roobetPartners = [
    {
      id: 1,
      name: 'NetEnt',
      logo: '/placeholder.svg',
      games: '50+ Games'
    },
    {
      id: 2,
      name: 'Microgaming',
      logo: '/placeholder.svg',
      games: '100+ Games'
    },
    {
      id: 3,
      name: 'Playtech',
      logo: '/placeholder.svg',
      games: '75+ Games'
    }
  ]

  return (
    <Box className="home-page">
      {/* Header with Auth Buttons and Profile */}


      {/* KOTH Banner */}


      {/* Register Now Banner */}
      {!isLoggedIn && <RegisterCarouselBanner />}
      {/* Slot Potato Banner */}
      <SlotPotatoBanner />

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
        className="profile-popover"
      >
        <List className="profile-menu">
          {/* Top Section - User-related actions */}
          <ListItem button className="menu-item">
            <ListItemIcon>
              <WalletIcon />
            </ListItemIcon>
            <ListItemText primary="Cashier" />
          </ListItem>

          <ListItem button className="menu-item">
            <ListItemIcon>
              <GiftIcon />
            </ListItemIcon>
            <ListItemText primary="Rewards" />
          </ListItem>

          <ListItem button className="menu-item">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Account Settings" />
          </ListItem>

          <ListItem button className="menu-item">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>

          <ListItem button className="menu-item">
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>

          <ListItem button className="menu-item">
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary="Refer & Earn" />
          </ListItem>

          <Divider className="menu-divider" />

          {/* Middle Section - Support-related actions */}
          <ListItem button className="menu-item">
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help Center" />
          </ListItem>

          <ListItem button className="menu-item">
            <ListItemIcon>
              <SupportIcon />
            </ListItemIcon>
            <ListItemText primary="Live Support" />
          </ListItem>

          <Divider className="menu-divider" />

          {/* Bottom Section - Account management */}
          <ListItem button onClick={handleLogout} className="menu-item logout-item">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Popover>
    </Box>
  )
}

export default HomePage
