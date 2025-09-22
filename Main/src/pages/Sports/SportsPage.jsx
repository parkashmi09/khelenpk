import React, { useState } from 'react'
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
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material'
import { 
  SportsSoccer as SoccerIcon,
  SportsBasketball as BasketballIcon,
  SportsTennis as TennisIcon,
  SportsFootball as FootballIcon,
  SportsHockey as HockeyIcon,
  TrendingUp as TrendingIcon,
  Star as StarIcon
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import './SportsPage.scss'

const SportsPage = () => {
  const navigate = useNavigate()
  const [selectedSport, setSelectedSport] = useState(0)

  const sports = [
    { name: 'All Sports', icon: TrendingIcon },
    { name: 'Soccer', icon: SoccerIcon },
    { name: 'Basketball', icon: BasketballIcon },
    { name: 'Tennis', icon: TennisIcon },
    { name: 'Football', icon: FootballIcon },
    { name: 'Hockey', icon: HockeyIcon }
  ]

  const liveEvents = [
    {
      id: 1,
      sport: 'Soccer',
      league: 'Premier League',
      homeTeam: 'Manchester United',
      awayTeam: 'Liverpool',
      homeScore: 2,
      awayScore: 1,
      time: '75\'',
      odds: {
        home: 2.10,
        draw: 3.40,
        away: 3.20
      },
      isLive: true
    },
    {
      id: 2,
      sport: 'Basketball',
      league: 'NBA',
      homeTeam: 'Lakers',
      awayTeam: 'Warriors',
      homeScore: 98,
      awayScore: 95,
      time: 'Q4 2:30',
      odds: {
        home: 1.85,
        away: 1.95
      },
      isLive: true
    },
    {
      id: 3,
      sport: 'Tennis',
      league: 'Wimbledon',
      homeTeam: 'Djokovic',
      awayTeam: 'Nadal',
      homeScore: 2,
      awayScore: 1,
      time: 'Set 3',
      odds: {
        home: 1.65,
        away: 2.25
      },
      isLive: true
    }
  ]

  const upcomingEvents = [
    {
      id: 4,
      sport: 'Football',
      league: 'NFL',
      homeTeam: 'Patriots',
      awayTeam: 'Bills',
      date: 'Today 8:00 PM',
      odds: {
        home: 2.15,
        away: 1.75
      }
    },
    {
      id: 5,
      sport: 'Hockey',
      league: 'NHL',
      homeTeam: 'Maple Leafs',
      awayTeam: 'Canadiens',
      date: 'Tomorrow 7:00 PM',
      odds: {
        home: 1.90,
        away: 1.90
      }
    }
  ]

  const handleSportChange = (event, newValue) => {
    setSelectedSport(newValue)
  }

  return (
    <Box className="sports-page">
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box className="page-header">
          <Typography variant="h1" className="page-title">
            Sports Betting
          </Typography>
          <Typography variant="h5" className="page-subtitle">
            Bet on your favorite sports and teams
          </Typography>
        </Box>

        {/* Sports Navigation */}
        <Box className="sports-navigation">
          <Tabs
            value={selectedSport}
            onChange={handleSportChange}
            variant="scrollable"
            scrollButtons="auto"
            className="sports-tabs"
          >
            {sports.map((sport, index) => {
              const Icon = sport.icon
              return (
                <Tab 
                  key={index} 
                  label={sport.name} 
                  icon={<Icon />}
                  className="sport-tab"
                />
              )
            })}
          </Tabs>
        </Box>

        {/* Live Events */}
        <Box className="section-container">
          <Box className="section-header">
            <Typography variant="h2" className="section-title">
              Live Events
            </Typography>
            <Chip label="LIVE" color="error" className="live-badge" />
          </Box>

          <Grid container spacing={3} className="events-grid">
            {liveEvents.map((event) => (
              <Grid item xs={12} md={6} key={event.id}>
                <Card className="event-card live" onClick={() => navigate(`/sports/${event.id}`)}>
                  <CardContent className="event-content">
                    <Box className="event-header">
                      <Box className="event-info">
                        <Typography variant="h6" className="event-sport">
                          {event.sport}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="event-league">
                          {event.league}
                        </Typography>
                      </Box>
                      <Chip label="LIVE" color="error" size="small" />
                    </Box>

                    <Box className="teams-container">
                      <Box className="team home">
                        <Typography variant="h5" className="team-name">
                          {event.homeTeam}
                        </Typography>
                        <Typography variant="h4" className="team-score">
                          {event.homeScore}
                        </Typography>
                        <Button
                          variant="outlined"
                          className="bet-button"
                          onClick={(e) => {
                            e.stopPropagation()
                            navigate(`/sports/bet/${event.id}/home`)
                          }}
                        >
                          {event.odds.home}
                        </Button>
                      </Box>

                      <Box className="vs-section">
                        <Typography variant="h6" className="vs-text">VS</Typography>
                        <Typography variant="body2" className="time-text">
                          {event.time}
                        </Typography>
                      </Box>

                      <Box className="team away">
                        <Typography variant="h5" className="team-name">
                          {event.awayTeam}
                        </Typography>
                        <Typography variant="h4" className="team-score">
                          {event.awayScore}
                        </Typography>
                        <Button
                          variant="outlined"
                          className="bet-button"
                          onClick={(e) => {
                            e.stopPropagation()
                            navigate(`/sports/bet/${event.id}/away`)
                          }}
                        >
                          {event.odds.away}
                        </Button>
                      </Box>
                    </Box>

                    {event.odds.draw && (
                      <Box className="draw-odds">
                        <Typography variant="body2" color="text.secondary">
                          Draw
                        </Typography>
                        <Button
                          variant="outlined"
                          className="bet-button"
                          onClick={(e) => {
                            e.stopPropagation()
                            navigate(`/sports/bet/${event.id}/draw`)
                          }}
                        >
                          {event.odds.draw}
                        </Button>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Upcoming Events */}
        <Box className="section-container">
          <Box className="section-header">
            <Typography variant="h2" className="section-title">
              Upcoming Events
            </Typography>
          </Box>

          <Grid container spacing={3} className="events-grid">
            {upcomingEvents.map((event) => (
              <Grid item xs={12} md={6} key={event.id}>
                <Card className="event-card upcoming" onClick={() => navigate(`/sports/${event.id}`)}>
                  <CardContent className="event-content">
                    <Box className="event-header">
                      <Box className="event-info">
                        <Typography variant="h6" className="event-sport">
                          {event.sport}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="event-league">
                          {event.league}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" className="event-date">
                        {event.date}
                      </Typography>
                    </Box>

                    <Box className="teams-container">
                      <Box className="team home">
                        <Typography variant="h5" className="team-name">
                          {event.homeTeam}
                        </Typography>
                        <Button
                          variant="outlined"
                          className="bet-button"
                          onClick={(e) => {
                            e.stopPropagation()
                            navigate(`/sports/bet/${event.id}/home`)
                          }}
                        >
                          {event.odds.home}
                        </Button>
                      </Box>

                      <Box className="vs-section">
                        <Typography variant="h6" className="vs-text">VS</Typography>
                      </Box>

                      <Box className="team away">
                        <Typography variant="h5" className="team-name">
                          {event.awayTeam}
                        </Typography>
                        <Button
                          variant="outlined"
                          className="bet-button"
                          onClick={(e) => {
                            e.stopPropagation()
                            navigate(`/sports/bet/${event.id}/away`)
                          }}
                        >
                          {event.odds.away}
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Quick Stats */}
        <Box className="stats-section">
          <Container maxWidth="xl">
            <Grid container spacing={4} className="stats-grid">
              <Grid item xs={12} sm={6} md={3}>
                <Box className="stat-card">
                  <TrendingIcon className="stat-icon" />
                  <Typography variant="h3" className="stat-number">
                    150+
                  </Typography>
                  <Typography variant="h6" className="stat-label">
                    Live Events
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="stat-card">
                  <StarIcon className="stat-icon" />
                  <Typography variant="h3" className="stat-number">
                    25+
                  </Typography>
                  <Typography variant="h6" className="stat-label">
                    Sports
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="stat-card">
                  <TrendingIcon className="stat-icon" />
                  <Typography variant="h3" className="stat-number">
                    95%
                  </Typography>
                  <Typography variant="h6" className="stat-label">
                    Payout Rate
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="stat-card">
                  <StarIcon className="stat-icon" />
                  <Typography variant="h3" className="stat-number">
                    24/7
                  </Typography>
                  <Typography variant="h6" className="stat-label">
                    Support
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  )
}

export default SportsPage
