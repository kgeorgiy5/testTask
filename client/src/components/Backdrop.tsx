import {FC, MouseEvent} from "react";

interface IBackdropProps {
    onClick: () => void;
}

const Backdrop:FC<IBackdropProps> = ({ onClick }) => {
    const handleClick = (e:MouseEvent) => {
        e.stopPropagation()
        onClick();
    }

    return (
        <>
            <div
                className="fixed w-screen h-screen top-0 left-0 bg-black opacity-70 z-30"
                onClick={(e) => handleClick(e)}>
            </div>
        </>
    )
};

export default Backdrop;