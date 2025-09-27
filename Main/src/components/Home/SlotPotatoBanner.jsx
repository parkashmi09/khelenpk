import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '../Common/Button/Button'
import potatoBannerImage from '../../assets/images/potato-banner0mage.avif'
import './SlotPotatoBanner.scss'

const SlotPotatoBanner = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(true)
  const [countdown, setCountdown] = useState({
    days: 4,
    hours: 14,
    minutes: 55
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 }
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59 }
        }
        return prev
      })
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const handleLearnMore = () => {
    // navigate('/raffle')
    window.location.href = 'https://khelen.com/'
  }

  const handleRaffleWinners = () => {
    navigate('/winners')
  }

  if (!isActive) return null

  return (
    <Box className="slot-potato-banner">
      <Box className="banner-background">
        <img 
          src={potatoBannerImage} 
          alt="Potato Banner Background" 
          className="background-image"
        />
      </Box>
      
      <Box className="banner-content">
        <Box className="left-section">
          <Box className="text-content">
            <Typography variant="h2" className="banner-title">
              <span className="amount">$100,000 Weekly</span>
              <span className="raffle-text">Raffle</span>
            </Typography>
          </Box>
          
          <Box className="action-buttons">
            <Button 
              variant="primary"
              size="medium"
              onClick={handleLearnMore}
              className="learn-more-button"
            >
              Learn More
            </Button>
            
            <Box className="countdown-pill">
              <Box className="clock-icon">⏰</Box>
              <Typography className="countdown-text">
                {countdown.days}d {countdown.hours}h {countdown.minutes}m
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="right-section">
          <Box className="raffle-winners-pill">
            <Box className="trophy-icon">🏆</Box>
            <Typography className="winners-text">
              100 Raffle Winners
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SlotPotatoBanner
