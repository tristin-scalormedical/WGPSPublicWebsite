interface FooterProps {
  palette: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
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
