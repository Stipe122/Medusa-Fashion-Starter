'use client'

export default function Footer() {

    const linkGroups: { label: string; href: string }[][] = [

        [
            { label: "FAQ", href: "/faq" },
            { label: "Help", href: "/help" },
            { label: "Delivery", href: "/delivery" },
            { label: "Returns", href: "/returns" },
        ],

        [
            { label: "Instagram", href: "#" },
            { label: "TikTok", href: "#" },
            { label: "Pinterest", href: "#" },
            { label: "Facebook", href: "#" },
        ],

        [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "Terms of Use", href: "/terms" },
        ],
    ];

    return (
        <footer className="bg-[#f5f5f5]">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-20 py-10">
                <div className="flex flex-col md:flex-row gap-8">

                    <section className="order-2 md:order-none flex flex-col">
                        <div className="text-[36px] md:text-[44px] leading-tight tracking-tight !leading-[0.85]">
                            <div>Sofa</div>
                            <div>Society</div>
                            <div>Co.</div>
                        </div>

                        <p className="mt-6 text-xs text-black/60">© {new Date().getFullYear()}, Sofa Society</p>
                    </section>

                    <section className="order-3 md:order-none flex flex-col md:flex-row items-center mx-auto">
                        <div className="grid grid-cols-3 gap-x-12 md:gap-x-16 text-sm">
                            {linkGroups.map((group, i) => (
                                <ul key={i} className="space-y-2">
                                    {group.map((item) => (
                                        <li key={item.label}>
                                            <a href={item.href} className="hover:underline">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </section>

                    <section className="order-1 md:order-none flex flex-col">
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            Join our newsletter
                        </h3>

                        <p className="mt-2 text-[15px] text-black/70">
                            We will also send you our discount coupons!
                        </p>

                        <form className="mt-4 flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="h-10 flex-1 rounded-md border border-gray-300 bg-white px-3 text-sm
                            placeholder-black/40 outline-none focus:border-black"
                            />
                            <button
                                type="submit"
                                className="h-10 px-4 rounded-md bg-black text-white text-sm font-medium whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className="mt-3 text-xs leading-relaxed text-black/40 max-w-md">
                            By subscribing you agree to with our <a href="#" className="underline">Privacy Policy</a> and
                            provide consent to receive updates from our company
                        </p>
                    </section>
                </div>
            </div>
        </footer>
    );
}
