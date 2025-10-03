import { useState } from 'react'

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
    <div style={{ backgroundColor: palette.background, color: palette.text, minHeight: '100vh' }}>
      {/* Navbar */}
      <nav className="shadow-md" style={{ backgroundColor: palette.primary }}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-serif text-xl font-bold">Dr. Tina Caudill</div>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:opacity-80 transition-opacity">Home</a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">About</a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">Services</a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">Contact</a>
            </div>
          </div>
        </div>
      </nav>

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

      {/* Hero Section */}
      <div className="max-w-3xl mx-auto py-16 px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4" style={{ color: palette.primary }}>
            Dr. Tina Caudill
          </h1>
          <p className="text-lg" style={{ color: palette.text }}>Clinical Psychologist</p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: palette.primary }}>
            Compassionate Care
          </h2>
          <p className="text-lg mb-6" style={{ color: palette.text }}>
            Specializing in childhood trauma and high functioning autism in girls
          </p>
          <button
            className="px-6 py-3 rounded-md font-medium text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: palette.primary }}
          >
            Schedule Consultation
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: 'white', borderTop: `4px solid ${palette.accent}` }}
          >
            <h3 className="font-serif font-semibold text-lg mb-3" style={{ color: palette.primary }}>
              Expert Care
            </h3>
            <p style={{ color: palette.text }}>
              Over 15 years of experience in clinical psychology
            </p>
          </div>

          <div
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: 'white', borderTop: `4px solid ${palette.secondary}` }}
          >
            <h3 className="font-serif font-semibold text-lg mb-3" style={{ color: palette.primary }}>
              Specialized Focus
            </h3>
            <p style={{ color: palette.text }}>
              Dedicated to childhood trauma and autism support
            </p>
          </div>

          <div
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: 'white', borderTop: `4px solid ${palette.accent}` }}
          >
            <h3 className="font-serif font-semibold text-lg mb-3" style={{ color: palette.primary }}>
              Safe Environment
            </h3>
            <p style={{ color: palette.text }}>
              Creating a welcoming space for healing and growth
            </p>
          </div>
        </div>

        {/* Info Container */}
        <div
          className="p-8 rounded-lg shadow-lg mb-8"
          style={{ backgroundColor: palette.secondary, color: 'white' }}
        >
          <h2 className="text-2xl font-serif font-semibold mb-4">Why Choose Our Practice?</h2>
          <ul className="space-y-2">
            <li>✓ Evidence-based therapeutic approaches</li>
            <li>✓ Individualized treatment plans</li>
            <li>✓ Trauma-informed care</li>
            <li>✓ Family-centered support</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-lg" style={{ color: palette.text }}>
            Contact: (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
