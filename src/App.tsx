import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Staff from './pages/Staff'
import Tour from './pages/Tour'
import Directions from './pages/Directions'
import Intakes from './pages/Intakes'
import Links from './pages/Links'

const colorPalettes = {
  'calm-blue': {
    name: 'Calm Blue',
    primary: '#2C5F7C',
    secondary: '#4A90A4',
    accent: '#7FB3D5',
    background: '#F5F7F9',
    text: '#2D3748',
    cardBg: '#FFFFFF',
    isDark: false
  },
  'warm-earth': {
    name: 'Warm Earth',
    primary: '#6B5B4F',
    secondary: '#8C7B6B',
    accent: '#A89985',
    background: '#F9F7F4',
    text: '#3A3530',
    cardBg: '#FFFFFF',
    isDark: false
  },
  'professional-slate': {
    name: 'Professional Slate',
    primary: '#4A5568',
    secondary: '#718096',
    accent: '#A0AEC0',
    background: '#F7FAFC',
    text: '#2D3748',
    cardBg: '#FFFFFF',
    isDark: false
  },
  'dark-navy': {
    name: 'Dark Navy',
    primary: '#4A7BA7',
    secondary: '#6B9FCC',
    accent: '#2E5984',
    background: '#0F1419',
    text: '#E5E7EB',
    cardBg: '#1A2332',
    isDark: true
  },
  'dark-purple': {
    name: 'Dark Purple',
    primary: '#B4A5C7',
    secondary: '#9B8FB0',
    accent: '#6B5B7B',
    background: '#2A2438',
    text: '#E8E6ED',
    cardBg: '#3D3650',
    isDark: true
  },
  'dark-brown': {
    name: 'Dark Brown',
    primary: '#C9B5A0',
    secondary: '#A99482',
    accent: '#8B7355',
    background: '#2B2520',
    text: '#E8E4DF',
    cardBg: '#3F3832',
    isDark: true
  },
  'dark-slate': {
    name: 'Dark Slate',
    primary: '#A3B4C0',
    secondary: '#8A9BA7',
    accent: '#6B7F8C',
    background: '#1A1F24',
    text: '#E5E9ED',
    cardBg: '#2D3439',
    isDark: true
  }
}

function App() {
  // Use Professional Slate as the chosen theme
  const palette = colorPalettes['professional-slate']

  return (
    <Router>
      <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh' }}>
        <Navbar palette={palette} />

        <Routes>
          <Route path="/" element={<Home palette={palette} />} />
          <Route path="/staff" element={<Staff palette={palette} />} />
          <Route path="/tour" element={<Tour palette={palette} />} />
          <Route path="/directions" element={<Directions palette={palette} />} />
          <Route path="/intakes" element={<Intakes palette={palette} />} />
          <Route path="/links" element={<Links palette={palette} />} />
        </Routes>

        <Footer palette={palette} />
      </div>
    </Router>
  )
}

export default App
