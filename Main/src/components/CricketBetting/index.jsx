import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid 
} from '@mui/material';
import WhatsApp from '@mui/icons-material/WhatsApp';
import { makeStyles } from '@mui/styles'
import RightBannerImage from "../../assets/images/right-banner.svg"

const useStyles = makeStyles((theme) => ({
  cricketBettingSection: {
    background: 'linear-gradient(135deg, #0a1428 0%, #1a2742 50%, #0f1b35 100%)',
    minHeight: '600px',
    padding: '0px 0',
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(ellipse at center, rgba(0,123,255,0.1) 0%, transparent 70%)',
      pointerEvents: 'none',
    }
  },
  
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 500px',
    gap: '60px',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
      gap: '40px',
    }
  },

  leftContent: {
    color: 'white',
    position: 'relative',
    zIndex: 2,
  },

  whatsappCta: {
    position: 'absolute',
    top: '-30px',
    right: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(236, 254, 20, 0.2)',
    padding: '8px 16px',
    borderRadius: '50px',
    border: '2px solid #ecfe14',
    backdropFilter: 'blur(10px)',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: 0,
      marginBottom: '20px',
      width: 'fit-content',
    }
  },

  whatsappIcon: {
    color: '#ecfe14',
    fontSize: '24px'
  },

  whatsappText: {
    fontSize: '12px',
    color: '#ecfe14',
    fontWeight: 500,
    '& .click-here': {
      textDecoration: 'underline',
      fontWeight: 'bold',
      cursor: 'pointer',
    }
  },

  mainHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: 1.2,
    marginBottom: '30px',
    color: '#ffd700',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    '& .brand-name': {
      color: '#00ff88',
      textShadow: '0 0 10px rgba(0,255,136,0.5)',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
    }
  },

  description: {
    fontSize: '16px',
    lineHeight: 1.6,
    marginBottom: '25px',
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'justify',
  },

  whatsappBtn: {
    background: '#ecfe14',
    borderRadius: '50px',
    padding: '15px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#0a1428',
    textTransform: 'none',
    boxShadow: '0 4px 15px rgba(236, 254, 20, 0.35)',
    marginTop: '20px !important',
    display: 'inline-flex',
    marginLeft: 0,
    marginRight: 0,
    '&:hover': {
      background: '#d4e40f',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(236, 254, 20, 0.45)',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'inline-flex',
    }
  },

  rightContent: {
    position: 'relative',
  },

  KhelenCard: {
    background: 'linear-gradient(135deg, #ecfe14 0%, #d4e40f 50%, #aebc0b 100%)',
    borderRadius: '20px',
    // padding: '40px 30px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(236,254,20,0.25)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      right: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.down('sm')]: {
      // padding: '30px 20px',
    }
  },

  logoSection: {
    textAlign: 'center',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 2,
  },

  KhelenLogo: {
    fontSize: '36px',
    fontWeight: 900,
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    letterSpacing: '2px',
  },

  experienceText: {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: '5px',
    position: 'relative',
    zIndex: 2,
  },

  ofEveryGame: {
    fontSize: '24px',
    fontWeight: 900,
    textAlign: 'center',
    color: 'white',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 2,
  },

  sportsTags: {
    textAlign: 'center',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 2,
  },

  sportsTag: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white',
    '& .highlight-yellow': {
      color: '#ffd700',
      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
    }
  },

  destinationText: {
    fontSize: '48px',
    fontWeight: 900,
    textAlign: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    marginBottom: '30px',
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    }
  },

  sportsFigures: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '120px',
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      height: '100px',
    }
  },

  figurePlaceholder: {
    width: '60px',
    height: '80px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.3)',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '30px',
      height: '30px',
      background: 'rgba(255,255,255,0.3)',
      borderRadius: '50%',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '40px',
      height: '30px',
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '4px',
    },
    '&.figure-1': {
      height: '90px'
    },
    '&.figure-2': {
      height: '95px'
    },
    '&.figure-3': {
      height: '100px'
    },
    '&.figure-4': {
      height: '85px'
    },
    '&.figure-5': {
      height: '80px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '70px',
    }
  },
}));

const CricketBettingSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.cricketBettingSection}>
      <Container maxWidth="xl">
        <Box className={classes.contentWrapper}>
          {/* Left Content */}
          <Box className={classes.leftContent}>
          

            <div className={classes.mainHeading}>
              Online Cricket Betting ID Provider in Pakistan : <span className="brand-name">Khelen</span>
            </div>

            <Typography variant="body1" className={classes.description}>
              Khelenpk is one of the most trusted online cricket betting platforms, providing safe, reliable, and exciting 
              betting opportunities. We offer a seamless and user-friendly experience where you can place bets on cricket, 
              football, tennis, and casino games with great odds. Whether you're a beginner or an experienced user, our 
              platform ensures fair play, secure transactions, and a thrilling betting experience. With a strong reputation in 
              cricket betting online, we make sure your gaming journey becomes smooth and rewarding.
            </Typography>

            <Typography variant="body1" className={classes.description}>
              Creating your online cricket betting ID is quick and easy. However, with a minimum deposit of just Rs.100, you 
              can start placing bets and enjoy real money opportunities. Register with Khelenpk via WhatsApp and claim an 
              exclusive 5% welcome bonus. Experience the excitement of online cricket betting with Khelen Pakistan, where 
              reliability and excitement go hand in hand. Join now and take your betting experience to the next level!
            </Typography>

            <Button 
              variant="contained" 
              className={classes.whatsappBtn}
              startIcon={<WhatsApp />}
            >
              Get ID on Whatsapp
            </Button>
          </Box>

   
          <Box className={classes.rightContent}>
            <Box className={classes.KhelenCard}>
              <img 
                src={RightBannerImage} 
                alt="Khelen Banner" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '20px'
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CricketBettingSection;