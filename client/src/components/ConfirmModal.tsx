import Backdrop from "./Backdrop.tsx";
import {FC} from "react";
import Button from "./Button.tsx";

interface ConfirmModalProps {
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmModal:FC<ConfirmModalProps> = ({onConfirm, onCancel}) => {
    return(
        <>
            <div className={"flex flex-col gap-4 p-1 inset-1 rounded z-40 m-auto w-[50%] h-fit bg-white fixed"}>
                <h1 className={"text-4xl text-center"}>Are you sure?</h1>
                <div className={"flex flex-row gap-2"}>
                    <Button onClick={onConfirm}>Yes</Button>
                    <Button onClick={onCancel}>Cancel</Button>
                </div>
            </div>
            <Backdrop onClick={onCancel}/>
        </>
    )
};

export default ConfirmModal;