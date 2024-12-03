import Comment from "../models/Comment";
import Product from "../models/Product";
import {AppError} from "../utils/AppError";

export const addComment = async (description: string|undefined, prodId: string|undefined) => {
    if(!prodId || !description){
        const err = new AppError("Product ID or comment is missing", 400);
        throw err;
    }

    try{
        const product = await Product.findById(prodId);

        if(!product){
            const err = new AppError("Product not found", 404);
            throw err;
        }

        const comment = await new Comment({
            description: description,
            productId: prodId,
            date: new Date().toLocaleString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            })
        }).save();

        product.comments.push(comment._id);

        await product.save();

        return comment;
    } catch(err) {
        throw err;
    }
}

export const deleteComment = async (commentId:string|undefined) => {
    if(!commentId){
        const err = new AppError("Comment ID is required", 400);
        throw err;
    }

    try{
        await Comment.findByIdAndDelete(commentId);
    } catch(err){
        throw err;
    }
}