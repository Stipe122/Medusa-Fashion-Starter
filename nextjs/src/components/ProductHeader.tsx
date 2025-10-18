"use client";
import { useState } from "react";
import ChevronDownIcon from "shared/svgs/ChevronDownIcon";
import MinusIcon from "shared/svgs/MinusIcon";
import PlusIcon from "shared/svgs/PlusIcon";
import ArrowButton from "./ArrowButton";
import { SimpleButton } from "./SimpleButton";

const ProductHeader = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [selectedColor, setSelectedColor] = useState("Dark Gray");
	const [selectedMaterial, setSelectedMaterial] = useState("Linen");
	const [isMaterialDropdownOpen, setIsMaterialDropdownOpen] = useState(false);

	const images = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

	const materials = ["Linen", "Cotton", "Velvet", "Leather"];

	const maxSlide = images.length - 1;

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
	};

	const incrementQuantity = () => {
		setQuantity((prev) => prev + 1);
	};

	const decrementQuantity = () => {
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
	};

	const colors = [
		{ name: "Dark Gray", value: "#a2a2a2" },
		{ name: "Black", value: "#353535" },
		{ name: "Light Gray", value: "#e8e8e8" },
	];

	return (
		<div className="w-full h-full bg-white">
			<div className="flex flex-col sm:flex-row w-full items-start sm:py-16 sm:px-24">
				{/* Left side */}
				<div className="flex flex-col gap-4 overflow-hidden w-full">
					<div className="relative top-0 flex gap-4 w-full">
						<div
							className="flex gap-4 transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentSlide * 475}px)` }}
						>
							{images.map((image) => (
								<div
									key={image.id}
									className="w-[459px] h-[612px] bg-gray-300 flex items-center justify-center flex-shrink-0"
								>
									<div className="w-full h-full bg-gray-300 flex items-center justify-center">
										<span className="text-gray-500 text-xl">
											Image {image.id}
										</span>
									</div>
								</div>
							))}
						</div>

						<div className="absolute px-4 top-1/2 w-full -translate-y-1/2 flex flex-row justify-between">
							<ArrowButton
								direction="left"
								variant={currentSlide === 0 ? "secondary" : "primary"}
								onClick={prevSlide}
							/>
							<ArrowButton
								direction="right"
								variant={currentSlide < maxSlide ? "primary" : "secondary"}
								onClick={nextSlide}
							/>
						</div>
					</div>
					<div className="w-full flex justify-center items-center">
						<div className="flex flex-col gap-[1px] items-start">
							<div className="flex gap-2 body text-black">
								{Array.from({ length: maxSlide + 1 }).map((_, index) => (
									<button
										type="button"
										key={`indicator-${index}`}
										onClick={() => setCurrentSlide(index)}
										className={`${currentSlide === index ? "font-medium border-b border-black" : "border-transparent border-b"} px-2 hover:font-medium transition-all`}
									>
										{index + 1}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Right side */}
				<div className="bg-white w-full sm:w-[696px] flex-shrink-0 overflow-hidden">
					<div className="px-4 sm:pl-[60px] flex flex-col h-full">
						<div className="flex flex-col gap-8 mb-16">
							<div className="flex flex-col gap-2">
								<p className="body text-gray-500">Modern Luxe</p>
								<h1 className="h3 text-black">Paloma Haven</h1>
								<p className="body-big text-black">€12000</p>
							</div>

							<p className="body text-black max-w-[481px] break-words">
								Minimalistic designs, neutral colors, and high-quality textures.
								Perfect for those who seek comfort with a clean and understated
								aesthetic. This collection brings the essence of Scandinavian
								elegance to your living room.
							</p>
						</div>

						<div className="flex flex-col gap-6 mb-16">
							<div className="relative flex flex-col gap-4 w-[243px]">
								<div className="flex gap-6 items-center body">
									<p className="body text-black">Materials</p>
									<p className="body text-gray-500 whitespace-nowrap">
										{selectedMaterial}
									</p>
								</div>
								<button
									type="button"
									onClick={() =>
										setIsMaterialDropdownOpen(!isMaterialDropdownOpen)
									}
									className="border border-gray-200 rounded-base h-12 px-4 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors"
								>
									<p className="body text-black">{selectedMaterial}</p>
									<ChevronDownIcon
										className={
											isMaterialDropdownOpen
												? "rotate-180 transition-transform duration-200"
												: ""
										}
										fill={isMaterialDropdownOpen ? "#050505" : "#A2A2A2"}
									/>
								</button>

								{isMaterialDropdownOpen && (
									<div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-base shadow-lg z-20 overflow-hidden">
										{materials.map((material) => (
											<button
												key={material}
												type="button"
												onClick={() => {
													setSelectedMaterial(material);
													setIsMaterialDropdownOpen(false);
												}}
												className={`w-full px-4 py-3 text-left body hover:bg-gray-50 transition-colors ${
													selectedMaterial === material
														? "bg-gray-100 text-black font-medium"
														: "text-black"
												}`}
											>
												{material}
											</button>
										))}
									</div>
								)}
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
							<div className="flex gap-4 items-center">
								<div className="border border-gray-200 rounded-base h-12 px-6 py-2 flex items-center justify-center gap-4">
									<button
										type="button"
										onClick={decrementQuantity}
										className="w-6 h-6 flex items-center justify-center"
										aria-label="Decrease quantity"
									>
										<MinusIcon fill={quantity > 1 ? "#050505" : "#A2A2A2"} />
									</button>
									<p className="btn-big text-black">{quantity}</p>
									<button
										type="button"
										onClick={incrementQuantity}
										className="w-6 h-6 flex items-center justify-center"
										aria-label="Increase quantity"
									>
										<PlusIcon />
									</button>
								</div>

								<SimpleButton text="Add to cart" className="w-full" />
							</div>

							<p className="body text-gray-500">Estimate delivery 2-3 days</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductHeader;
