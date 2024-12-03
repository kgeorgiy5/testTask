import {IComment} from "../../types.ts";
import {FC} from "react";
import Button from "../Button.tsx";
import axios from "axios";
import getApiEndpoint from "../../utils/getApiEndpoint.ts";

interface CommentProps {
    comment: IComment;
    onDelete: () => void;
}

const Comment:FC<CommentProps> = ({comment, onDelete}) => {
    const deleteCommentHandler = () => {
        const endpoint = getApiEndpoint(`comment/${comment._id}`);
        axios.delete(endpoint).then(() => {
            onDelete();
        }).catch((err) => console.log(err));
    }

    return(
        <li className={"relative flex flex-col"}>
                <p>{comment.description}</p>
                <p>{comment.date}</p>
            <Button onClick={deleteCommentHandler} className={"absolute w-fit right-0 top-0 p-2"}>Delete</Button>
        </li>
    )
}

export default Comment;