export function FilterBar() {
    return (
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex gap-4">
          <select className="rounded-lg border p-2">
            <option>Location</option>
          </select>
          <select className="rounded-lg border p-2">
            <option>Price Range</option>
          </select>
          <select className="rounded-lg border p-2">
            <option>Category</option>
          </select>
        </div>
        <button className="rounded-lg bg-yellow-500 px-4 py-2 text-white">
          List Your Equipment
        </button>
      </div>
    )
  }
  