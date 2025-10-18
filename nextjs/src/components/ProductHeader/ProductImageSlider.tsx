import { useState } from "react";
import ArrowButton from "./ArrowButton";

interface IProps {
	images: { id: number }[];
}

const ProductImageSlider = ({ images }: IProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const maxSlide = images.length - 1;

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
	};

	return (
		<div className="flex flex-col gap-6 overflow-hidden w-full">
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
								<span className="text-gray-500 text-xl">Image {image.id}</span>
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
	);
};

export default ProductImageSlider;
