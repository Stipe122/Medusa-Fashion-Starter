import { ButtonHTMLAttributes } from "react";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const SimpleButton = ({ text,...props }: IProps) => {
    return (
        <button
            type="button"
            className="h-10 px-4 rounded-md bg-black text-white text-sm font-medium whitespace-nowrap"
            {...props}
        >
            {text}
        </button>
    )
}
