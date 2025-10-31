import type { Palette } from "../types/palette"
interface StaffProps {
  palette: Palette
}

export default function Staff({ palette }: StaffProps) {
  const staffMembers = [
    {
      name: 'Dr. Tina M. Caudill, Psy.D.',
      position: 'Licensed Psychologist and Owner',
      quote: '"Neurodiversity is what makes the world interesting. Everyone struggles at times, but truly understanding and embracing our strengths and weaknesses is the key to life"',
      description: [
        'Dr. Caudill established West Georgia Psychological Services in 2006 and has been a licensed psychologist in the state of Georgia since 2005. She obtained a doctorate degree in psychology from the Georgia School of Professional Psychology with an emphasis in Child and Family. She also completed all masters level coursework in adult clinical psychology at the University of Dayton, OH. She has been on the board of the Georgia Psychological Association (GPA) and served as chair of several committees, including The Committee of Insurance and Managed Care and The Clinical Child and Adolescent Committee. Additionally, Dr. Caudill hosts a monthly peer consultation group for psychologists across Georgia specializing in psychological testing.',
        'Dr. Caudill has over two decades of experience in the assessment of neurodivergent populations, developmental disabilities, autism, and emotional problems in children, teens, and adults. Additionally, she specialized in trauma/abuse in her early career. Dr. Caudill currently focuses on psychological evaluations starting at the age of 6 through adulthood, as well as managing the practice to work in collaboration with the families and the community.'
      ],
      image: '/images/staff/dr-caudill-updated.jpg',
      vitae: '/documents/Professional Vitae-2025.pdf'
    },
    {
      name: 'Hillary Harrison, M.A. LMSW',
      position: 'Psychometrician and Testing Assistant',
      quote: '"I truly love working with all of our clients, especially playing a role in their journey to understanding their mental health needs and gaining treatment options"',
      description: [
        'Hillary Harrison has been assisting with administering a variety of different psychological assessment protocols under the supervision of Dr. Caudill since 2016 at West Georgia Psychological Services. Hillary obtained her master\'s degree in Social Work from Kennesaw State University, as she has a passion for helping others. Hillary joined our practice to gain experience with general assessment skills, clinical writing, and psychometrics. Hillary is well versed in assessment with children, teens, and adults. Hillary is a valued member of our team, and she is able to gain immediate rapport with our clients due to her pleasant and professional demeanor.'
      ],
      image: '/images/staff/hillary-harrison.jpeg',
      vitae: null
    },
    {
      name: 'Shanan Bailey',
      position: 'Office Manager',
      quote: null,
      description: [
        'Shanan is the dedicated office manager and the backbone of the practice, serving in this role since 2016. As the first point of contact, she enjoys engaging in daily interactions with clients, demonstrating her genuine kindness and desire to help others. Known for her efficiency, attention to detail, and positive, upbeat demeanor, Shanan consistently provides a professional and considerate experience for everyone she assists. She possesses a strong knowledge of autism spectrum disorder and is often praised by clients for her promptness, dedication, and willingness to go above and beyond. Her compassionate approach and unwavering commitment make her an invaluable member of the team.'
        ],
      image: '/images/staff/shanan-bailey.jpg',
      vitae: null
    },
  ]

  return (
    <div className="max-w-6xl mx-auto py-16 px-8">
      <h1 className="text-4xl font-serif font-bold mb-12 text-center" style={{ color: palette.primary }}>
        Our Staff
      </h1>

      <div className="space-y-8">
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            className="p-8 rounded-lg shadow-lg"
            style={{ backgroundColor: palette.cardBg, borderTop: `4px solid ${palette.primary}` }}
          >
            <div className="md:flex gap-8">
              {/* Image */}
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="aspect-[3/4] w-full">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-serif font-bold mb-2" style={{ color: palette.primary }}>
                  {staff.name}
                </h2>
                <p className="text-lg mb-4" style={{ color: palette.secondary }}>
                  {staff.position}
                </p>

                {staff.vitae && (
                  <a
                    href={staff.vitae}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-4 underline hover:opacity-80"
                    style={{ color: palette.primary }}
                  >
                    View Vitae (PDF)
                  </a>
                )}

                {staff.quote && (
                  <blockquote className="italic mb-4 pl-4 border-l-4" style={{ borderColor: palette.accent, color: palette.text }}>
                    {staff.quote}
                  </blockquote>
                )}

                <div className="space-y-3" style={{ color: palette.text }}>
                  {staff.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
