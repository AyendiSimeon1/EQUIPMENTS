import Link from 'next/link'
import { Search } from './Search'

export function Header() {
  return (
    <header className="bg-orange-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">Equipment.ng</span>
        </Link>
        <Search />
        <div className="flex items-center gap-4">
          <Link href="/complete-profile" className="text-white">
            Complete Profile
          </Link>
          <button className="rounded-full bg-white p-2">
            {/* <UserIcon className="h-6 w-6" /> */}
          </button>
        </div>
      </div>
    </header>
  )
}
