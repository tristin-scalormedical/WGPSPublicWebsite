import type { Palette } from "../types/palette"
interface TourProps {
  palette: Palette
}

export default function Tour({ palette }: TourProps) {
  const tourPhotos = [
    { src: '/images/tour/waiting-room.jpeg', title: 'Waiting Room' },
    { src: '/images/tour/play-observation-area.jpeg', title: 'Play & Observation Area' },
    { src: '/images/tour/dr-caudill-office.jpeg', title: "Dr. Caudill's Office" },
    { src: '/images/tour/testing-room-1.jpeg', title: 'Testing Room 1' },
    { src: '/images/tour/testing-room-2.jpeg', title: 'Testing Room 2' },
    { src: '/images/tour/testing-room-3.jpeg', title: 'Testing Room 3' },
  ]

  return (
    <div className="max-w-6xl mx-auto py-16 px-8">
      <h1 className="text-4xl font-serif font-bold mb-12 text-center" style={{ color: palette.primary }}>
        Take a Tour
      </h1>

      {/* Front Door Section */}
      <div
        className="mb-12 p-8 rounded-lg shadow-lg"
        style={{ backgroundColor: palette.cardBg, borderTop: `4px solid ${palette.primary}` }}
      >
        <div className="md:flex gap-8 items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="/images/tour/front-door.jpeg"
              alt="WGPS Front Door"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed" style={{ color: palette.text }}>
              The WGPS office space was renovated and decorated by Dr. Caudill with specific attention to creating an inviting & calm environment. The office has a warm feel that is not cold or clinical. Additionally, the specific needs of anxious, easily overwhelmed, & apprehensive clients were considered, as the space is very welcoming and kid friendly.
            </p>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tourPhotos.map((photo, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden"
            style={{ backgroundColor: palette.cardBg }}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-3 text-center" style={{ color: palette.primary }}>
              <p className="font-semibold">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
