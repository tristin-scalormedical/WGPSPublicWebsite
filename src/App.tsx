import React, { useState } from 'react'
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
  const [selectedPalette, setSelectedPalette] = useState<keyof typeof colorPalettes | 'custom'>('calm-blue')
  const [customColors, setCustomColors] = useState({
    primary: '#4A7BA7',
    secondary: '#6B9FCC',
    accent: '#2E5984',
    background: '#0F1419',
    text: '#E5E7EB',
    cardBg: '#1A2332'
  })
  const [showCustomizer, setShowCustomizer] = useState(false)

  const palette = selectedPalette === 'custom'
    ? { ...customColors, name: 'Custom', isDark: false }
    : colorPalettes[selectedPalette]

  // Log custom colors whenever they change
  React.useEffect(() => {
    if (selectedPalette === 'custom') {
      console.log('Custom Color Palette:')
      console.log(JSON.stringify({
        name: 'Custom',
        primary: customColors.primary,
        secondary: customColors.secondary,
        accent: customColors.accent,
        background: customColors.background,
        text: customColors.text,
        cardBg: customColors.cardBg,
        isDark: false
      }, null, 2))
    }
  }, [customColors, selectedPalette])

  return (
    <Router>
      <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh' }}>
        <Navbar palette={palette} />

        {/* Color Palette Selector */}
        <div className="p-6 border-b shadow-sm" style={{ backgroundColor: palette.cardBg, borderColor: palette.accent }}>
          <h2 className="text-lg font-serif font-semibold mb-4" style={{ color: palette.text }}>Choose Color Palette:</h2>
          <div className="flex flex-wrap gap-3 mb-4">
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
            <button
              onClick={() => setSelectedPalette('custom')}
              className={`px-4 py-2 rounded-md border-2 transition-all ${
                selectedPalette === 'custom'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              Custom
            </button>
          </div>

          {/* Custom Color Picker */}
          {selectedPalette === 'custom' && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg border-2 border-gray-300">
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: palette.text }}>Primary</label>
                <input
                  type="color"
                  value={customColors.primary}
                  onChange={(e) => setCustomColors({ ...customColors, primary: e.target.value })}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: palette.text }}>Secondary</label>
                <input
                  type="color"
                  value={customColors.secondary}
                  onChange={(e) => setCustomColors({ ...customColors, secondary: e.target.value })}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: palette.text }}>Accent</label>
                <input
                  type="color"
                  value={customColors.accent}
                  onChange={(e) => setCustomColors({ ...customColors, accent: e.target.value })}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: palette.text }}>Background</label>
                <input
                  type="color"
                  value={customColors.background}
                  onChange={(e) => setCustomColors({ ...customColors, background: e.target.value })}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: palette.text }}>Text</label>
                <input
                  type="color"
                  value={customColors.text}
                  onChange={(e) => setCustomColors({ ...customColors, text: e.target.value })}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: palette.text }}>Card Background</label>
                <input
                  type="color"
                  value={customColors.cardBg}
                  onChange={(e) => setCustomColors({ ...customColors, cardBg: e.target.value })}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>
            </div>
          )}
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
