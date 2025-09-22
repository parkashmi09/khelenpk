# Casino UI - New Frontend

A modern React-based casino frontend application built with Material-UI and Vite.

## Features

- 🎰 **Modern Casino UI** - Beautiful, responsive design with dark theme
- 🎮 **Game Categories** - Crash, Dice, Mines, Plinko, and more
- 🏆 **Live Casino** - Real-time dealer games
- ⚽ **Sports Betting** - Live sports events and betting
- 👤 **User Profile** - Account management and settings
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Material-UI** - Professional component library
- ⚡ **Vite** - Fast development and build tool

## Tech Stack

- **React 18** - Modern React with hooks
- **Material-UI 5** - Professional UI components
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **SCSS** - Advanced CSS with variables and mixins
- **TypeScript** - Type-safe JavaScript (JSX files for now)

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm 8+

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout/         # Layout components (Header, Sidebar)
├── pages/              # Page components
│   ├── HomePage        # Landing page
│   ├── GamesPage       # All games listing
│   ├── CasinoPage      # Casino games
│   ├── SportsPage      # Sports betting
│   └── ProfilePage     # User profile
├── styles/             # Global styles and SCSS files
└── main.jsx           # Application entry point
```

## Features Overview

### 🏠 Home Page
- Hero section with call-to-action
- Featured games showcase
- Latest promotions
- Statistics and achievements

### 🎮 Games
- Comprehensive game catalog
- Search and filtering
- Game categories and tags
- Player statistics and ratings

### 🎰 Casino
- Live dealer games
- Table games (Blackjack, Roulette, Baccarat)
- Slot games with provider information
- Betting limits and game details

### ⚽ Sports
- Live sports events
- Multiple sports categories
- Real-time odds and betting
- Upcoming events calendar

### 👤 Profile
- User information management
- Transaction history
- Account settings
- Balance and statistics

## Design System

### Colors
- **Primary**: #00D4AA (Teal)
- **Secondary**: #FF6B35 (Orange)
- **Background**: #0A0A0A (Dark)
- **Surface**: #1A1A1A (Paper)

### Typography
- **Font**: Excon (Custom font family)
- **Weights**: 300-900
- **Responsive**: Scales appropriately on all devices

### Components
- **Cards**: Elevated with shadows and hover effects
- **Buttons**: Gradient backgrounds with hover animations
- **Navigation**: Fixed header with sidebar layout
- **Forms**: Material-UI form components

## Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Create corresponding SCSS file
4. Update navigation if needed

### Adding New Components
1. Create component in `src/components/`
2. Add corresponding SCSS file
3. Export from component index if needed

### Styling
- Use SCSS variables from `src/styles/index.scss`
- Follow BEM methodology for class naming
- Use Material-UI theme customization when possible

## Build & Deploy

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Deployment
The built files are in the `dist/` folder and can be deployed to any static hosting service.

## Contributing

1. Follow the existing code style
2. Use meaningful component and variable names
3. Add proper TypeScript types when converting to TS
4. Test on multiple devices and browsers
5. Update documentation as needed

## License

This project is for demonstration purposes only.

## Support

For questions or issues, please refer to the project documentation or create an issue in the repository.
