import { useState } from 'react'
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
    text: '#2D3748'
  },
  'warm-earth': {
    name: 'Warm Earth',
    primary: '#6B5B4F',
    secondary: '#8C7B6B',
    accent: '#A89985',
    background: '#F9F7F4',
    text: '#3A3530'
  },
  'soft-sage': {
    name: 'Soft Sage',
    primary: '#5A7A6B',
    secondary: '#7B9A89',
    accent: '#A4C3B2',
    background: '#F6F8F7',
    text: '#2F4538'
  },
  'professional-slate': {
    name: 'Professional Slate',
    primary: '#4A5568',
    secondary: '#718096',
    accent: '#A0AEC0',
    background: '#F7FAFC',
    text: '#2D3748'
  }
}

function App() {
  const [selectedPalette, setSelectedPalette] = useState<keyof typeof colorPalettes>('calm-blue')
  const palette = colorPalettes[selectedPalette]

  return (
    <Router>
      <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh' }}>
        <Navbar palette={palette} />

        {/* Color Palette Selector */}
        <div className="p-6 border-b border-gray-200 bg-white shadow-sm">
          <h2 className="text-lg font-serif font-semibold mb-4">Choose Color Palette:</h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(colorPalettes).map(([key, p]) => (
              <button
                key={key}
                onClick={() => setSelectedPalette(key as keyof typeof colorPalettes)}
                className={`px-4 py-2 rounded-md border-2 transition-all ${
                  selectedPalette === key
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

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
