export function EquipmentInfo({ equipment }: { equipment: any }) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{equipment.title}</h1>
          <p className="text-gray-500">{equipment.location}</p>
        </div>
  
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">₦{equipment.price.toLocaleString()}</span>
            <span className="text-gray-500">negotiable</span>
          </div>
          <div className="flex gap-4">
            <button className="w-full rounded-lg bg-yellow-500 py-3 font-medium text-white">
              Start a Chat
            </button>
            <button className="w-full rounded-lg border border-yellow-500 py-3 font-medium text-yellow-500">
              Contact Owner
            </button>
          </div>
        </div>
  
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-600">{equipment.description}</p>
        </div>
  
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="Make" value={equipment.brand} />
          <InfoItem label="Brand" value={equipment.brand} />
          <InfoItem label="Color" value={equipment.color} />
          <InfoItem label="Year of Manufacture" value={equipment.yearOfManufacture} />
        </div>
  
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Accessories</h2>
          <div className="flex flex-wrap gap-2">
            {equipment.accessories.map((accessory: string, index: number) => (
              <span 
                key={index}
                className="rounded-full bg-yellow-100 px-4 py-1 text-sm text-yellow-700"
              >
                {accessory}
              </span>
            ))}
          </div>
        </div>
  
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Certificates</h2>
          <div className="space-y-2">
            {equipment.certificates.map((certificate: string, index: number) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-blue-600"
              >
                <DocumentIcon className="h-5 w-5" />
                <span>{certificate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  