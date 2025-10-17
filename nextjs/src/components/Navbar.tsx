
import Link from 'next/link'

import LangMenu from './LanguageMenu'
import SearchMenu from './SearchToggle'
import MobileMenu from './MobileMenu'
import CartIcon from 'shared/svgs/CartIcon'

const links = [
  { href: '/about', label: 'About' },
  { href: '/inspiration', label: 'Inspiration' },
  { href: '/shop', label: 'Shop' },
]

export default function NavBar() {

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-20">
        <div className="flex h-16 items-center justify-between relative">
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
            
            <LangMenu />

            <SearchMenu />

            <button className="inline-flex p-1" type="button">
              <CartIcon/>
            </button>

            <MobileMenu links={links} className="p-1" />

          </div>
        </div>
      </div>

    </header>
  )
}