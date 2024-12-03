import {IProduct} from "../../types.ts";
import {FC, MouseEvent, useState} from "react";
import axios from "axios";
import getApiEndpoint from "../../utils/getApiEndpoint.ts";
import Button from "../Button.tsx";
import ConfirmModal from "../ConfirmModal.tsx";
import {useNavigate} from "react-router-dom";

interface ProductProps{
    onDelete: () => void;
    product: IProduct;
}

const Product:FC<ProductProps> = ({product, onDelete}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const navigate = useNavigate();

    const handleDeleteButton = (e:MouseEvent) => {
        e.stopPropagation()
        setShowConfirm(true);
    }

    const handleConfirm = () => {
        const endpoint = getApiEndpoint(`prod/${product._id}`);
        axios.delete(endpoint).then(() => {
            onDelete();
        }).catch((error) => console.log(error));
    }

    const handleProductClick = () => {
        navigate(product._id);
    }

    return(
        <>
            <li onClick={handleProductClick} className="w-full rounded bg-slate-200 flex flex-col gap-1 p-2 hover:bg-slate-300">
                <h2 className="font-bold text-center">{product.name}</h2>
                <img src={product.imageUrl} alt={product.name} className="object-cover aspect-square w-full"/>
                <div className="flex flex-row justify-around">
                    <p>Count: {product.count}</p>
                    <p>Size: {product.size.width}x{product.size.height}</p>
                    <p>Weight: {product.weight}</p>
                </div>
                <Button onClick={(e) => handleDeleteButton(e)}>Delete</Button>
            </li>
            {showConfirm && <ConfirmModal onConfirm={handleConfirm} onCancel={() => setShowConfirm(false)}/>}
        </>
    )
}

export default Product;