import { getBaseURL } from "@lib/util/env";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL(getBaseURL()),
};

export default async function PageLayout(props: { children: React.ReactNode }) {
	return (
		<>
			<NavBar />
			{props.children}
			<Footer />
		</>
	);
}
