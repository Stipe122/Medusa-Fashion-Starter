import { getCurrencySymbol } from "@lib/util/money";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
	index: number;
	image: string;
	handle: string;
	name: string;
	collectionName: string;
	currencyCode: string;
	price: string;
	salePrice?: string;
	isOnSale?: boolean;
}

const ProductCard = ({
	index,
	image,
	handle,
	name,
	collectionName,
	currencyCode,
	price,
	salePrice,
	isOnSale,
}: ProductCardProps) => {
	return (
		<Link
			href={`/products/${handle}`}
			className={clsx(
				"flex flex-col gap-4 lg:gap-6 w-full cursor-pointer",
				index === 2 && "hidden lg:block",
			)}
		>
			<Image
				src={image}
				alt={name}
				width={300}
				height={300}
				className="relative w-full h-[286px] object-cover overflow-hidden"
			/>

			<div className="flex flex-col gap-1 relative">
				<div className="flex flex-col lg:flex-row justify-between items-start">
					<div className="flex flex-col gap-1">
						<p className="body-small lg:body text-black">{name}</p>
						<p className="hidden lg:block body-small text-gray-500">
							{collectionName}
						</p>
					</div>

					<div className="flex flex-row justify-between w-full lg:flex-col lg:w-fit lg:items-end">
						<p
							className={clsx(
								"body-small-bold lg:body-bold",
								isOnSale ? "text-error-red" : "text-black",
							)}
						>
							{`${getCurrencySymbol(currencyCode)}${price}`}
						</p>

						<p className="body-small lg:body line-through text-gray-500">
							{isOnSale ? `${getCurrencySymbol(currencyCode)}${salePrice}` : ""}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
