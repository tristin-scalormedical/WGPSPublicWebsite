import type { Palette } from "../types/palette"
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavbarProps {
  palette: Palette
}

export default function Navbar({ palette }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/staff', label: 'Staff' },
    { to: '/tour', label: 'Take a Tour' },
    { to: '/directions', label: 'Directions' },
    { to: '/intakes', label: 'New Intakes' },
    { to: '/links', label: 'Helpful Links' }
  ]

  return (
    <nav className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: palette.primary }}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-serif text-xl font-bold">
            Dr. Tina Caudill
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white hover:opacity-80 transition-opacity py-2 border-b border-white border-opacity-20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
