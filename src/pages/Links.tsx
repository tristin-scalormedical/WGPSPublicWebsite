import type { Palette } from "../types/palette"
interface LinksProps {
  palette: Palette
}

export default function Links({ palette }: LinksProps) {
  const linkCategories = [
    {
      title: 'Crisis Support',
      links: [
        { name: 'National Suicide Hotlines: 1-800-SUICIDE or 1-800-273-TALK', url: 'http://www.suicidepreventionlifeline.org' },
        { name: 'S.H.A.R.E. House, Family Violence Crisis Center: 770-489-7513', url: 'http://www.sharehousedouglas.org' },
      ]
    },
    {
      title: 'Local Resources',
      links: [
        { name: 'Regional DFCS Child Abuse Reporting: 770-319-3700', url: 'http://www.dfcs.dhr.georgia.gov' },
        { name: 'Georgia Medicaid (General Line): 404-298-1228', url: 'http://www.ghp.georgia.gov' },
        { name: 'Douglas County Board of Education', url: 'http://www.douglas.k12.ga.us' },
        { name: 'Douglas County Juvenile Court & Programs', url: 'http://www.celebratedouglascounty.com' },
      ]
    },
    {
      title: 'Child Development & Early Intervention',
      links: [
        { name: "Babies Can't Wait (Early Intervention Services)", url: 'http://health.state.ga.us/programs/bcw' },
        { name: 'Zero to Three, National Center for Infants, Toddlers & Families', url: 'http://www.zerotothree.org' },
      ]
    },
    {
      title: 'ADHD & Learning Disabilities',
      links: [
        { name: 'National Resource Center for AD/HD - CHADD', url: 'http://www.chadd.org' },
        { name: 'LD OnLine, Learning Disabilities Resource', url: 'http://www.ldonline.org' },
      ]
    },
    {
      title: 'Mental Health Information',
      links: [
        { name: 'The National Institute of Mental Health', url: 'http://www.nimh.nih.gov' },
      ]
    }
  ]

  return (
    <div className="max-w-4xl mx-auto py-16 px-8">
      <h1 className="text-4xl font-serif font-bold mb-8 text-center" style={{ color: palette.primary }}>
        Helpful Links
      </h1>

      <p className="text-center text-lg mb-12" style={{ color: palette.text }}>
        A curated collection of mental health resources, support organizations, and educational materials.
      </p>

      <div className="space-y-6">
        {linkCategories.map((category, index) => (
          <div
            key={index}
            className="p-8 rounded-lg shadow-md"
            style={{ backgroundColor: palette.cardBg }}
          >
            <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: palette.primary }}>
              {category.title}
            </h2>
            <ul className="space-y-3">
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: palette.secondary }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="mt-8 p-6 rounded-lg"
        style={{ backgroundColor: palette.accent, color: palette.text }}
      >
        <p className="text-center">
          <strong>Emergency:</strong> If you are experiencing a mental health emergency, please call 911 or go to your nearest emergency room.
        </p>
      </div>
    </div>
  )
}
