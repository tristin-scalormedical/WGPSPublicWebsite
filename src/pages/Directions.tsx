interface DirectionsProps {
  palette: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
}

export default function Directions({ palette }: DirectionsProps) {
  return (
    <div className="max-w-6xl mx-auto py-16 px-8">
      <h1 className="text-4xl font-serif font-bold mb-4 text-center" style={{ color: palette.primary }}>
        West Georgia Psychological Services
      </h1>
      <h2 className="text-2xl font-serif text-center mb-12" style={{ color: palette.secondary }}>
        Directions
      </h2>

      {/* Address and Contact */}
      <div
        className="p-8 rounded-lg shadow-lg mb-8 text-center"
        style={{ backgroundColor: 'white', borderTop: `4px solid ${palette.primary}` }}
      >
        <p className="text-2xl mb-2" style={{ color: palette.text }}>
          6264 Hospital Way<br />
          Douglasville, Georgia 30134
        </p>
        <p className="text-xl mt-4" style={{ color: palette.secondary }}>
          Office: (678) 977-8300
        </p>
      </div>

      {/* Photos */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div
          className="rounded-lg shadow-lg overflow-hidden"
          style={{ backgroundColor: 'white' }}
        >
          <img
            src="/images/directions/sign-up-close.jpg"
            alt="WGPS Sign"
            className="w-full h-80 object-cover"
          />
          <div className="p-4 text-center" style={{ color: palette.primary }}>
            <p className="font-semibold">Office Sign</p>
          </div>
        </div>

        <div
          className="rounded-lg shadow-lg overflow-hidden"
          style={{ backgroundColor: 'white' }}
        >
          <img
            src="/images/directions/front-of-office.jpg"
            alt="Front of Office"
            className="w-full h-80 object-cover"
          />
          <div className="p-4 text-center" style={{ color: palette.primary }}>
            <p className="font-semibold">Front of Office</p>
          </div>
        </div>
      </div>

      {/* Parking & Accessibility */}
      <div
        className="p-8 rounded-lg shadow-lg mb-8"
        style={{ backgroundColor: 'white', borderTop: `4px solid ${palette.primary}` }}
      >
        <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: palette.primary }}>
          Parking & Accessibility
        </h2>
        <p style={{ color: palette.text }}>
          Free parking is available in the building's parking lot. Our office is located on the
          first floor and is wheelchair accessible. Please call ahead if you have any special
          accessibility needs.
        </p>
      </div>

      {/* Google Maps */}
      <div
        className="rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundColor: 'white', borderTop: `4px solid ${palette.primary}` }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.3090154485861!2d-84.736792925369!3d33.75138233051989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5265e0392d815%3A0xe356130057011355!2sWest%20Georgia%20Psychological%20Services!5e1!3m2!1sen!2sus!4v1759513070387!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="West Georgia Psychological Services Location"
        ></iframe>
      </div>
    </div>
  )
}
