interface IProps {
	width?: number;
	height?: number;
	fill?: string;
	className?: string;
}

const MinusIcon = ({
	width = 24,
	height = 24,
	fill = "#050505",
	className = "",
}: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			className={className}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19 12.75H5V11.25H19V12.75Z"
				fill={fill}
			/>
		</svg>
	);
};

export default MinusIcon;
