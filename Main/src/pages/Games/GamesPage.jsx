import React, { useState } from 'react'
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  TextField,
  InputAdornment,
  Chip,
  Button,
  Tabs,
  Tab,
  Container
} from '@mui/material'
import { 
  Search as SearchIcon,
  PlayArrow as PlayIcon,
  Star as StarIcon,
  TrendingUp as TrendingIcon
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import './GamesPage.scss'

const GamesPage = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(0)

  const categories = [
    'All Games',
    'Crash Games',
    'Dice Games',
    'Mines Games',
    'Plinko Games',
    'Roulette Games',
    'Slot Games',
    'Card Games'
  ]

  const games = [
    {
      id: 1,
      title: 'Crash',
      image: '/placeholder.svg',
      category: 'Crash Games',
      players: '1.2k',
      rating: 4.8,
      isHot: true,
      isNew: false,
      minBet: '$0.10',
      maxBet: '$1000'
    },
    {
      id: 2,
      title: 'Dice',
      image: '/placeholder.svg',
      category: 'Dice Games',
      players: '856',
      rating: 4.6,
      isHot: false,
      isNew: true,
      minBet: '$0.01',
      maxBet: '$500'
    },
    {
      id: 3,
      title: 'Mines',
      image: '/placeholder.svg',
      category: 'Mines Games',
      players: '1.5k',
      rating: 4.9,
      isHot: true,
      isNew: false,
      minBet: '$0.05',
      maxBet: '$2000'
    },
    {
      id: 4,
      title: 'Plinko',
      image: '/placeholder.svg',
      category: 'Plinko Games',
      players: '2.1k',
      rating: 4.7,
      isHot: false,
      isNew: false,
      minBet: '$0.10',
      maxBet: '$1000'
    },
    {
      id: 5,
      title: 'Roulette',
      image: '/placeholder.svg',
      category: 'Roulette Games',
      players: '3.2k',
      rating: 4.5,
      isHot: false,
      isNew: false,
      minBet: '$1.00',
      maxBet: '$5000'
    },
    {
      id: 6,
      title: 'Blackjack',
      image: '/placeholder.svg',
      category: 'Card Games',
      players: '1.8k',
      rating: 4.4,
      isHot: false,
      isNew: true,
      minBet: '$5.00',
      maxBet: '$10000'
    }
  ]

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 0 || game.category === categories[selectedCategory]
    return matchesSearch && matchesCategory
  })

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue)
  }

  return (
    <Box className="games-page">
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box className="page-header">
          <Typography variant="h1" className="page-title">
            All Games
          </Typography>
          <Typography variant="h5" className="page-subtitle">
            Discover and play the best casino games
          </Typography>
        </Box>

        {/* Search and Filters */}
        <Box className="search-filters">
          <TextField
            fullWidth
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            className="search-input"
          />
        </Box>

        {/* Category Tabs */}
        <Box className="category-tabs">
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            className="tabs"
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category} className="tab" />
            ))}
          </Tabs>
        </Box>

        {/* Games Grid */}
        <Grid container spacing={3} className="games-grid">
          {filteredGames.map((game) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={game.id}>
              <Card className="game-card" onClick={() => navigate(`/games/${game.id}`)}>
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
                  <Box className="game-badges">
                    {game.isHot && (
                      <Chip
                        label="HOT"
                        color="error"
                        size="small"
                        className="badge hot"
                      />
                    )}
                    {game.isNew && (
                      <Chip
                        label="NEW"
                        color="success"
                        size="small"
                        className="badge new"
                      />
                    )}
                  </Box>
                </Box>
                <CardContent className="game-content">
                  <Typography variant="h6" className="game-title">
                    {game.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="game-category">
                    {game.category}
                  </Typography>
                  
                  <Box className="game-stats">
                    <Box className="stat">
                      <Typography variant="body2" color="text.secondary">
                        Players
                      </Typography>
                      <Typography variant="body1" color="primary">
                        {game.players}
                      </Typography>
                    </Box>
                    <Box className="stat">
                      <Typography variant="body2" color="text.secondary">
                        Rating
                      </Typography>
                      <Box className="rating">
                        <StarIcon color="warning" fontSize="small" />
                        <Typography variant="body1">
                          {game.rating}
                        </Typography>
                      </Box>
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

        {/* No Results */}
        {filteredGames.length === 0 && (
          <Box className="no-results">
            <Typography variant="h5" color="text.secondary">
              No games found matching your criteria
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Try adjusting your search or category filter
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default GamesPage
