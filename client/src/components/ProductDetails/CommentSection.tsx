import {IComment} from "../../types.ts";
import  {FC, FormEvent, useState} from "react";
import {useParams} from "react-router-dom";
import getApiEndpoint from "../../utils/getApiEndpoint.ts";
import axios from "axios";
import FormInput from "../FormInput.tsx";
import Button from "../Button.tsx";
import Comment from "./Comment.tsx";

interface CommentSectionProps {
    comments: IComment[];
    onChange: () => void;
}

const CommentSection:FC<CommentSectionProps> = ({comments, onChange}) => {
    const prodId = useParams().id;
    const [commentDescription, setCommentDescription] = useState<string>("");

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!commentDescription){
            return alert("No comment description provided");
        }

        const endpoint = getApiEndpoint("comment");
        axios.post(endpoint, {prodId, description:commentDescription}).then(() => {
            onChange();
        }).catch(err => console.log(err));
        }

    return(
        <div className={"flex flex-col gap-6"}>
            <form className={"flex flex-col w-full gap-4"} onSubmit={(e) => handleSubmit(e)}>
                <FormInput onChange={(e) => setCommentDescription(e.target.value)} label={"Comment"}/>
                <Button type="submit">Add comment</Button>
            </form>
            <ul className={"flex flex-col gap-4"}>
                {comments ? (
                    <>
                        {comments.map((comment: IComment) => (
                            <Comment onDelete={onChange} key={comment._id} comment={comment}/>
                        ))}
                    </>
                ) : null}
            </ul>
        </div>
    )
}

export default CommentSection;