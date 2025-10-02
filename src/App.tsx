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

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-serif font-bold" style={{ color: palette.primary }}>
                Dr. Tina Caudill
              </h1>
              <p className="text-sm" style={{ color: palette.secondary }}>Clinical Psychologist</p>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium hover:underline transition-colors"
                  style={{ color: palette.text }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: palette.background }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6" style={{ color: palette.primary }}>
            Compassionate Care for Every Journey
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: palette.text }}>
            Specializing in childhood trauma and high functioning autism in girls,
            providing professional, evidence-based therapeutic support.
          </p>
          <button
            className="px-8 py-3 rounded-md font-medium text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: palette.primary }}
          >
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12" style={{ color: palette.primary }}>
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-serif font-semibold mb-4" style={{ color: palette.secondary }}>
                Childhood Trauma Therapy
              </h3>
              <p style={{ color: palette.text }}>
                Specialized treatment for children who have experienced trauma,
                using evidence-based approaches to promote healing and resilience.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-serif font-semibold mb-4" style={{ color: palette.secondary }}>
                High Functioning Autism in Girls
              </h3>
              <p style={{ color: palette.text }}>
                Expert assessment and support for girls on the autism spectrum,
                addressing unique challenges and building on individual strengths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: palette.background }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-8" style={{ color: palette.primary }}>
            About Dr. Tina Caudill
          </h2>
          <div className="prose prose-lg mx-auto" style={{ color: palette.text }}>
            <p>
              Dr. Tina Caudill is a licensed clinical psychologist with extensive experience
              in treating childhood trauma and working with girls on the autism spectrum.
              Her approach combines evidence-based therapeutic techniques with a deep
              understanding of individual needs.
            </p>
            <p>
              With a commitment to creating a safe, supportive environment, Dr. Caudill
              helps clients develop coping strategies, build resilience, and achieve
              their therapeutic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: palette.primary }}>
            Get in Touch
          </h2>
          <p className="text-lg mb-8" style={{ color: palette.text }}>
            Ready to begin your journey? Contact us to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-6 py-3 rounded-md border-2 hover:opacity-90 transition-opacity"
              style={{
                borderColor: palette.primary,
                color: palette.primary,
                backgroundColor: 'transparent'
              }}
            >
              Call (555) 123-4567
            </button>
            <button
              className="px-6 py-3 rounded-md text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: palette.accent }}
            >
              Send Email
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p style={{ color: palette.secondary }}>
            © 2024 Dr. Tina Caudill, Clinical Psychologist. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
