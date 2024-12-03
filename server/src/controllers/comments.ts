import * as commentServices from "../services/comments";
import {Request, Response, NextFunction} from "express";

export const postAddComment = async (req:Request, res:Response, next:NextFunction) => {
    const prodId = req.body.prodId;
    const description = req.body.description;

    try{
        const newComment = await commentServices.addComment(description, prodId);
        res.status(201).json(newComment);
    } catch(err){
        next(err);
    }
}

export const deleteComment = async (req:Request, res:Response, next:NextFunction) => {
    const commentId = req.params.id;

    try{
        await commentServices.deleteComment(commentId);
        res.status(204).end();
    } catch(err){
        next(err);
    }
}