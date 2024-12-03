import FormInput from "../FormInput.tsx";
import {MouseEvent, useState, FormEvent, FC} from "react";
import Button from "../Button.tsx";
import getApiEndpoint from "../../utils/getApiEndpoint.ts";
import axios from "axios";
import Backdrop from "../Backdrop.tsx";

interface AddProductModalProps {
    onCancel: () => void;
    onSubmit: () => void;
}

const AddProductModal:FC<AddProductModalProps> = ({onCancel, onSubmit}) => {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [count, setCount] = useState(0);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [weight, setWeight] = useState("")

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(!name || !imageUrl || !count || !height || !width || !weight){
            return alert("All input fields must be filled");
        }
        const endpoint = getApiEndpoint(`prod`);
        axios.post(endpoint, {name, imageUrl, count, height, width, weight}).then(() => {
            onSubmit();
        }).catch(err => console.log(err));
    }

    const handleCancel = (e:MouseEvent) => {
        e.stopPropagation();
        onCancel();
    }

    return(
        <>
            <form onSubmit={(e) => handleSubmit(e)} className="gap-2 fixed p-2 inset-1 m-auto w-[60%] flex flex-col bg-white z-40 h-fit">
                <h2 className="text-[1.4rem] text-slate-800 text-center">Add Product</h2>
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
            <Backdrop onClick={onCancel}/>
        </>
    )
};

export default AddProductModal;