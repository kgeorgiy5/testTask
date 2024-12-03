import FormInput from "./components/FormInput.tsx";
import Button from "./components/Button.tsx";
import { IProductInput} from "./types.ts";
import {FC, FormEvent, useState, MouseEvent} from "react";

interface ProductFormProps {
    onCancel: () => void;
    onSubmit: (product: IProductInput) => void;
    label:string;
}

const ProductForm:FC<ProductFormProps> = ({onCancel, onSubmit, label}) =>  {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [count, setCount] = useState(0);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [weight, setWeight] = useState("")

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(!name || !imageUrl || !count || !height || !width || !weight){
            return alert("All form fields must be filled");
        }

        onSubmit({name, imageUrl, count, height, width, weight})
    }

    const handleCancel = (e:MouseEvent) => {
        e.stopPropagation();
        onCancel();
    }

    return (

        <form onSubmit={(e) => handleSubmit(e)}
              className="gap-2 fixed p-2 inset-1 m-auto w-[60%] flex flex-col bg-white z-40 h-fit">
            <h2 className="text-[1.4rem] text-slate-800 text-center">{label}</h2>
            <FormInput label="Name" onChange={(e) => setName(e.target.value)}/>
            <FormInput label="Image" onChange={(e) => setImageUrl(e.target.value)}/>
            <FormInput label="Count" type="number" onChange={(e) => setCount(+e.target.value)}/>
            <FormInput label="Height" type="number" onChange={(e) => setHeight(+e.target.value)}/>
            <FormInput label="Width" type="number" onChange={(e) => setWidth(+e.target.value)}/>
            <FormInput label="Weight" onChange={(e) => setWeight(e.target.value)}/>
            <div className="gap-1 flex flex-row justify-around">
                <Button onClick={(e) => e.stopPropagation()} type="submit">Submit</Button>
                <Button onClick={(e) => handleCancel(e)}>Cancel</Button>
            </div>
        </form>
    )
}

export default ProductForm;