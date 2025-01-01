'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchAndFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [filters, setFilters] = useState({
    search: searchParams.get('q') || '',
    location: searchParams.get('location') || '',
    category: searchParams.get('category') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    condition: searchParams.get('condition') || ''
  })

  const updateFilters = (newFilters) => {
    const params = new URLSearchParams()
    Object.entries({ ...filters, ...newFilters })
      .forEach(([key, value]) => value && params.set(key, value))
    
    router.push(`/?${params.toString()}`)
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search equipment..."
            className="w-full rounded-lg border p-3 pl-10"
            value={filters.search}
            onChange={(e) => updateFilters({ search: e.target.value })}
          />
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        </div>
        <button 
          className="rounded-lg bg-yellow-500 px-6 font-medium text-white"
          onClick={() => updateFilters(filters)}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        <select 
          className="rounded-lg border p-2"
          value={filters.location}
          onChange={(e) => updateFilters({ location: e.target.value })}
        >
          <option value="">All Locations</option>
          <option value="port-harcourt">Port Harcourt</option>
          <option value="lagos">Lagos</option>
        </select>

        <select 
          className="rounded-lg border p-2"
          value={filters.category}
          onChange={(e) => updateFilters({ category: e.target.value })}
        >
          <option value="">All Categories</option>
          <option value="construction">Construction</option>
          <option value="industrial">Industrial</option>
        </select>

        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min Price"
            className="w-32 rounded-lg border p-2"
            value={filters.minPrice}
            onChange={(e) => updateFilters({ minPrice: e.target.value })}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max Price"
            className="w-32 rounded-lg border p-2"
            value={filters.maxPrice}
            onChange={(e) => updateFilters({ maxPrice: e.target.value })}
          />
        </div>

        <select 
          className="rounded-lg border p-2"
          value={filters.condition}
          onChange={(e) => updateFilters({ condition: e.target.value })}
        >
          <option value="">Any Condition</option>
          <option value="new">Brand New</option>
          <option value="used">Used</option>
        </select>
      </div>
    </div>
  )
}