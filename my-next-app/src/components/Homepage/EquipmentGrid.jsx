import { EquipmentCard } from "./EquipmentsCard"
import Image from 'next/image'
export function EquipmentGrid() {
    const equipments = [
      {
        id: 1,
        title: "Steel Pipelines Cables",
        location: "Port Harcourt, Rumula",
        price: 2500000,
        imageUrl: "/api/placeholder/400/300"
      },

    ]
  
    return (
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {equipments.map((equipment) => (
          <EquipmentCard
            key={equipment.id}
            {...equipment}
          />
        ))}
      </div>
    )
  }
  