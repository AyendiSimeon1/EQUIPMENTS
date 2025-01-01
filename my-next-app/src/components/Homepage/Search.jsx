export function Search() {
    return (
      <div className="relative flex w-full max-w-xl">
        <input
          type="text"
          placeholder="Search Equipments"
          className="w-full rounded-l-lg border p-2 pl-10"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          {/* <SearchIcon className="h-5 w-5 text-gray-400" /> */}
        </div>
        <button className="rounded-r-lg bg-yellow-500 px-4 text-white">
          Search
        </button>
      </div>
    )
  }
  