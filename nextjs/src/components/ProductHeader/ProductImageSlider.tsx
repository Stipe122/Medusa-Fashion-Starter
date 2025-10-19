import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import ArrowButton from "./ArrowButton";

interface IProps {
	images: { id: number }[];
}

const ProductImageSlider = ({ images }: IProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	const maxSlide = images.length - 1;

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1024);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
	};

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		trackMouse: isMobile,
	});

	return (
		<div className="flex flex-col gap-6 overflow-hidden w-full">
			<div className="relative top-0 flex gap-4 w-full" {...swipeHandlers}>
				<div
					className="flex gap-4 w-full transition-transform duration-500 ease-in-out"
					style={{
						transform: isMobile
							? `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 16}px))`
							: `translateX(-${currentSlide * 475}px)`,
					}}
				>
					{images.map((image) => (
						<div
							key={image.id}
							className="w-full lg:w-[459px] h-[490px] lg:h-[612px] bg-gray-300 flex items-center justify-center flex-shrink-0"
						>
							<div className="w-full h-full bg-gray-300 flex items-center justify-center">
								<span className="text-gray-500 text-xl">Image {image.id}</span>
							</div>
						</div>
					))}
				</div>

				<div className="absolute px-4 top-1/2 w-full -translate-y-1/2 hidden lg:flex flex-row justify-between">
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

				{/* Page Indicators - Mobile (inside image) */}
				<div className="absolute bottom-6 w-full flex justify-center items-center lg:hidden">
					<div className="flex flex-col gap-[1px] items-start">
						<div className="flex gap-3 body text-black">
							{Array.from({ length: maxSlide + 1 }).map((_, index) => (
								<button
									type="button"
									key={`indicator-${index}`}
									onClick={() => setCurrentSlide(index)}
									className={`${currentSlide === index ? "font-medium border-b border-black" : "border-transparent border-b"} px-1 hover:font-medium transition-all`}
								>
									{index + 1}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Page Indicators - Desktop (outside image) */}
			<div className="hidden lg:flex w-full justify-center items-center">
				<div className="flex flex-col gap-[1px] items-start">
					<div className="flex gap-3 body text-black">
						{Array.from({ length: maxSlide + 1 }).map((_, index) => (
							<button
								type="button"
								key={`indicator-${index}`}
								onClick={() => setCurrentSlide(index)}
								className={`${currentSlide === index ? "font-medium border-b border-black" : "border-transparent border-b"} px-1 hover:font-medium transition-all`}
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
