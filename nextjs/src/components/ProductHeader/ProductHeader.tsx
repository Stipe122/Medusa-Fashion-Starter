"use client";
import Dropdown from "components/Dropdown";
import QuantitySelector from "components/QuantitySelector";
import { useState } from "react";
import SimpleButton from "../SimpleButton";
import ProductImageSlider from "./ProductImageSlider";

const ProductHeader = () => {
	const [quantity, setQuantity] = useState(1);
	const [selectedColor, setSelectedColor] = useState("Dark Gray");
	const [selectedMaterial, setSelectedMaterial] = useState("Linen");

	const images = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

	const materials = ["Linen", "Cotton", "Velvet", "Leather"];

	const colors = [
		{ name: "Dark Gray", value: "#a2a2a2" },
		{ name: "Black", value: "#353535" },
		{ name: "Light Gray", value: "#e8e8e8" },
	];

	return (
		<div className="w-full h-full bg-white">
			<div className="flex flex-col lg:flex-row w-full items-start lg:py-16 lg:px-24">
				{/* Left side */}
				<ProductImageSlider images={images} />

				{/* Right side */}
				<div className="bg-white w-full lg:w-[696px] flex-shrink-0 overflow-hidden">
					<div className="px-4 lg:pl-[60px] flex flex-col h-full">
						<div className="flex flex-col gap-8 mb-8 lg:mb-16">
							<div className="flex flex-col gap-2">
								<p className="body text-gray-500">Modern Luxe</p>
								<h1 className="body-big font-bold text-black lg:h3">
									Paloma Haven
								</h1>
								<p className="body-big text-black">€12000</p>
							</div>

							<p className="body-small lg:body text-gray-500 w-full lg:max-w-[481px] break-words">
								Minimalistic designs, neutral colors, and high-quality textures.
								Perfect for those who seek comfort with a clean and understated
								aesthetic. This collection brings the essence of Scandinavian
								elegance to your living room.
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
									{colors.map((color) => (
										<div className="flex flex-col items-start" key={color.name}>
											<button
												key={color.name}
												onClick={() => setSelectedColor(color.name)}
												className="w-8 h-8 rounded-none transition-all mb-2"
												style={{ backgroundColor: color.value }}
												aria-label={`Select ${color.name}`}
											/>
											{selectedColor === color.name && (
												<div className="h-[1px] bg-black w-8" />
											)}
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<div className="flex flex-col lg:flex-row gap-4 items-center">
								<QuantitySelector
									quantity={quantity}
									setQuantity={setQuantity}
								/>

								<SimpleButton text="Add to cart" className="w-full h-12 btn" />
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
