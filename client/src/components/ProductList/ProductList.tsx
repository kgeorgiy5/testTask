import SortDropdown from "./SortDropdown.tsx";
import useFetchData from "../../hooks/useFetchData.ts";
import {IProduct} from "../../types.ts";
import Product from "./Product.tsx";
import {useState} from "react";
import AddProductModal from "./AddProductModal.tsx";
import Button from "../Button.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store.ts";

const ProductList = () => {
    const sort = useSelector((state:RootState) => state.sort);
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [products, fetchData] = useFetchData<IProduct[]>(`prod?sort_by=${sort.order + sort.field}`, []);

    const handleAddProduct = () => {
        fetchData();
        setShowAddProductModal(false);
    }

    return(
        <>
            <main className="mx-auto w-[80%] bg-zinc-100 pt-2 px-1">
                <div className="gap-2 flex flex-row">
                    <Button onClick={() => setShowAddProductModal(true)}>Add new product</Button>
                    <SortDropdown/>
                </div>
                <ul className="p-2 grid gap-1 grid-cols-3 justify-center">
                    {products.map((product: IProduct) => (
                        <Product product={product} onDelete={fetchData}/>
                    ))}
                </ul>
            </main>
            {showAddProductModal && (
                <AddProductModal
                    onSubmit={handleAddProduct}
                    onCancel={() => setShowAddProductModal(false)}/>
            )}
        </>
    )
};

export default ProductList;