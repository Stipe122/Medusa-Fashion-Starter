import { type Dispatch, type SetStateAction, useState } from "react";
import ChevronDownIcon from "shared/svgs/ChevronDownIcon";

interface IProps {
	selected: string;
	setSelected: Dispatch<SetStateAction<string>>;
	options: string[];
}

const Dropdown = ({ selected, setSelected, options }: IProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="border border-gray-200 rounded-base h-12 px-4 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors"
			>
				<p className="body text-black">{selected}</p>
				<ChevronDownIcon
					className={
						isOpen ? "rotate-180 transition-transform duration-200" : ""
					}
					fill={isOpen ? "#050505" : "#A2A2A2"}
				/>
			</button>
			{isOpen && (
				<div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-base shadow-lg z-20 overflow-hidden">
					{options.map((option) => (
						<button
							key={option}
							type="button"
							onClick={() => {
								setSelected(option);
								setIsOpen(false);
							}}
							className={`w-full px-4 py-3 text-left body hover:bg-gray-50 transition-colors ${
								selected === option
									? "bg-gray-100 text-black font-medium"
									: "text-black"
							}`}
						>
							{option}
						</button>
					))}
				</div>
			)}
		</>
	);
};

export default Dropdown;
