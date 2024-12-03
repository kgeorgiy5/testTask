import {useDispatch, useSelector} from "react-redux";
import Button from "../Button.tsx";
import {useState} from "react";
import {RootState} from "../../store.ts";
import {setField, toggleOrder} from "../../reducers/sortReducer.ts";

const SortDropdown = () => {
    const dispatch = useDispatch();
    const order = useSelector((state:RootState) => state.sort.order);
    const field = useSelector((state:RootState) => state.sort.field);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleOrder = () => {
        dispatch(toggleOrder());
    }

    const handleField = (field: string) => {
        dispatch(setField({field:field}));
        setShowDropdown(false);
    }

    const handleToggleDropdown = () => {
        setShowDropdown(state => !state);
    }

    return(
        <div className="w-full relative">
            <div className="flex flex-row gap-2">
                <Button onClick={handleToggleDropdown}>Sort by: {field.toUpperCase().slice(0,1) + field.slice(1)}</Button>
                <Button onClick={handleOrder}>Order: {order === "-" ? "Descending" : "Ascending"}</Button>
            </div>
            {showDropdown && (
                <div className="w-[50%] shadow-2xl bg-zinc-100 absolute flex flex-col bg-white p-2 gap-2">
                    <Button highlighted={field === "name"} onClick={() => handleField("name")}>Name</Button>
                    <Button highlighted={field === "count"} onClick={() => handleField("count")}>Count</Button>
                </div>
            )}
        </div>
    )
}

export default SortDropdown;