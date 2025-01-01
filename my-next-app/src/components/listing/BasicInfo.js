export function ListingBasicInfo({ data, onUpdate, onNext }) {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        onNext()
      }}>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input 
              type="text"
              className="mt-1 block w-full rounded-lg border p-2"
              value={data.location || ''}
              onChange={(e) => onUpdate({ ...data, location: e.target.value })}
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select 
              className="mt-1 block w-full rounded-lg border p-2"
              value={data.category || ''}
              onChange={(e) => onUpdate({ ...data, category: e.target.value })}
            >
              <option value="">Select category</option>
              <option value="construction">Construction</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">Sub Category</label>
            <select 
              className="mt-1 block w-full rounded-lg border p-2"
              value={data.subCategory || ''}
              onChange={(e) => onUpdate({ ...data, subCategory: e.target.value })}
            >
              <option value="">Select sub-category</option>
            </select>
          </div>
  
          <button type="submit" className="w-full rounded-lg bg-yellow-500 py-3 font-medium text-white">
            Next
          </button>
        </div>
      </form>
    )
  }