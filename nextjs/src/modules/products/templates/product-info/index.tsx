"use client";

import type { HttpTypes } from "@medusajs/types";
import ProductCard from "components/ProductCard";
import ProductHeader from "components/ProductHeader";
import Image from "next/image";
import Link from "next/link";
import {
	CollectionInteriorImage,
	CollectionInteriorImageLarge,
	CollectionInteriorImageSmall,
} from "shared/images";

type ProductInfoProps = {
	product: HttpTypes.StoreProduct;
	relatedProducts: HttpTypes.StoreProduct[];
	region: HttpTypes.StoreRegion;
};

const ProductInfo = ({
	product,
	relatedProducts,
	region,
}: ProductInfoProps) => {
	return (
		<div className="w-full h-full flex flex-col gap-[104px] lg:gap-[144px] pb-[104px] lg:pb-[144px]">
			<ProductHeader product={product} region={region} />
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
			<div className="flex flex-col gap-8 lg:gap-16 w-full px-4 lg:px-24">
				<h2 className="body-big lg:h2">Related products</h2>

				<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
					{relatedProducts.map((product, index) => (
						<ProductCard
							key={product.id}
							index={index}
							handle={product.handle}
							image={product.images?.[0]?.url || ""}
							name={product.title}
							collectionName={product.collection?.title || ""}
							currencyCode={
								product.variants?.[0]?.calculated_price?.currency_code || "eur"
							}
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
		</div>
	);
};

export default ProductInfo;
