// import { ChevronDownIcon } from '@heroicons/react/solid';

 export default function FilterButton({ label }) {
    return (
      <button className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
        {label}
        {/* <ChevronDownIcon className="h-4 w-4" /> */}
      </button>
    )
  }