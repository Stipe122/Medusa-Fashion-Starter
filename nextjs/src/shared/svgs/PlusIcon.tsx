interface IProps {
	width?: number;
	height?: number;
	fill?: string;
	className?: string;
}

const PlusIcon = ({
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
				d="M11.25 18.8132V11.8132V4.81323H12.75V18.8132H11.25Z"
				fill={fill}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19 12.5632H5V11.0632H19V12.5632Z"
				fill={fill}
			/>
		</svg>
	);
};

export default PlusIcon;
