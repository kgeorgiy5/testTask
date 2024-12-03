import {FC, useId, ChangeEvent} from "react";

interface FormInputProps {
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: "text" | "number";
}

const FormInput:FC<FormInputProps> = ({label, onChange, type="text"}) => {
    const id = useId();
    return(
        <div className="w-full  flex flex-col text-slate-800">
            <label className="" htmlFor={id}>{label}</label>
            <input className="border-b-2 border-b-slate-500 focus:outline-0 w-full" id={id} type={type} onChange={(e) => onChange(e)}/>
        </div>
    )
}

export default FormInput;