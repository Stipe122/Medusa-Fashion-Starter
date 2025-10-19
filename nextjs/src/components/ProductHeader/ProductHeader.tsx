"use client";
import { addToCart } from "@lib/data/cart";
import { getCurrencySymbol } from "@lib/util/money";
import type { HttpTypes } from "@medusajs/types";
import Dropdown from "components/Dropdown";
import QuantitySelector from "components/QuantitySelector";
import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import SimpleButton from "../SimpleButton";
import ColorBox from "./ColorBox";
import ProductImageSlider from "./ProductImageSlider";

type ProductHeaderProps = {
	product: HttpTypes.StoreProduct;
	region: HttpTypes.StoreRegion;
};

const optionsAsKeymap = (
	variantOptions: HttpTypes.StoreProductVariant["options"],
) => {
	return variantOptions?.reduce((acc: Record<string, string>, variant: any) => {
		acc[variant.option.title] = variant.value;
		return acc;
	}, {});
};

const ProductHeader = ({ product, region }: ProductHeaderProps) => {
	const [selectedVariant, setSelectedVariant] =
		useState<HttpTypes.StoreProductVariant | null>(
			product.variants?.[0] || null,
		);

	const [quantity, setQuantity] = useState(1);
	const [selectedColor, setSelectedColor] = useState(
		product.variants?.[0]?.options?.find(
			(option) => option.option?.title === "Color",
		)?.value || "",
	);
	const [selectedMaterial, setSelectedMaterial] = useState(
		product.variants?.[0]?.options?.find(
			(option) => option.option?.title === "Material",
		)?.value || "",
	);

	const [isAddingToCart, setIsAddingToCart] = useState(false);

	useEffect(() => {
		if (!product.variants || product.variants.length === 0) {
			return;
		}

		setSelectedVariant(
			product.variants.find((v) => {
				const variantOptions = optionsAsKeymap(v.options);
				return isEqual(variantOptions, {
					Color: selectedColor,
					Material: selectedMaterial,
				});
			}) || null,
		);
	}, [product.variants, selectedColor, selectedMaterial]);

	const materials =
		Array.from(
			new Set(
				product.variants
					?.map(
						(variant: HttpTypes.StoreProductVariant) =>
							variant.options?.find(
								(option) => option.option?.title === "Material",
							)?.value,
					)
					.filter((value): value is string => Boolean(value)),
			),
		) || [];

	const handleAddToCart = async () => {
		if (!selectedVariant?.id) return null;

		setIsAddingToCart(true);

		await addToCart({
			variantId: selectedVariant.id,
			quantity: quantity,
			countryCode: region.countries?.[0]?.iso_2 || "us",
		});

		setIsAddingToCart(false);
	};

	return (
		<div className="w-full h-full bg-white">
			<div className="flex flex-col gap-8 lg:gap-0 lg:flex-row w-full items-start lg:py-16 lg:px-24">
				{/* Left side */}
				<ProductImageSlider images={product.images} />

				{/* Right side */}
				<div className="bg-white w-full lg:w-[696px] flex-shrink-0 overflow-hidden">
					<div className="px-4 lg:pl-[60px] flex flex-col h-full">
						<div className="flex flex-col gap-8 mb-8 lg:mb-16">
							<div className="flex flex-col gap-2">
								<p className="body text-gray-500">
									{product.collection?.title}
								</p>
								<h3 className="body-big font-bold text-black lg:h3">
									{product.title}
								</h3>
								<p className="body-big text-black">
									{getCurrencySymbol(
										product.variants?.[0]?.calculated_price?.currency_code ||
											"eur",
									)}
									{product.variants?.[0]?.calculated_price?.calculated_amount ||
										0}
								</p>
							</div>

							<p className="body-small lg:body text-gray-500 w-full lg:max-w-[481px] break-words">
								{product.description}
							</p>
						</div>

						<div className="flex flex-col gap-8 lg:gap-6 mb-8 lg:mb-[96px]">
							<div className="relative flex flex-col gap-4 w-full lg:w-[243px]">
								<div className="flex gap-6 items-center body">
									<p className="body text-black">Materials</p>
									<p className="body text-gray-500 whitespace-nowrap">
										{selectedMaterial}
									</p>
								</div>

								<Dropdown
									selected={selectedMaterial}
									setSelected={setSelectedMaterial}
									options={materials}
								/>
							</div>

							<div className="flex flex-col gap-4 w-full">
								<div className="flex gap-6 items-center body">
									<p className="body text-black">Colors</p>
									<p className="body text-gray-500 whitespace-nowrap">
										{selectedColor}
									</p>
								</div>
								<div className="flex gap-6 items-center">
									<ColorBox
										name={"Dark Gray"}
										value={"#A2A2A2"}
										selected={selectedColor === "Dark Gray"}
										onClick={() => setSelectedColor("Dark Gray")}
									/>
									<ColorBox
										name={"Black"}
										value={"#353535"}
										selected={selectedColor === "Black"}
										onClick={() => setSelectedColor("Black")}
									/>
									<ColorBox
										name={"Light Gray"}
										value={"#E8E8E8"}
										selected={selectedColor === "Light Gray"}
										onClick={() => setSelectedColor("Light Gray")}
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<div className="flex flex-col lg:flex-row gap-4 items-center">
								<QuantitySelector
									quantity={quantity}
									setQuantity={setQuantity}
								/>

								<SimpleButton
									text="Add to cart"
									className="w-full h-12 btn"
									onClick={handleAddToCart}
									disabled={isAddingToCart}
									isLoading={isAddingToCart}
								/>
							</div>

							<p className="body-small lg:body text-gray-500">
								Estimate delivery 2-3 days
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductHeader;
