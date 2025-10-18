import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	className?: string;
}

export const SimpleButton = ({ text, className, ...props }: IProps) => {
	return (
		<button
			type="button"
			className={clsx(
				"h-10 px-4 rounded-md bg-black text-white text-sm font-medium whitespace-nowrap",
				className,
			)}
			{...props}
		>
			{text}
		</button>
	);
};
