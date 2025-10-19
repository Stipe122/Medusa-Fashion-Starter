import { listCollections } from "@lib/data/collections";
import { getRegion } from "@lib/data/regions";
import ProductHeader from "components/ProductHeader";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
	CollectionInteriorImage,
	CollectionInteriorImageLarge,
	CollectionInteriorImageSmall,
} from "shared/images";

export const metadata: Metadata = {
	title: "Medusa Next.js Starter Template",
	description:
		"A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
};

export default async function Home(props: {
	params: Promise<{ countryCode: string }>;
}) {
	const params = await props.params;

	const { countryCode } = params;

	const region = await getRegion(countryCode);

	const { collections } = await listCollections({
		fields: "id, handle, title",
	});

	if (!collections || !region) {
		return null;
	}

	return (
		<div className="w-full h-full flex flex-col gap-[104px] lg:gap-[144px]">
			<ProductHeader />
			<div className="flex flex-col gap-8 lg:gap-20 w-full">
				<div className="flex flex-col gap-8 w-full px-4 lg:px-24">
					<h2 className="body-big lg:h2">Collection Inspired Interior</h2>

					<Image
						src={CollectionInteriorImage}
						alt="Collection Inspired Interior"
					/>
				</div>
				<Image
					src={CollectionInteriorImageLarge}
					alt="Collection Inspired Interior Large"
					className="w-full lg:h-[809px] px-4 lg:px-0"
				/>
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-[108px] w-full px-4 lg:px-24">
					<Image
						src={CollectionInteriorImageSmall}
						alt="Collection Inspired Interior Small"
						className="w-[240px] lg:w-[492px] h-[343px] lg:h-[656px] flex-shrink-0"
					/>
					<div className="flex flex-col lg:pt-[80px] gap-8">
						<h3 className="body-big lg:h3">
							The Paloma Haven sofa is a masterpiece of minimalism and luxury.
						</h3>
						<Link
							href="#"
							className="link lg:body-big border-b border-black w-fit"
						>
							See more out of Modern Luxe collection
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
