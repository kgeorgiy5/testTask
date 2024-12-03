import Product from "../models/Product";
import Comment from "../models/Comment";
import {AppError} from "../utils/AppError";

export const getAllProducts = async (sortQuery:string|undefined) => {
    const sortParam = sortQuery || "name";

    try{
        const products = await Product.find({}).sort(sortParam);
        return products;

    } catch(err){
        throw err;
    }
}

export const getProduct = async (prodId:string|undefined) => {
    if(!prodId){
        const err = new AppError("Product ID is required", 400);
        throw err;
    }

    try{
        const product = await Product.findById(prodId).populate("comments");

        if(!product){
            const err = new AppError("Product not found", 404);
            throw err;
        }

        return product;

    } catch(err) {
        throw err;
    }
}

export const createProduct = async(prodName:string, prodImageUrl:string, prodCount:number, prodHeight:number, prodWidth:number, prodWeight:string) => {
    if(!prodName || !prodImageUrl || !prodCount || !prodHeight || !prodWidth || !prodWeight){
        const err = new AppError("Invalid product data", 400)
        throw err;
    }

    try{
        const newProduct = await new Product({
            name: prodName,
            imageUrl: prodImageUrl,
            count: prodCount,
            size:{
                height:prodHeight,
                width:prodWidth
            },
            weight:prodWeight,
            comments: []
        }).save();

        return newProduct;
    } catch(err) {
        throw err;
    }
}

export const updateProduct = async(prodId:string, name: string, imageUrl:string, count:number, height:number, width:number, weight:string) => {
    if(!prodId || !name || !imageUrl || !count || !height || !width || !weight){
        const err = new AppError("Invalid product data", 400)
        throw err;
    }

    try{
        const product = await Product.findById(prodId);

        if(!product){
            const err = new AppError("Product not found", 404);
            throw err;
        }

        product.name = name;
        product.imageUrl = imageUrl;
        product.count = count;
        product.size = {
            height:height,
            width:width
        }
        product.weight = weight;

        return await product.save();
    } catch(err) {
        throw err;
    }
}

export const deleteProduct = async(prodId:string|undefined) =>{
    if(!prodId){
        const err = new AppError("Product ID is required", 400);
        throw err;
    }

    try{
        await Product.findByIdAndDelete(prodId);
        await Comment.deleteMany({productId: prodId});
    } catch(err) {
        throw err;
    }
}