'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

type LinkItem = { href: string; label: string }

export default function MobileMenu({
    links,
    className = '',
}: {
    links: LinkItem[]
    className?: string
}) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <>
            <button
                className={`inline-flex md:hidden p-1 ${className}`}
                type="button"
                onClick={() => setMobileNavOpen(o => !o)}
                aria-expanded={mobileNavOpen}
                aria-label="Toggle menu"
            >
                {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {mobileNavOpen && (
                <div className="absolute left-0 right-0 top-full md:hidden border-t bg-white z-40">
                    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-20 py-3">
                        <nav className="flex flex-col gap-2 text-black text-[16px]">
                            {links.map(l => (
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
        </>
    )
}
