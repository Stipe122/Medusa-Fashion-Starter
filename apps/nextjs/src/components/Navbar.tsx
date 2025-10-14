'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search, ShoppingBag, ChevronDown } from 'lucide-react'

const links = [
  { href: '/about', label: 'About' },
  { href: '/inspiration', label: 'Inspiration' },
  { href: '/shop', label: 'Shop' },
]

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-20">
        <div className="flex h-16 items-center justify-between">
          <span className="text-black text-[18px] font-medium tracking-tight">
            SofaSocietyCo.
          </span>

          <nav className="hidden md:flex items-center gap-8 text-black text-[15px]">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:underline">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="relative hidden md:block">
              <button
                type="button"
                className="inline-flex items-center gap-1 px-2 py-1 text-sm text-black"
                onClick={() => setIsLangOpen((v) => !v)}
              >
                HR
                <ChevronDown
                  size={16}
                  className={isLangOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
                />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-28 rounded-md border bg-white shadow-lg z-10">
                  <button
                    type="button"
                    className="block w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
                    onClick={() => setIsLangOpen(false)}
                  >
                    HR
                  </button>
                  <button
                    type="button"
                    className="block w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
                    onClick={() => setIsLangOpen(false)}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>

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

            <button className="inline-flex p-1" type="button">
              <ShoppingBag size={20} />
            </button>

            <button
              className="inline-flex md:hidden p-1"
              type="button"
              onClick={() => setMobileNavOpen((o) => !o)}
            >
              {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileNavOpen && (
        <div className="md:hidden border-t">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-20 py-3">
            <nav className="flex flex-col gap-2 text-black text-[16px]">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="py-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t flex gap-2">
                <button
                  type="button"
                  className="px-3 py-1.5 rounded border border-gray-300 text-sm"
                  onClick={() => setMobileNavOpen(false)}
                >
                  HR
                </button>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded border border-gray-300 text-sm"
                  onClick={() => setMobileNavOpen(false)}
                >
                  EN
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
