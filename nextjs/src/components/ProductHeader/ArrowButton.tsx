import clsx from "clsx";
import LeftArrowIcon from "shared/svgs/LeftArrowIcon";
import RightArrowIcon from "shared/svgs/RIghtArrowIcon";

interface IProps {
	onClick: () => void;
	direction: "left" | "right";
	variant: "primary" | "secondary";
	className?: string;
}

const ArrowButton = ({ onClick, direction, variant, className }: IProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={clsx(
				"w-10 h-10 rounded-full border-2 flex items-center justify-center z-10",
				variant === "primary"
					? "bg-black text-white border-none"
					: "bg-transparent border-black text-black",
				className,
			)}
			aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
		>
			{direction === "left" ? (
				<LeftArrowIcon fill={variant === "primary" ? "#FDFDFD" : "#050505"} />
			) : (
				<RightArrowIcon fill={variant === "primary" ? "#FDFDFD" : "#050505"} />
			)}
		</button>
	);
};

export default ArrowButton;
