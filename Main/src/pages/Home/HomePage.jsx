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
  Avatar,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
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
// Themed SVG icons for Trust cards
import IconSupport from '../../assets/images/newDesignIcons/Chat.svg'
import IconCash from '../../assets/images/newDesignIcons/Cash.svg'
import IconSend from '../../assets/images/newDesignIcons/Send.svg'
import IconBTC from '../../assets/images/newDesignIcons/BTC.svg'
import CustomGameListSection from './Game'
import DepositIcon from '../../assets/images/deposit.webp'

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
      background: "/GameCtaFolder/casino-bg.avif",
      images: [
        { src: "/GameCtaFolder/casino-image.png", style: { width: '35%', top: '15%', right: '10%' } }
      ],
      buttonText: "Play Now",
      buttonLink: "/casino",
      icon: <CasinoIcon />
    },
    {
      id: 2,
      title: "Sports Betting",
      subtitle: "Support Your Team",
      background: "/GameCtaFolder/sports-bg.avif",
      images: [
        { src: "https://mglionpk.com/wp-content/themes/mglionpk/assets/images/sports-CgbCtznl.webp", style: { width: '40%', top: '10%', right: '5%' } }
      ],
      buttonText: "Bet Now",
      buttonLink: "/sports",
      icon: <SportsIcon />
    },  
    
    {
      id: 4,
      title: "Racing",
      subtitle: "Compete with the best",
      background: "/GameCtaFolder/casino-bg.avif",
      images: [
        { src: "https://mglionpk.com/wp-content/themes/mglionpk/assets/images/racing-B0zGAPWI.webp", style: { width: '35%', top: '15%', right: '8%' } }
      ],
      buttonText: "Play Now",
      buttonLink: "/casino",
      icon: <CasinoIcon />
    },{
      id: 3,
      title: "Lottery",
      subtitle: "Win Big Prizes",
      background: "/GameCtaFolder/sports-bg.avif",
      images: [
        { src: "https://mglionpk.com/wp-content/themes/mglionpk/assets/images/lottery-DUgna72e.webp", style: { width: '40%', top: '10%', right: '5%' } }
      ],
      buttonText: "Bet Now",
      buttonLink: "/sports",
      icon: <SportsIcon />
    },  
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

  // Trust & Highlights Slider Data
  const trustSliderData = [
    {
      id: 1,
      icon: {
        src: IconBTC,
        alt: "Trusted Platform"
      },
      title: "#1 Trusted Platform",
      subtitle: "Most trusted betting platform in Pakistan",
      description: "Join thousands of satisfied players who trust our secure and reliable gaming platform with proven track record of fair play and instant payouts.",
      theme: "primary"
    },
    {
      id: 2,
      icon: {
        src: IconSupport,
        alt: "Support"
      },
      title: "24/7 Support",
      subtitle: "Round-the-clock customer assistance",
      description: "Our dedicated support team is available 24/7 to help you with any questions or issues. Get instant help through live chat, email, or phone support.",
      theme: "secondary"
    },
    {
      id: 3,
      icon: {
        src: DepositIcon,
        alt: "Wallet"
      },
      title: "Easy Deposits",
      subtitle: "Quick & secure transactions",
      description: "Enjoy hassle-free deposits and withdrawals with multiple payment options including bank transfers, digital wallets, and cryptocurrency.",
      theme: "success"
    },
    {
      id: 4,
      icon: {
        src: IconSend,
        alt: "Bonuses"
      },
      title: "Exciting Bonuses",
      subtitle: "Amazing rewards & giveaways",
      description: "Boost your gaming experience with generous welcome bonuses, daily rewards, cashback offers, and exclusive VIP benefits for loyal players.",
      theme: "accent"
    },
    {
      id: 5,
      icon: {
        src: "https://cdn-icons-png.flaticon.com/512/3135/3135809.png",
        alt: "Security"
      },
      title: "Bank-Level Security",
      subtitle: "Your data is always protected",
      description: "Advanced encryption and security measures ensure your personal information and funds are completely safe and secure at all times.",
      theme: "security"
    },
    {
      id: 6,
      icon: {
        src: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
        alt: "Fast Payouts"
      },
      title: "Lightning Fast Payouts",
      subtitle: "Get your winnings instantly",
      description: "Experience the fastest withdrawal processing in the industry. Most payouts are processed within minutes, not hours or days.",
      theme: "speed"
    }
  ]

  // Swiper configuration
  const trustSwiperConfig = {
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    autoHeight: true,
    speed: 600,
    observer: true,
    observeParents: true,
    resizeObserver: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
      },
    },
    modules: [Autoplay, Pagination]
  }

  return (
    <Box className="home-page">
      {/* Header with Auth Buttons and Profile */}


      {/* KOTH Banner */}


      {/* Register Now Banner */}
      {!isLoggedIn && <RegisterCarouselBanner />}
      {/* Slot Potato Banner */}
      <SlotPotatoBanner />

      {/* Game CTAs Section - Casino & Sports */}
      <Box className="game-cta-section">
        <Box className="game-cta-container">
          {gameCTAs.map((cta) => (
            <Box className="game-cta-card-container" key={cta.id}>
              <Box className="game-cta-card" onClick={() => navigate(cta.buttonLink)}>
                {/* Background Image */}
                <Box className="cta-background">
                  <img src={cta.background} alt={`${cta.title} background`} />
                </Box>
                
                {/* Floating Images */}
                {cta.images.map((image, index) => (
                  <Box
                    key={index}
                    className="cta-floating-image"
                    style={image.style}
                  >
                    <img 
                      src={image.src} 
                      alt={`${cta.title} element ${index + 1}`}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Box>
                ))}
                
                {/* Content Overlay */}
                <Box className="cta-content">
                  <Typography variant="h3" className="cta-title">
                    {cta.title}
                  </Typography>
                  <Typography variant="h6" className="cta-subtitle">
                    {cta.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Trust & Highlights Section */}
      <Box className="trust-section">
        <Swiper 
          className="trust-swiper" 
          {...trustSwiperConfig}
        >
          {trustSliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Box className={`trust-card trust-card--${slide.theme}`}>
                <Box className="trust-card-content">
                  <Box className="trust-icon-wrapper">
                    <img 
                      src={slide.icon.src}
                      alt={slide.icon.alt}
                      className="trust-custom-icon" 
                      loading="lazy"
                    />
                  </Box>
                  <Typography variant="h4" className="trust-card-title">
                    {slide.title}
                  </Typography>
                  <Typography variant="h6" className="trust-card-subtitle">
                    {slide.subtitle}
                  </Typography>
                  <Typography variant="body1" className="trust-card-text">
                    {slide.description}
                  </Typography>
                  <a href="#" className="roo-button roo-button--secondary roo-button--medium trust-card-btn">
                    <span className="roo-button__label">Learn more</span>
                  </a>
                  <Box className="trust-card-indicator">
                    <span className={`indicator-dot indicator-dot--${slide.theme}`}></span>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <CustomGameListSection/>

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
