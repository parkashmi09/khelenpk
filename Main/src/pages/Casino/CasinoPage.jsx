import React from 'react'
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Button,
  Chip,
  Container,
  Tabs,
  Tab
} from '@mui/material'
import { 
  PlayArrow as PlayIcon,
  LiveTv as LiveIcon,
  Star as StarIcon,
  Casino as CasinoIcon
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import './CasinoPage.scss'

const CasinoPage = () => {
  const navigate = useNavigate()

  const liveGames = [
    {
      id: 1,
      title: 'Live Blackjack',
      image: '/placeholder.svg',
      dealer: 'Sarah',
      players: '12',
      minBet: '$5',
      maxBet: '$1000',
      isLive: true
    },
    {
      id: 2,
      title: 'Live Roulette',
      image: '/placeholder.svg',
      dealer: 'Mike',
      players: '18',
      minBet: '$1',
      maxBet: '$500',
      isLive: true
    },
    {
      id: 3,
      title: 'Live Baccarat',
      image: '/placeholder.svg',
      dealer: 'Emma',
      players: '8',
      minBet: '$10',
      maxBet: '$2000',
      isLive: true
    }
  ]

  const tableGames = [
    {
      id: 4,
      title: 'Blackjack Classic',
      image: '/placeholder.svg',
      players: '45',
      minBet: '$1',
      maxBet: '$500',
      isLive: false
    },
    {
      id: 5,
      title: 'European Roulette',
      image: '/placeholder.svg',
      players: '67',
      minBet: '$0.50',
      maxBet: '$1000',
      isLive: false
    },
    {
      id: 6,
      title: 'Three Card Poker',
      image: '/placeholder.svg',
      players: '23',
      minBet: '$2',
      maxBet: '$200',
      isLive: false
    }
  ]

  const slotGames = [
    {
      id: 7,
      title: 'Mega Fortune',
      image: '/placeholder.svg',
      provider: 'NetEnt',
      volatility: 'High',
      rtp: '96.6%',
      isLive: false
    },
    {
      id: 8,
      title: 'Starburst',
      image: '/placeholder.svg',
      provider: 'NetEnt',
      volatility: 'Low',
      rtp: '96.1%',
      isLive: false
    },
    {
      id: 9,
      title: 'Book of Dead',
      image: '/placeholder.svg',
      provider: 'Play\'n GO',
      volatility: 'High',
      rtp: '96.2%',
      isLive: false
    }
  ]

  return (
    <Box className="casino-page">
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box className="page-header">
          <Typography variant="h1" className="page-title">
            Casino Games
          </Typography>
          <Typography variant="h5" className="page-subtitle">
            Experience the thrill of live casino games and classic table games
          </Typography>
        </Box>

        {/* Live Casino Section */}
        <Box className="section-container">
          <Box className="section-header">
            <Box className="section-title-container">
              <LiveIcon className="section-icon" />
              <Typography variant="h2" className="section-title">
                Live Casino
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Play with real dealers in real-time
            </Typography>
          </Box>

          <Grid container spacing={3} className="games-grid">
            {liveGames.map((game) => (
              <Grid item xs={12} sm={6} md={4} key={game.id}>
                <Card className="game-card live" onClick={() => navigate(`/casino/${game.id}`)}>
                  <Box className="game-image-container">
                    <CardMedia
                      component="img"
                      height="200"
                      image={game.image}
                      alt={game.title}
                      className="game-image"
                    />
                    <Box className="live-indicator">
                      <LiveIcon />
                      <Typography variant="body2">LIVE</Typography>
                    </Box>
                    <Box className="game-overlay">
                      <Button
                        variant="contained"
                        startIcon={<PlayIcon />}
                        className="play-button"
                      >
                        Join Table
                      </Button>
                    </Box>
                  </Box>
                  <CardContent className="game-content">
                    <Typography variant="h6" className="game-title">
                      {game.title}
                    </Typography>
                    <Box className="game-details">
                      <Box className="detail">
                        <Typography variant="body2" color="text.secondary">
                          Dealer
                        </Typography>
                        <Typography variant="body1">
                          {game.dealer}
                        </Typography>
                      </Box>
                      <Box className="detail">
                        <Typography variant="body2" color="text.secondary">
                          Players
                        </Typography>
                        <Typography variant="body1" color="primary">
                          {game.players}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="bet-limits">
                      <Typography variant="body2" color="text.secondary">
                        Bet Limits
                      </Typography>
                      <Typography variant="body2">
                        {game.minBet} - {game.maxBet}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Table Games Section */}
        <Box className="section-container">
          <Box className="section-header">
            <Box className="section-title-container">
              <CasinoIcon className="section-icon" />
              <Typography variant="h2" className="section-title">
                Table Games
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Classic casino games with computer dealers
            </Typography>
          </Box>

          <Grid container spacing={3} className="games-grid">
            {tableGames.map((game) => (
              <Grid item xs={12} sm={6} md={4} key={game.id}>
                <Card className="game-card table" onClick={() => navigate(`/casino/${game.id}`)}>
                  <Box className="game-image-container">
                    <CardMedia
                      component="img"
                      height="200"
                      image={game.image}
                      alt={game.title}
                      className="game-image"
                    />
                    <Box className="game-overlay">
                      <Button
                        variant="contained"
                        startIcon={<PlayIcon />}
                        className="play-button"
                      >
                        Play Now
                      </Button>
                    </Box>
                  </Box>
                  <CardContent className="game-content">
                    <Typography variant="h6" className="game-title">
                      {game.title}
                    </Typography>
                    <Box className="game-details">
                      <Box className="detail">
                        <Typography variant="body2" color="text.secondary">
                          Players
                        </Typography>
                        <Typography variant="body1" color="primary">
                          {game.players}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="bet-limits">
                      <Typography variant="body2" color="text.secondary">
                        Bet Limits
                      </Typography>
                      <Typography variant="body2">
                        {game.minBet} - {game.maxBet}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Slot Games Section */}
        <Box className="section-container">
          <Box className="section-header">
            <Box className="section-title-container">
              <CasinoIcon className="section-icon" />
              <Typography variant="h2" className="section-title">
                Slot Games
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Popular slot games from top providers
            </Typography>
          </Box>

          <Grid container spacing={3} className="games-grid">
            {slotGames.map((game) => (
              <Grid item xs={12} sm={6} md={4} key={game.id}>
                <Card className="game-card slot" onClick={() => navigate(`/casino/${game.id}`)}>
                  <Box className="game-image-container">
                    <CardMedia
                      component="img"
                      height="200"
                      image={game.image}
                      alt={game.title}
                      className="game-image"
                    />
                    <Box className="game-overlay">
                      <Button
                        variant="contained"
                        startIcon={<PlayIcon />}
                        className="play-button"
                      >
                        Spin Now
                      </Button>
                    </Box>
                  </Box>
                  <CardContent className="game-content">
                    <Typography variant="h6" className="game-title">
                      {game.title}
                    </Typography>
                    <Box className="game-details">
                      <Box className="detail">
                        <Typography variant="body2" color="text.secondary">
                          Provider
                        </Typography>
                        <Typography variant="body1">
                          {game.provider}
                        </Typography>
                      </Box>
                      <Box className="detail">
                        <Typography variant="body2" color="text.secondary">
                          RTP
                        </Typography>
                        <Typography variant="body1" color="success.main">
                          {game.rtp}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="volatility">
                      <Typography variant="body2" color="text.secondary">
                        Volatility
                      </Typography>
                      <Chip 
                        label={game.volatility} 
                        color={game.volatility === 'High' ? 'error' : 'success'}
                        size="small"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default CasinoPage
