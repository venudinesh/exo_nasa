# 🌌 Exoplanet Explorer

A comprehensive, interactive web application for exploring exoplanets with 3D visualization, educational quests, mission planning, and real-time data analysis.

![Exoplanet Explorer](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Three.js](https://img.shields.io/badge/Three.js-3D-red)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Running
```bash
# Clone and setup
git clone <your-repo-url>
cd exo

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Building for Production
```bash
npm run build
npm run preview
```

## 🏗️ Architecture Overview

### Core Technologies
- **Frontend**: React 18 + TypeScript + Vite
- **3D Graphics**: Three.js + React Three Fiber
- **Styling**: TailwindCSS + Custom CSS
- **Data**: NASA Exoplanet Archive (JSON)

### Component Architecture

```
src/
├── components/           # Reusable UI components
│   ├── PlanetCard.tsx   # Planet display with NASA links
│   ├── PlanetDetail.tsx # Detailed planet information
│   ├── Planet3DViewer.tsx # 3D planet visualization
│   ├── PlanetComparison.tsx # Side-by-side comparison tool
│   ├── ExoplanetNewsFeed.tsx # News articles with expansion
│   ├── SpaceMissionPlanner.tsx # Mission design tool
│   ├── EducationalQuests.tsx # Gamified learning system
│   ├── WeatherSimulator.tsx # Atmospheric simulation
│   ├── DataVisualization.tsx # Advanced analytics
│   ├── FilterPills.tsx  # Filter interface
│   ├── SearchBar.tsx    # Planet search
│   ├── Timeline.tsx     # Discovery timeline
│   └── Charts.tsx       # Data charts
├── lib/
│   ├── filters.ts       # Planet filtering & scoring logic
│   └── narrator.ts      # AI narrative generation
├── public/
│   ├── data/           # Planet datasets
│   ├── images/         # Planet imagery
│   └── audio/          # Ambient sounds
└── App.tsx             # Main application component
```

### Data Flow
1. **Planet Data**: Loaded from `public/data/planets.min.json`
2. **Filtering**: Applied via `lib/filters.ts` algorithms
3. **State Management**: React hooks for component state
4. **3D Rendering**: Three.js scenes in React components

## ✨ Features

### 🌍 Planet Exploration
- **Interactive Cards**: Browse 5000+ confirmed exoplanets
- **Smart Filtering**: Earth-like, weird, closest, habitable zone
- **NASA Integration**: Direct links to NASA's 3D planet views
- **Detailed Views**: Comprehensive planetary data display

### 🔬 Scientific Tools
- **3D Visualization**: Interactive planet models with realistic rendering
- **Comparison Tool**: Side-by-side analysis of up to 5 planets
- **Data Dashboard**: Correlation analysis and statistical insights
- **Weather Simulator**: Atmospheric dynamics modeling

### 🎓 Educational Features
- **Quest System**: Gamified learning with achievements and XP
- **News Feed**: Latest exoplanet discoveries with expandable articles
- **Mission Planner**: Design realistic interstellar missions
- **Timeline View**: Explore discovery history

### 🎮 Interactive Elements
- **Random Discovery**: Explore unexpected planets
- **Search & Filter**: Find specific planets or characteristics
- **Achievement System**: Track progress and unlock rewards
- **Progress Tracking**: Monitor exploration milestones

## 📱 Screenshots

### Main Interface
*Planet cards with filtering and search capabilities*

### 3D Planet Viewer
*Interactive Three.js planet visualization with realistic materials*

### Mission Planner
*Design space missions with realistic physics calculations*

### Educational Quests
*Gamified learning system with achievements and progress tracking*

## 🔧 Configuration

### Environment Variables
```bash
# Optional API configurations
VITE_NEWS_API_URL=your_news_api_endpoint
VITE_PLANET_DATA_URL=your_planet_data_source
```

### Customization
- **Planet Data**: Replace `public/data/planets.min.json` with your dataset
- **Styling**: Modify TailwindCSS configuration in `tailwind.config.js`
- **3D Models**: Add planet textures in `public/images/`

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Test specific components
npm run test -- --grep "filters"
```

## 📦 Building & Deployment

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Production Optimization
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: 3D components loaded on demand
- **Asset Optimization**: Images and models compressed
- **Bundle Analysis**: Use `npm run build:analyze`

## 🔒 Error Handling

### WebGL Support
- Automatic fallback for devices without WebGL
- Graceful degradation for 3D features
- Error boundaries around expensive components

### Data Loading
- Loading states for all async operations
- Retry mechanisms for failed requests
- Offline support for cached data

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Mobile Support
- Responsive design for all screen sizes
- Touch-optimized interactions
- Reduced animations for performance

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Code Style
- Use TypeScript for all new components
- Follow ESLint + Prettier configurations
- Write tests for utility functions
- Document complex algorithms

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **NASA Exoplanet Archive** for comprehensive planetary data
- **Three.js Community** for 3D visualization capabilities
- **React Team** for the amazing framework
- **Tailwind CSS** for utility-first styling

## 🐛 Known Issues

- WebGL performance varies on older devices
- Some planet textures may load slowly on slow connections
- 3D viewer requires modern browser with WebGL 2.0

## 🚧 Roadmap

- [ ] Real-time data sync with NASA APIs
- [ ] VR/AR planet exploration modes
- [ ] Multiplayer exploration features
- [ ] Advanced atmospheric simulation
- [ ] Machine learning planet classification

---

**Built with ❤️ for space exploration enthusiasts**