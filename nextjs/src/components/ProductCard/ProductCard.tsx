import clsx from "clsx";
import Link from "next/link";

interface ProductCardProps {
	name: string;
	category: string;
	price: string;
	salePrice?: string;
}

const ProductCard = ({
	name,
	category,
	price,
	salePrice,
}: ProductCardProps) => {
	return (
		<Link
			href={"#"}
			className="flex flex-col gap-4 lg:gap-6 w-full cursor-pointer"
		>
			<div className="relative w-full h-[286px] bg-gray-300 overflow-hidden"></div>

			<div className="flex flex-col gap-1 relative">
				<div className="flex flex-col lg:flex-row justify-between items-start">
					<div className="flex flex-col gap-1">
						<p className="body-small lg:body text-black">{name}</p>
						<p className="hidden lg:block body-small text-gray-500">
							{category}
						</p>
					</div>

					<div className="flex flex-row justify-between w-full lg:flex-col lg:w-fit lg:items-end">
						<p
							className={clsx(
								"body-small-bold lg:body-bold",
								salePrice ? "text-error-red" : "text-black",
							)}
						>
							{price}
						</p>

						<p className="body-small lg:body line-through text-gray-500">
							{salePrice}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
