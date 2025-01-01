import { ImageGallery } from '@/components/ImageGallery'
import { EquipmentInfo } from '@/components/EquipmentInfo'
import { RelatedEquipment } from '@/components/RelatedEquipment'

export default function EquipmentDetails() {
  const equipment = {
    id: 1,
    title: "Steel Pipelines Cables",
    location: "Port Harcourt, Rumula",
    price: 20000000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu lectus molestie, dictum est a, mattis tellus.",
    images: Array(5).fill("/api/placeholder/400/300"),
    brand: "Port Harcourt, Rumula",
    color: "Port Harcourt, Rumula",
    yearOfManufacture: "Port Harcourt, Rumula",
    workingCondition: "Brand New",
    certificates: ["Certificate of use", "Certificate of use", "Certificate of use"],
    accessories: ["Light", "Crane hook", "Chain hook", "Crane hook", "Chain hook"]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <ImageGallery images={equipment.images} />
        <EquipmentInfo equipment={equipment} />
      </div>
      <RelatedEquipment />
    </div>
  )
}

// components/ImageGallery.tsx
export function ImageGallery({ images }: { images: string[] }) {
  const [mainImage, ...thumbnails] = images

  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image 
          src={mainImage}
          alt="Main view"
          fill
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {thumbnails.map((image, index) => (
          <button 
            key={index}
            className="relative aspect-video overflow-hidden rounded-lg"
          >
            <Image
              src={image}
              alt={`View ${index + 2}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}