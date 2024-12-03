import {FC} from "react";
import getApiEndpoint from "../../utils/getApiEndpoint.ts";
import axios from "axios";
import Backdrop from "../Backdrop.tsx";
import {IProductInput} from "../../types.ts";
import ProductForm from "../../ProductForm.tsx";

interface AddProductModalProps {
    onCancel: () => void;
    onSubmit: () => void;
}

const AddProductModal:FC<AddProductModalProps> = ({onCancel, onSubmit}) => {

    const handleSubmit = (productInput:IProductInput) => {
        console.log(productInput);
        const endpoint = getApiEndpoint(`prod`);
        axios.post(endpoint, productInput).then(() => {
            onSubmit();
        }).catch(err => console.log(err));
    }

    return(
        <>
            <ProductForm label="Add Product" onCancel={onCancel} onSubmit={handleSubmit}/>
            <Backdrop onClick={onCancel}/>
        </>
    )
};

export default AddProductModal;