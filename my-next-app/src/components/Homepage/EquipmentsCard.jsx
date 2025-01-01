import Image from 'next/image'
  export function EquipmentCard({ title, location, price, imageUrl }) {
    return (
      <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{location}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-bold">₦{price.toLocaleString()}</span>
            <span className="text-sm text-gray-500">per day</span>
          </div>
        </div>
      </div>
    )
  }