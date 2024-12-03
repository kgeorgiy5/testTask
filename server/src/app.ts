import express, {NextFunction, Request, Response} from "express";
import cors from "cors";
import errorMiddleware from "./middleware/errorMiddleware";
import {AppError} from "./utils/AppError";
import * as mongoose from "mongoose";
import {config} from "dotenv-safe";
import productRoutes from "./routes/products";
import commentRoutes from "./routes/comments";

config({example:".env", path:".env"})
const MONGODB_URI = process.env.MONGODB_URI as string;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/prod", productRoutes);
app.use("/comment", commentRoutes);

app.use("/", (req:Request, res:Response, next:NextFunction) => {
    const err = new AppError("Not found", 404);
    next(err);
})

app.use(errorMiddleware);

mongoose.connect(MONGODB_URI).then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
})