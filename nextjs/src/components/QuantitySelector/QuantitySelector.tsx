import type { Dispatch, SetStateAction } from "react";
import MinusIcon from "shared/svgs/MinusIcon";
import PlusIcon from "shared/svgs/PlusIcon";

interface IProps {
	quantity: number;
	setQuantity: Dispatch<SetStateAction<number>>;
}

const QuantitySelector = ({ quantity, setQuantity }: IProps) => {
	const incrementQuantity = () => {
		setQuantity((prev) => prev + 1);
	};

	const decrementQuantity = () => {
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
	};

	return (
		<div className="border w-full sm:w-fit border-gray-200 rounded-base h-12 px-6 py-2 flex items-center justify-center gap-4">
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
	);
};

export default QuantitySelector;
