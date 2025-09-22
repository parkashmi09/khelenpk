import React from 'react'
import { Box, Typography, Paper, Grid, Container } from '@mui/material'

const FontDemo = () => {
  const fontWeights = [
    { weight: 100, name: 'Thin', class: 'font-excon-thin' },
    { weight: 200, name: 'Extra Light', class: 'font-excon-extralight' },
    { weight: 300, name: 'Light', class: 'font-excon-light' },
    { weight: 400, name: 'Regular', class: 'font-excon-regular' },
    { weight: 500, name: 'Medium', class: 'font-excon-medium' },
    { weight: 600, name: 'Semi Bold', class: 'font-excon-semibold' },
    { weight: 700, name: 'Bold', class: 'font-excon-bold' },
    { weight: 800, name: 'Extra Bold', class: 'font-excon-extrabold' },
    { weight: 900, name: 'Black', class: 'font-excon-black' }
  ]

  const typographyScale = [
    { class: 'text-display-1', name: 'Display 1', description: 'Hero titles and main headlines' },
    { class: 'text-display-2', name: 'Display 2', description: 'Section headers and large titles' },
    { class: 'text-h1', name: 'Heading 1', description: 'Page titles and main headings' },
    { class: 'text-h2', name: 'Heading 2', description: 'Section titles and sub-headings' },
    { class: 'text-h3', name: 'Heading 3', description: 'Subsection titles' },
    { class: 'text-h4', name: 'Heading 4', description: 'Card titles and small headings' },
    { class: 'text-h5', name: 'Heading 5', description: 'Widget titles' },
    { class: 'text-h6', name: 'Heading 6', description: 'Form labels and small titles' },
    { class: 'text-body-1', name: 'Body 1', description: 'Main content text' },
    { class: 'text-body-2', name: 'Body 2', description: 'Secondary content text' },
    { class: 'text-caption', name: 'Caption', description: 'Small text and metadata' },
    { class: 'text-button', name: 'Button', description: 'Button text and call-to-action' },
    { class: 'text-overline', name: 'Overline', description: 'Small uppercase text' }
  ]

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h1" className="text-display-1" gutterBottom>
        Excon Font Family Demo
      </Typography>
      
      <Typography variant="h2" className="text-h2" color="text.secondary" gutterBottom>
        Excon Typography System (Same as Existing Casino Site)
      </Typography>
      
      <Typography variant="body1" className="text-body-1" sx={{ mb: 4, p: 2, bgcolor: 'success.dark', borderRadius: 1 }}>
        ✅ <strong>Fonts are now working!</strong> Using the exact same Excon font setup as the existing casino site.
      </Typography>

      {/* Font Weights Section */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" className="text-h3" gutterBottom>
          Font Weights
        </Typography>
        <Grid container spacing={3}>
          {fontWeights.map((font) => (
            <Grid item xs={12} sm={6} md={4} key={font.weight}>
              <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {font.name} ({font.weight})
                </Typography>
                <Typography className={font.class} variant="h4" gutterBottom>
                  The quick brown fox
                </Typography>
                <Typography className={font.class} variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Typography Scale Section */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" className="text-h3" gutterBottom>
          Typography Scale
        </Typography>
        <Grid container spacing={3}>
          {typographyScale.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.class}>
              <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {item.name}
                </Typography>
                <Typography className={item.class} gutterBottom>
                  Sample Text
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Sample Content Section */}
      <Paper sx={{ p: 4 }}>
        <Typography variant="h3" className="text-h3" gutterBottom>
          Sample Casino Content
        </Typography>
        
        <Typography variant="h1" className="text-display-1" gutterBottom>
          Welcome to Casino Royale
        </Typography>
        
        <Typography variant="h2" className="text-h2" gutterBottom>
          Experience the Ultimate Gaming Adventure
        </Typography>
        
        <Typography variant="body1" className="text-body-1" paragraph>
          Step into a world of excitement and entertainment where every spin, every bet, and every game brings you closer to fortune. Our state-of-the-art casino platform offers the most immersive gaming experience with stunning graphics, smooth animations, and fair gameplay.
        </Typography>
        
        <Typography variant="h3" className="text-h3" gutterBottom>
          Featured Games
        </Typography>
        
        <Typography variant="body2" className="text-body-2" paragraph>
          From classic table games like Blackjack and Roulette to modern video slots and live dealer experiences, we have something for every type of player. Our game library is constantly expanding with new titles from the world's leading software providers.
        </Typography>
        
        <Typography variant="h4" className="text-h4" gutterBottom>
          Special Promotions
        </Typography>
        
        <Typography variant="body1" className="text-body-1" paragraph>
          Take advantage of our generous welcome bonus, weekly cashback offers, and VIP rewards program. We believe in giving back to our loyal players and ensuring everyone has the best possible gaming experience.
        </Typography>
        
        <Typography variant="button" className="text-button" sx={{ display: 'block', mt: 2 }}>
          JOIN NOW AND START WINNING!
        </Typography>
      </Paper>
    </Container>
  )
}

export default FontDemo
