import type { Palette } from "../types/palette"
interface HomeProps {
  palette: Palette
}

export default function Home({ palette }: HomeProps) {
  const areasOfFocus = [
    'Neurodiversity & Neuroatypicality',
    'Higher Functioning Autism\nIncluding Females & Mild Presentations',
    'Depression and Mood Concerns',
    'Anxiety and Panic',
    'ADHD and Executive Functioning Issues'
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="text-center py-20 px-8">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" style={{ color: palette.primary }}>
          West Georgia Psychological Services
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto" style={{ color: palette.secondary }}>
          Specializing in Comprehensive Psychological Testing from Young Children through Adults
        </p>
      </div>

      {/* Areas of Focus Section */}
      <div
        className="py-20 px-8"
        style={{ backgroundColor: palette.accent, opacity: 0.95 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-white">
            Areas of Focus
          </h2>

          {/* Cards Container */}
          <div className="space-y-4">
            {areasOfFocus.map((area, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md text-center"
                style={{
                  backgroundColor: palette.cardBg,
                  borderLeft: `6px solid ${palette.primary}`
                }}
              >
                <h3 className="text-xl font-serif font-semibold whitespace-pre-line" style={{ color: palette.primary }}>
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div
        className="py-20 px-8"
        style={{ backgroundColor: palette.secondary }}
      >
        <div className="max-w-5xl mx-auto">
          <blockquote className="text-white">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-center md:text-left">
              "After working for decades with children and adults with neurodivergence, especially the autism spectrum and ADHD, it has become abundantly clear that diagnoses are not disorders or diseases, just a different way of being, processing information, and feeling.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-center md:text-left">
              Such labels are only vehicles for communication & intervention.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-center md:text-left">
              Our goal with psychological testing is to increase awareness, education, and self-acceptance, not only in our clients, but their loved-ones and the whole community. Once individuals realize they are understood, valued, and unique with many strengths, this opens the door for healing, self-love, and the ability to express personal needs and feelings assertively."
            </p>
            <footer className="text-xl font-serif text-center md:text-right mt-8">
              — Dr. Tina Caudill
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Now Offering Section */}
      <div
        className="py-20 px-8"
        style={{ backgroundColor: palette.accent, opacity: 0.95 }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="p-8 rounded-lg shadow-md text-center"
            style={{
              backgroundColor: palette.cardBg,
              borderTop: `6px solid ${palette.primary}`
            }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold" style={{ color: palette.primary }}>
              Now Offering: Materials and Training to Local Professionals on High Functioning Autism
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
