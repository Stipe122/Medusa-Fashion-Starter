import Spinner from "@modules/common/icons/spinner";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	className?: string;
	isLoading?: boolean;
}

const SimpleButton = ({ text, className, isLoading, ...props }: IProps) => {
	return (
		<button
			type="button"
			className={clsx(
				"flex items-center justify-center px-4 py-2 rounded-md bg-black text-white body-small whitespace-nowrap",
				className,
			)}
			{...props}
		>
			{isLoading ? <Spinner /> : text}
		</button>
	);
};

export default SimpleButton;
