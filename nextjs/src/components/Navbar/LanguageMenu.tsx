'use client'

import { useState } from 'react'
import ChevronDownIcon from 'shared/svgs/ChevronDownIcon'

export default function LangMenu() {
    const [isLangOpen, setIsLangOpen] = useState(false)

    return (

        <div className="relative hidden md:block">
            <button
                type="button"
                className="inline-flex items-center gap-1 px-2 py-1 text-sm text-black"
                onClick={() => setIsLangOpen((v) => !v)}
            >
                HR
                <ChevronDownIcon
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
    )
}