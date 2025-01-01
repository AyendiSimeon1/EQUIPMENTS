import FilterButton from '@/components/Homepage/FilterButton'

export function Hero() {
  return (
    <div className="relative h-[400px] bg-gradient-to-r from-amber-700 to-amber-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl font-bold text-white">
            Hire all types of Equipments
          </h1>
          <div className="flex w-full max-w-xl gap-2">
            <input
              type="text"
              placeholder="Search Equipments"
              className="w-full rounded-lg border p-3"
            />
            <button className="rounded-lg bg-yellow-500 px-6 font-medium text-white">
              Search
            </button>
          </div>
          <div className="mt-4 flex gap-4">
            <FilterButton label="Location" />
            <FilterButton label="Price" />
            <FilterButton label="Category" />
          </div>
        </div>
      </div>
    </div>
  )
}
