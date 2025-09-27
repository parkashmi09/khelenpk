import React from 'react'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './InfluencerPromotionCarousel.scss'

const defaultItems = [
  { id: 1, name: 'Alina', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop' },
  { id: 2, name: 'Sara', src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop' },
  { id: 3, name: 'Noor', src: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop' },
  { id: 4, name: 'Aisha', src: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=400&h=400&fit=crop' },
  { id: 5, name: 'Hina', src: 'https://images.unsplash.com/photo-1547425260-1d9d0b3d3431?w=400&h=400&fit=crop' },
  { id: 6, name: 'Eman', src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=400&fit=crop' },
  { id: 7, name: 'Zoya', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop' },
  { id: 8, name: 'Anaya', src: 'https://images.unsplash.com/photo-1544005313-1107b1b1b3f7?w=400&h=400&fit=crop' }
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