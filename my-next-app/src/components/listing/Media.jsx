export function ListingMedia({ data, onUpdate, onSubmit, onBack }) {
    const handleImageUpload = (e) => {
      const files = Array.from(e.target.files)
      onUpdate([...data, ...files])
    }
  
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-video cursor-pointer rounded-lg border-2 border-dashed">
            <input 
              type="file"
              multiple
              accept="image/*"
              className="absolute inset-0 opacity-0"
              onChange={handleImageUpload}
            />
            <div className="flex h-full items-center justify-center">
              <span className="text-gray-500">Add Photos</span>
            </div>
          </div>
          {data.map((file, index) => (
            <div key={index} className="relative aspect-video rounded-lg bg-gray-100">
              {/* Image preview would go here */}
            </div>
          ))}
        </div>
  
        <div className="flex gap-4">
          <button 
            onClick={onBack}
            className="w-full rounded-lg border border-yellow-500 py-3 font-medium text-yellow-500"
          >
            Back
          </button>
          <button 
            onClick={onSubmit}
            className="w-full rounded-lg bg-yellow-500 py-3 font-medium text-white"
          >
            List Equipment
          </button>
        </div>
      </div>
    )
  }