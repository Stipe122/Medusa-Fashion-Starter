interface IProps {
	name: string;
	value: string;
	selected: boolean;
	onClick: () => void;
}

const ColorBox = ({ name, value, selected, onClick }: IProps) => {
	return (
		<div className="flex flex-col items-start">
			<button
				type="button"
				key={name}
				onClick={onClick}
				className="w-8 h-8 rounded-none transition-all mb-2"
				style={{ backgroundColor: value }}
				aria-label={`Select ${name}`}
			/>
			{selected && <div className="h-[1px] bg-black w-8" />}
		</div>
	);
};

export default ColorBox;
