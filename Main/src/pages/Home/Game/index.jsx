import React, { useState } from 'react'

import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import FirstGame from '@assets/images/first.png'
import SecondOriginalGame from '@assets/images/2nd.png'
import SecondGame from '@assets/images/second.png'
import ThirdGame from '@assets/images/3rd.png'
import FourthGame from '@assets/images/4th.png'
import FifthGame from '@assets/images/5th.png'
import SixthGame from '@assets/images/6th.png'

import PopularGame1 from '@assets/images/22.png'
import PopularGame2 from '@assets/images/33.png'
import PopularGame3 from '@assets/images/44.png'
import PopularGame4 from '@assets/images/55.png'
import PopularGame5 from '@assets/images/66.png'
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
              backgroundColor: 'rgb(44, 40, 82)',
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
              height: '220px',
              position: 'relative',
              backgroundColor: 'rgb(25, 25, 57)', // Placeholder background
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
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    userSelect: 'none',
                    objectFit: 'cover'
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

              {/* Skeleton Placeholder Overlay */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: '#191939',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.3,
                pointerEvents: 'none'
              }}>

              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  )
}

const CustomGameListSection = () => {
  // Sample data for Roobet Originals
  const roobetOriginals = [
    {
      id: '1',
      title: 'MISSION UNCROSSABLE',
      provider: 'ROOBET',
      image: FirstGame
    },
    {
      id: '2',
      title: 'CRASH',
      provider: 'ROOBET',
      image: SecondOriginalGame
    },
    {
      id: '3',
      title: 'PLINKO',
      provider: 'ROOBET',
      image: ThirdGame
    },
    {
      id: '4',
      title: 'DICE',
      provider: 'ROOBET',
      image: FourthGame
    },
    {
      id: '5',
      title: 'MINES',
      provider: 'ROOBET',
      image: FifthGame
    },
    {
      id: '6',
      title: 'EXTRA GAME 1',
      provider: 'ROOBET',
      image: SixthGame
    },
    {
      id: '7',
      title: 'EXTRA GAME 2',
      provider: 'ROOBET',
      image: 'https://roobet.com/cdn-cgi/image/dpr=2.0,width=195,height=260,quality=90,blur=0,fit=cover,format=auto/https://roobet-dev-public-images-prod.s3.amazonaws.com/housegames:towers-H9BawlL5-.png'
    }
  ]

  // Sample data for Popular Games
  const popularGames = [
    {
      id: '8',
      title: 'WILD GANGS',
      provider: 'DEGEN STUDIOS',
      image: SecondGame,
      isExclusive: true
    },
    {
      id: '9',
      title: 'SWEET BONANZA 1000',
      provider: 'PRAGMATIC PLAY',
      image: PopularGame1
    },
    {
      id: '10',
      title: 'GATOR HUNTERS',
      provider: 'NOLIMIT CITY',
      image: PopularGame2,
      isNew: true
    },
    {
      id: '11',
      title: 'GATES OF OLYMPUS SUPER SCATTER',
      provider: 'PRAGMATIC PLAY',
      image: PopularGame3
    },
    {
      id: '12',
      title: 'POMPEII MEGAREELS MEGAWAYS',
      provider: 'PRAGMATIC PLAY',
      image: PopularGame4
    },
    {
      id: '13',
      title: 'EXTRA POPULAR 1',
      provider: 'PRAGMATIC PLAY',
      image: PopularGame5
    },
    {
      id: '14',
      title: 'EXTRA POPULAR 2',
      provider: 'PRAGMATIC PLAY',
      image: 'https://roobet.com/cdn-cgi/image/dpr=2.0,width=195,height=260,quality=90,blur=0,fit=cover,format=auto/https://roobet-dev-public-images-prod.s3.amazonaws.com/hacksaw:1172-6P6fOddbJ.jpeg'
    }
    
  ]

  return (
    <div style={{

    }}>
      <GameSection title="Roobet Originals" games={roobetOriginals} />
      <GameSection title="Popular Games" games={popularGames} />
    </div>
  )
}

export default CustomGameListSection
