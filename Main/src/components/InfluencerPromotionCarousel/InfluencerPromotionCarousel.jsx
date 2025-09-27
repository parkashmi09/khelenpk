import React from 'react'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './InfluencerPromotionCarousel.scss'

const defaultItems = [
  { id: 1, name: 'Influencer 1', src: '/influencers/1.webp' },
  { id: 2, name: 'Influencer 2', src: '/influencers/2.png' },
  { id: 3, name: 'Influencer 3', src: '/influencers/3.png' },
  { id: 4, name: 'Influencer 4', src: '/influencers/4.jpeg' },
  { id: 5, name: 'Influencer 5', src: '/influencers/5.png' },
  { id: 6, name: 'Influencer 7', src: '/influencers/7.png' },
  { id: 7, name: 'Influencer 8', src: '/influencers/8.png' },
  { id: 8, name: 'Influencer 9', src: '/influencers/9.png' },
  { id: 9, name: 'Influencer 10', src: '/influencers/10.png' },
  { id: 10, name: 'Influencer 11', src: '/influencers/11.png' },
  { id: 11, name: 'Influencer 12', src: '/influencers/12.jpeg' }
]

const InfluencerPromotionCarousel = ({ items = defaultItems, title = 'Celebs Who likes', subtitle = 'Our Casino games online for real money' }) => {
  const swiperConfig = {
    slidesPerView: 2,
    spaceBetween: 12,
    loop: true,
    loopedSlides: items.length,
    loopAdditionalSlides: 4,
    slidesPerGroup: 1,
    speed: 800,
    centeredSlides: false,
    allowTouchMove: true,
    autoplay: { 
      delay: 2000, 
      disableOnInteraction: false, 
      pauseOnMouseEnter: true 
    },
    navigation: { 
      prevEl: '.celebrity_prev', 
      nextEl: '.celebrity_next' 
    },
    breakpoints: {
      // Mobile: 2 cards
      380: { 
        slidesPerView: 2, 
        spaceBetween: 16,
        centeredSlides: false
      },
      // Small tablet: 3 cards
      600: { 
        slidesPerView: 3, 
        spaceBetween: 18,
        centeredSlides: false
      },
      // Medium tablet: 5 cards
      900: { 
        slidesPerView: 5, 
        spaceBetween: 20,
        centeredSlides: false
      },
      // Desktop: 8 cards
      1200: { 
        slidesPerView: 8, 
        spaceBetween: 22,
        centeredSlides: false
      },
    },
    modules: [Autoplay, Navigation]
  }

  return (
    <Box className="celebrity_section">
      <Box className="celebrity_header">
        <Typography variant="body1" className="celebrity_kicker">{title}</Typography>
        <Typography variant="h3" className="celebrity_heading">{subtitle}</Typography>
        <Box className="celebrity_nav">
          <button className="celebrity_nav_btn celebrity_prev" aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="celebrity_nav_btn celebrity_next" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </Box>
      </Box>

      <Box className="celebrity_section_inner">
        <Swiper className="swiper-container" {...swiperConfig}>
          {items.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={`${item.id}-${index}`}>
              <Box className="celebrity_avatar_wrap">
                <Box className="celebrity_avatar_ring">
                  <img 
                    src={item.src} 
                    alt={item.name} 
                    className="celebrity_avatar"
                    loading="lazy"
                  />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}

export default InfluencerPromotionCarousel