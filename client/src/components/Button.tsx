import {FC, ReactNode, MouseEvent} from "react";

interface ButtonProps {
    onClick?: (e:MouseEvent) => void;
    children: ReactNode;
    className?: string;
    highlighted?: boolean;
    type?: "button" | "submit";
}

const Button:FC<ButtonProps> = ({children, className, onClick, highlighted, type="button"}) => {
    return(
        <button className={`bg-slate-400 text-[1.2rem] text-slate-800 rounded hover:text-slate-100 w-full hover:bg-slate-500 p-4 ${className} ${highlighted ? "underline" : ""}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
};

export default Button;