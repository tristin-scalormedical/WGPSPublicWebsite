import { Link } from 'react-router-dom'

interface NavbarProps {
  palette: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
}

export default function Navbar({ palette }: NavbarProps) {
  return (
    <nav className="shadow-md" style={{ backgroundColor: palette.primary }}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-serif text-xl font-bold">
            Dr. Tina Caudill
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-white hover:opacity-80 transition-opacity">
              Home
            </Link>
            <Link to="/staff" className="text-white hover:opacity-80 transition-opacity">
              Staff
            </Link>
            <Link to="/tour" className="text-white hover:opacity-80 transition-opacity">
              Take a Tour
            </Link>
            <Link to="/directions" className="text-white hover:opacity-80 transition-opacity">
              Directions
            </Link>
            <Link to="/intakes" className="text-white hover:opacity-80 transition-opacity">
              New Intakes
            </Link>
            <Link to="/links" className="text-white hover:opacity-80 transition-opacity">
              Helpful Links
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
