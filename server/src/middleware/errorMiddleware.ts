import {Request, Response, NextFunction} from "express";
import {AppError} from "../utils/AppError";

const errorMiddleware = (err: AppError|Error, req:Request, res:Response, next: NextFunction) => {
    if(err instanceof AppError) {
        res.status(err.status).send({message: err.message});
    } else {
        res.status(500).send({message: err.message});
    }
};

export default errorMiddleware;