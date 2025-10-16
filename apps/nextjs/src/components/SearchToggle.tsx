'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchMenu() {
  const [showSearch, setShowSearch] = useState(false)

    return (

        <div className="hidden md:flex items-center gap-2">
              <button
                className="inline-flex p-1"
                type="button"
                onClick={() => setShowSearch((v) => !v)}
              >
                <Search size={20} />
              </button>

              {showSearch && (
                <input
                  type="text"
                  placeholder="Search…"
                  className="h-9 w-56 px-3 rounded border border-gray-300 outline-none text-sm"
                />
              )}
            </div>
    )
}