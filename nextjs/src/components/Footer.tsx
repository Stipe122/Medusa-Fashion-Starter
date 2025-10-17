import Newsletter from "./Newsletter";

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

export default function Footer() {

    return (
        <footer className="bg-[#f5f5f5]">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-20 py-10">
                <div className="flex flex-col md:flex-row gap-8">

                    <section className="order-2 md:order-none flex flex-col">
                        <div className="h4 md:h3 font-regular leading-tight tracking-tight !leading-[0.85]">
                            <div>Sofa</div>
                            <div>Society</div>
                            <div>Co.</div>
                        </div>

                        <p className="mt-6 body-small text-black">© {new Date().getFullYear()}, Sofa Society</p>
                    </section>

                    <section className="order-3 md:order-none flex flex-col md:flex-row items-center mx-auto ">
                        <div className="grid grid-cols-3 gap-x-12 md:gap-x-16 text-sm">
                            {linkGroups.map((group, i) => (
                                <ul key={i} className="space-y-2">
                                    {group.map((item) => (
                                        <li key={item.label}>
                                            <a href={item.href} className="hover:underline body-small sm:body">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </section>

                    <Newsletter className="order-1 md:order-none flex flex-col" />

                </div>
            </div>
        </footer>
    );
}