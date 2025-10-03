interface IntakesProps {
  palette: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
}

export default function Intakes({ palette }: IntakesProps) {
  return (
    <div className="max-w-6xl mx-auto py-16 px-8">
      <h1 className="text-4xl font-serif font-bold mb-4 text-center" style={{ color: palette.primary }}>
        New Intake Inquiries and Information
      </h1>
      <p className="text-center mb-8 text-xl font-semibold" style={{ color: palette.secondary }}>
        ** IMPORTANT INFORMATION: PLEASE READ IN DETAIL **
      </p>

      {/* Important Notice */}
      <div
        className="p-6 rounded-lg shadow-md mb-6"
        style={{ backgroundColor: palette.accent, opacity: 0.95 }}
      >
        <p className="text-white leading-relaxed">
          We are a small practice with only one provider, Dr. Tina Caudill, as well as one office manager. Our clients are very important, but we have been getting an overwhelming number of calls and referrals, so we have a very difficult time returning initial inquiry calls. Additionally, very few offices accept insurance for psych testing; therefore, we are typically booked for many months. Please read further!
        </p>
      </div>

      {/* Services We Provide */}
      <div
        className="p-6 rounded-lg shadow-md mb-6"
        style={{ backgroundColor: 'white', borderLeft: `6px solid ${palette.primary}` }}
      >
        <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: palette.primary }}>
          Services We Provide
        </h2>
        <p className="mb-3" style={{ color: palette.text }}>
          Dr. Caudill provides comprehensive psychological testing for children ages 6 through adulthood. We no longer see children 5 and under.
        </p>
        <p className="font-semibold mb-2" style={{ color: palette.text }}>We specifically focus on the assessment of:</p>
        <ul className="space-y-1 ml-6" style={{ color: palette.text }}>
          <li>• Higher-functioning autism and neurodivergence in children and adults</li>
          <li>• Anxiety, depression, panic, and obsessive-compulsive disorder</li>
          <li>• ADHD and impulse control issues</li>
        </ul>
      </div>

      {/* Insurance & Payment */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: 'white', borderLeft: `6px solid ${palette.primary}` }}
        >
          <h2 className="text-xl font-serif font-semibold mb-3" style={{ color: palette.primary }}>
            Accepted Insurance
          </h2>
          <ul className="space-y-1" style={{ color: palette.text }}>
            <li>• Blue Cross Blue Shield (some plans)</li>
            <li>• Aetna (Most Plans)</li>
            <li>• Cigna</li>
            <li>• United Healthcare</li>
            <li>• UMR</li>
            <li>• Caresource</li>
            <li>• Peachstate (not Ambetter)</li>
            <li>• SSI Medicaid</li>
            <li>• Self-Pay (Cost is approximately $1,350.00)</li>
          </ul>
          <p className="mt-3 font-semibold" style={{ color: palette.secondary }}>
            *We are unable to accept any other forms of insurance. This includes out-of-network plans and single-case agreements due to overwhelming requests.
          </p>
        </div>

        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: 'white', borderLeft: `6px solid ${palette.primary}` }}
        >
          <h2 className="text-xl font-serif font-semibold mb-3" style={{ color: palette.primary }}>
            Testing Limitations
          </h2>
          <p className="mb-2 font-semibold" style={{ color: palette.text }}>We do not provide testing for:</p>
          <ul className="space-y-1 text-sm" style={{ color: palette.text }}>
            <li>• Court-ordered assessments</li>
            <li>• Child custody evaluations</li>
            <li>• Learning disabilities/dyslexia</li>
            <li>• Substance abuse</li>
            <li>• Fitness for parenting</li>
            <li>• Psychoeducational evaluations</li>
            <li>• Speech/language therapy</li>
            <li>• Bariatric surgery</li>
            <li>• Memory or dementia</li>
          </ul>
          <p className="mt-3 text-sm italic" style={{ color: palette.text }}>
            Note: No insurance covers testing for learning disabilities or psychoeducational evaluations because the school system gains state funds to provide these assessments, but we do provide brief screenings as part of our comprehensive evaluations for children.
          </p>
        </div>
      </div>

      {/* Services We Don't Offer - Referrals */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: 'white', borderLeft: `6px solid ${palette.secondary}` }}
        >
          <h2 className="text-xl font-serif font-semibold mb-3" style={{ color: palette.primary }}>
            Therapy Referrals
          </h2>
          <p className="mb-3" style={{ color: palette.text }}>We do not offer therapy services. Dr. Caudill specializes in psychological testing only.</p>
          <p className="font-semibold mb-2 text-sm" style={{ color: palette.text }}>Agencies that provide therapy:</p>
          <ul className="space-y-1 text-sm" style={{ color: palette.text }}>
            <li>• InMind: 678-941-3868 (Villa Rica)</li>
            <li>• Sheltered Cove Counseling: 770-949-1595 (Douglasville)</li>
            <li>• New Vision Counseling Center: 678-838-8333 (Douglasville)</li>
            <li>• Douglasville Psych. Outpatient: 678-838-9336 (Douglasville)</li>
            <li>• Willowbrooke at Tanner: 770-812-3266 (Villa Rica) or 770-812-8788 (Carrollton)</li>
            <li>• Waves Counseling Services: 470-244-2574 (Carrollton)</li>
          </ul>
        </div>

        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: 'white', borderLeft: `6px solid ${palette.secondary}` }}
        >
          <h2 className="text-xl font-serif font-semibold mb-3" style={{ color: palette.primary }}>
            Medication Management Referrals
          </h2>
          <p className="mb-3" style={{ color: palette.text }}>We do not offer medication management.</p>
          <p className="font-semibold mb-2 text-sm" style={{ color: palette.text }}>Local agencies that provide psychiatric services:</p>
          <ul className="space-y-1 text-sm" style={{ color: palette.text }}>
            <li>• Georgia Sleep and Psychiatry: 770-438-1799 (Douglasville)</li>
            <li>• Avant Interventional Psychiatry: 770-694-6349 (Austell)</li>
            <li>• Willowbrooke at Tanner: 770-812-3266 (Villa Rica) or 770-812-8788 (Carrollton)</li>
            <li>• Stepping Stones: 678-890-1121 (Carrollton)</li>
            <li>• The Potters Beh. Med Clinic: 770-459-8799 (Villa Rica) or 770-439-3070 (Hiram)</li>
          </ul>
        </div>
      </div>

      {/* Safety Notice */}
      <div
        className="p-6 rounded-lg shadow-md mb-6"
        style={{ backgroundColor: palette.accent, opacity: 0.95 }}
      >
        <p className="text-white leading-relaxed">
          *Due to safety and staffing limitations, we cannot test highly dysregulated children, such as those who are frequently aggressive, throw items, pull items off shelves, or flee (e.g., leave the office), even if their behaviors are not intentional and related to severe developmental delays. However, several larger autism centers offer such services.
        </p>
      </div>

      {/* Submit Referral */}
      <div
        className="p-8 rounded-lg shadow-lg text-center"
        style={{ backgroundColor: 'white', borderTop: `4px solid ${palette.primary}` }}
      >
        <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: palette.primary }}>
          Ready to Get Started?
        </h2>
        <p className="mb-6" style={{ color: palette.text }}>
          If you are seeking psychological testing services and you have read all of the above-outlined information:
        </p>
        <p className="mb-6 font-semibold" style={{ color: palette.text }}>
          Submit a referral form by pressing on the referral link below that links you to our private portal. This is the quickest way to get us information to proceed. This will allow us to meet the needs of more clients and families in a timely manner.
        </p>
        <p className="mb-6" style={{ color: palette.text }}>
          Thank you so much for your patience and understanding!
        </p>
        <a
          href="https://intakeq.com/new/iemwoy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-md font-semibold text-white hover:opacity-90 transition-opacity text-lg"
          style={{ backgroundColor: palette.primary }}
        >
          CLICK HERE FOR REFERRAL LINK
        </a>
        <p className="mt-4 text-sm italic" style={{ color: palette.text }}>
          (All information provided is private & HIPAA Compliant)
        </p>
      </div>
    </div>
  )
}
