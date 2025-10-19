import { retrieveCart } from "@lib/data/cart";
import Link from "next/link";
import CartIcon from "shared/svgs/CartIcon";
import SearchToggle from "../SearchToggle";
import LanguageMenu from "./LanguageMenu";
import MobileMenu from "./MobileMenu";

const links = [
	{ href: "/", label: "About" },
	{ href: "/", label: "Inspiration" },
	{ href: "/", label: "Shop" },
];

export default async function NavBar() {
	const cart = await retrieveCart();

	return (
		<header className="bg-white sticky top-0 z-50 h-[84px]">
			<div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-20">
				<div className="flex h-[84px] items-center justify-between relative">
					<Link
						href="/"
						className="text-black body-big font-medium tracking-tight"
					>
						SofaSocietyCo.
					</Link>

					<nav className="hidden md:flex items-center gap-8 text-black body">
						{links.map((l) => (
							<Link
								key={l.href + l.label}
								href={l.href}
								className="hover:underline"
							>
								{l.label}
							</Link>
						))}
					</nav>

					<div className="flex items-center gap-5">
						<LanguageMenu />

						<SearchToggle />

						<Link href="/cart" className="relative">
							<CartIcon />

							<div className="absolute -top-2 -right-2 bg-black text-white text-xs min-w-5 w-fit h-5 p-1 flex items-center justify-center rounded-full">
								{cart?.items?.length || 0}
							</div>
						</Link>

						<MobileMenu links={links} className="p-1" />
					</div>
				</div>
			</div>
		</header>
	);
}
