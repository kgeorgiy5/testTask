import {FC} from "react";
import Backdrop from "../Backdrop.tsx";
import getApiEndpoint from "../../utils/getApiEndpoint.ts";
import axios from "axios";
import ProductForm from "../../ProductForm.tsx";
import {IProductInput} from "../../types.ts";

interface EditProps {
    prodId: string|undefined;
    onCancel: () => void;
    onSuccess: () => void;
}

const EditModal:FC<EditProps> = ({prodId, onCancel, onSuccess}) => {

    const handleSubmit = (product:IProductInput) => {
        const endpoint = getApiEndpoint(`prod/${prodId}`)
        axios.put(endpoint, product).then(() => onSuccess()).catch(err => {
            console.log(err);
        })
    }

    return(
        <>
            <ProductForm onCancel={onCancel} onSubmit={handleSubmit} label="Edit product"/>
            <Backdrop onClick={onCancel}/>
        </>
    )
}

export default EditModal;