import useFetchData from "../../hooks/useFetchData.ts";
import {IProductDetails} from "../../types.ts";
import {useParams} from "react-router-dom";
import {useState} from "react";
import EditModal from "./EditModal.tsx";
import Button from "../Button.tsx";
import CommentSection from "./CommentSection.tsx";

const initialData:IProductDetails = {
    _id:"",
    name:"",
    imageUrl:"",
    count: 0,
    size:{height:0, width:0},
    weight: "",
    comments:[]
}

const ProductDetails = () => {
    const productId = useParams().id;
    const [productDetails, fetchData] = useFetchData<IProductDetails>(`prod/${productId}`, initialData);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleEditSuccess = () => {
        setShowEditModal(false);
        fetchData();
    }

    return(
        <>
            <main className="w-[60%] mx-auto">
                <h2 className="font-bold p-2 text-center text-[2rem]">{productDetails.name}</h2>
                <img alt={productDetails.name} src={productDetails.imageUrl}
                     className="rounded aspect-square m-auto object-cover w-[20rem]"/>
                <div className="flex flex-row justify-around">
                    <p>Count: {productDetails.count}</p>
                    <p>Size: {`${productDetails.size.width}x${productDetails.size.height}`}</p>
                    <p>Weight: {productDetails.weight}</p>
                </div>
                <Button onClick={() => setShowEditModal(true)}>Edit</Button>
                <CommentSection comments={productDetails.comments} onChange={() => fetchData()}/>
            </main>
            {showEditModal && (
                <EditModal onSuccess={handleEditSuccess} prodId={productId} onCancel={() => setShowEditModal(false)}/>
            )}
        </>
    )
};

export default ProductDetails;