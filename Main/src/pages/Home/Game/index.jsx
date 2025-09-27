import React, { useState } from 'react'

import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import FirstGame from '@assets/images/first.png'
import SecondOriginalGame from '@assets/images/2nd.png'
import ThirdGame from '@assets/images/3rd.png'
import FourthGame from '@assets/images/4th.png'
import FifthGame from '@assets/images/5th.png'
import SixthGame from '@assets/images/6th.png'

import SlotImg1 from '@assets/images/slot-games/1.png'
import SlotImg2 from '@assets/images/slot-games/2.png'
import SlotImg3 from '@assets/images/slot-games/3.png'
import SlotImg4 from '@assets/images/slot-games/4.png'
import SlotImg5 from '@assets/images/slot-games/5.png'
import SlotImg6 from '@assets/images/slot-games/6.png'
import SlotImg7 from '@assets/images/slot-games/7.png'
import SlotImg8 from '@assets/images/slot-games/8.png'




import LiveCasino1 from '@assets/images/Livecasino/1.png'
import LiveCasino2 from '@assets/images/Livecasino/2.png'
import LiveCasino3 from '@assets/images/Livecasino/3.png'
import LiveCasino4 from '@assets/images/Livecasino/4.png'
import LiveCasino5 from '@assets/images/Livecasino/5.png'
import LiveCasino6 from '@assets/images/Livecasino/6.png'
import LiveCasino7 from '@assets/images/Livecasino/7.png'
import LiveCasino8 from '@assets/images/Livecasino/8.png'





import { Typography } from '@mui/material'



const GameSection = ({ title, games }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, games.length - 7) // Show 7 games at a time

  const goLeft = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const goRight = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  const canGoLeft = currentIndex > 0
  const canGoRight = currentIndex < maxIndex

  return (
    <div style={{
      marginBottom: '40px',
      touchAction: 'pan-y',
      WebkitOverflowScrolling: 'touch'
    }}>
      {/* Header Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            color: 'rgb(255, 255, 255)',
            fontWeight: 700,
            fontSize: '24px'
          }}
        >
          {title}
        </Typography>

        {/* Navigation Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          {/* View All Button */}
          {/* <button
            style={{
              position: 'relative',
              boxSizing: 'border-box',
              WebkitTapHighlightColor: 'transparent',
              cursor: 'pointer',
              userSelect: 'none',
              verticalAlign: 'middle',
              appearance: 'none',
              fontFamily: 'Excon, Roboto',
              fontSize: '0.9375rem',
              lineHeight: 1.75,
              minWidth: '64px',
              textAlign: 'center',
              textTransform: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'rgb(255, 255, 255)',
              fontWeight: 700,
              letterSpacing: 'normal',
              backgroundColor: 'rgb(44, 40, 82)',
              boxShadow: 'none !important',
              outline: '0px',
              borderWidth: '0px',
              borderStyle: 'initial',
              borderColor: 'initial',
              borderImage: 'initial',
              margin: '0px',
              textDecoration: 'none',
              transition: 'background-color 250ms cubic-bezier(0.7, -0.4, 0.4, 1.4), box-shadow 250ms cubic-bezier(0.7, -0.4, 0.4, 1.4), border-color 250ms cubic-bezier(0.7, -0.4, 0.4, 1.4), color 250ms cubic-bezier(0.7, -0.4, 0.4, 1.4)',
              borderRadius: '12px',
              padding: '11px 14px 13px',
            }}
          >
            View All
          </button> */}

          {/* Navigation Arrows */}
          <div style={{ display: 'flex' }}>
            {/* Left Arrow */}
            <button
              onClick={goLeft}
              disabled={!canGoLeft}
              style={{
                position: 'relative',
                boxSizing: 'border-box',
                WebkitTapHighlightColor: 'transparent',
                cursor: canGoLeft ? 'pointer' : 'not-allowed',
                userSelect: 'none',
                verticalAlign: 'middle',
                appearance: 'none',
                textAlign: 'center',
                fontSize: '1.75rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'rgb(255, 255, 255)',
                fontWeight: 700,
                letterSpacing: 'normal',
                backgroundColor: canGoLeft ? 'rgb(44, 40, 82)' : 'rgba(68, 64, 130, 0.5)',
                boxShadow: 'none !important',
                outline: '0px',
                borderWidth: '0px',
                borderStyle: 'initial',
                borderColor: 'initial',
                borderImage: 'initial',
                margin: '0px',
                textDecoration: 'none',
                flex: '0 0 auto',
                overflow: 'visible',
                transition: 'background-color 150ms cubic-bezier(0.7, -0.4, 0.4, 1.4)',
                borderRadius: '12px 0px 0px 12px',
                padding: '8px',
                opacity: canGoLeft ? 1 : 0.6,
              }}
            >
              <ChevronLeft />
            </button>

            {/* Right Arrow */}
            <button
              onClick={goRight}
              disabled={!canGoRight}
              style={{
                position: 'relative',
                boxSizing: 'border-box',
                WebkitTapHighlightColor: 'transparent',
                cursor: canGoRight ? 'pointer' : 'not-allowed',
                userSelect: 'none',
                verticalAlign: 'middle',
                appearance: 'none',
                textAlign: 'center',
                fontSize: '1.75rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'rgb(255, 255, 255)',
                fontWeight: 700,
                letterSpacing: 'normal',
                backgroundColor: canGoRight ? 'rgb(44, 40, 82)' : 'rgba(68, 64, 130, 0.5)',
                boxShadow: 'none !important',
                outline: '0px',
                borderWidth: '0px',
                borderStyle: 'initial',
                borderColor: 'initial',
                borderImage: 'initial',
                margin: '0px',
                textDecoration: 'none',
                flex: '0 0 auto',
                overflow: 'visible',
                transition: 'background-color 150ms cubic-bezier(0.7, -0.4, 0.4, 1.4)',
                borderRadius: '0px 12px 12px 0px',
                padding: '8px',
                opacity: canGoRight ? 1 : 0.6,
              }}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div style={{
        display: 'flex',
        gap: '10px',
        overflow: 'hidden',
        touchAction: 'pan-y',
        WebkitOverflowScrolling: 'touch'
      }}>
        {games.slice(currentIndex, currentIndex + 7).map((game) => (
          <div
            key={game.id}
            style={{
              flex: '0 0 173px',
              position: 'relative',
              cursor: 'pointer',
              borderRadius: '12px',
              overflow: 'hidden',
              // backgroundColor: 'rgb(44, 40, 82)',
              transition: 'transform 0.2s ease',
              touchAction: 'pan-y'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            {/* Game Image */}
            <div style={{
              width: '100%',
              height: '260px',
              position: 'relative',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Game Image or Placeholder */}
              {game.image ? (
                <img
                  src={game.image}
                  alt={game.title}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    userSelect: 'none',
                    objectFit: 'cover',
                    imageRendering: 'auto'
                  }}
                />
              ) : (
                <div style={{
                  width: '120px',
                  height: '150px',
                  backgroundColor: 'rgb(68, 64, 130)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgb(255, 255, 255)',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  {game.title}
                </div>
              )}

              {/* Removed overlay to prevent image dimming/blurring */}
            </div>


          </div>
        ))}
      </div>
    </div>
  )
}

const CustomGameListSection = () => {
  // Sample data for Roobet Originals
  const LiveCasinoGames = [
    {
      id: '1',
      title: 'MISSION UNCROSSABLE',
      provider: 'ROOBET',
      image: LiveCasino1
    },
    {
      id: '2',
      title: 'CRASH',
      provider: 'ROOBET',
      image: LiveCasino2
    },
    {
      id: '3',
      title: 'PLINKO',
      provider: 'ROOBET',
      image: LiveCasino3
    },
    {
      id: '4',
      title: 'DICE',
      provider: 'ROOBET',
      image: LiveCasino4
    },
    {
      id: '5',
      title: 'MINES',
      provider: 'ROOBET',
      image: LiveCasino5
    },
    {
      id: '6',
      title: 'EXTRA GAME 1',
      provider: 'ROOBET',
      image: LiveCasino6
    },
    {
      id: '7',
      title: 'EXTRA GAME 2',
      provider: 'ROOBET',
      image: LiveCasino7
    },
    {
      id: '8',
      title: 'EXTRA GAME 3',
      provider: 'ROOBET',
      image: LiveCasino8
    }
  ]

  // Sample data for Popular Games
  const slotGames = [
    { id: '8', title: 'SLOT 1', provider: 'SLOTS', image: SlotImg1 },
    { id: '9', title: 'SLOT 2', provider: 'SLOTS', image: SlotImg2 },
    { id: '10', title: 'SLOT 3', provider: 'SLOTS', image: SlotImg3 },
    { id: '11', title: 'SLOT 4', provider: 'SLOTS', image: SlotImg4 },
    { id: '12', title: 'SLOT 5', provider: 'SLOTS', image: SlotImg5 },
    { id: '13', title: 'SLOT 6', provider: 'SLOTS', image: SlotImg6 },
    { id: '14', title: 'SLOT 7', provider: 'SLOTS', image: SlotImg7 },
    { id: '15', title: 'SLOT 8', provider: 'SLOTS', image: SlotImg8 },
  ]

  return (
    <div style={{

    }}>
      <GameSection title="Slot Games" games={slotGames} />
      <GameSection title="Live Casino" games={LiveCasinoGames} />
    </div>
  )
}

export default CustomGameListSection
