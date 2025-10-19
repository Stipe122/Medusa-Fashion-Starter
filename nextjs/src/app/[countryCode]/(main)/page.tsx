import { listProducts } from "@lib/data/products";
import ProductCard from "components/ProductCard";
import type { Metadata } from "next";

type Props = {
	params: Promise<{ countryCode: string; handle: string }>;
};

export const metadata: Metadata = {
	title: "Medusa Next.js Starter Template",
	description:
		"A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
};

export default async function Home(props: Props) {
	const params = await props.params;

	const products = await listProducts({
		countryCode: params.countryCode,
	}).then(({ response }) => response.products);

	return (
		<div className="w-full h-full flex flex-col mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-20 gap-[104px] lg:gap-[144px] pb-[104px] lg:pb-[144px]">
			<h1 className="body-big lg:h1">Home page</h1>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						image={product.images?.[0]?.url || ""}
						handle={product.handle || ""}
						currencyCode={
							product.variants?.[0]?.calculated_price?.currency_code || ""
						}
						name={product.title}
						collectionName={product.collection?.title || ""}
						price={
							product.variants?.[0]?.calculated_price?.calculated_amount?.toString() ||
							""
						}
						salePrice={
							product.variants?.[0]?.calculated_price?.original_amount?.toString() ||
							""
						}
						isOnSale={
							product.variants?.[0]?.calculated_price
								?.is_calculated_price_price_list
						}
					/>
				))}
			</div>
		</div>
	);
}
