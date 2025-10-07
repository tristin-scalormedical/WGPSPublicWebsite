import type { Palette } from "../types/palette"
interface FooterProps {
  palette: Palette
}

export default function Footer({ palette }: FooterProps) {
  return (
    <footer
      className="py-8 px-4"
      style={{ backgroundColor: palette.primary, color: 'white' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg">
          6264 Hospital Way<br />
          Douglasville, Georgia 30134<br />
          Office: (678) 977-8300
        </p>
      </div>
    </footer>
  )
}
