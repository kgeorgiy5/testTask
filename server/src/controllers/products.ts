import { Request, Response, NextFunction } from 'express';

import * as productServices from "../services/products";

export const getAllProducts = async (req: Request, res: Response, next:NextFunction) => {
    const sortQuery = req.query.sort_by?.toString();

    try{
        const products = await productServices.getAllProducts(sortQuery);
        res.json(products);
    } catch(err){
        next(err);
    }
}

export const getProductDetails = async (req: Request, res: Response, next:NextFunction) => {
    const prodId = req.params.id;

    try{
        const product = await productServices.getProduct(prodId);
        res.json(product);
    } catch(err){
        next(err);
    }
}

export const postProduct = async (req: Request, res: Response, next:NextFunction) => {
    const prodName = req.body.name;
    const prodImageUrl = req.body.imageUrl;
    const prodCount = req.body.count;
    const prodHeight = req.body.height;
    const prodWidth = req.body.width;
    const prodWeight = req.body.weight;

    try{
        const newProduct = await productServices.createProduct(prodName, prodImageUrl, prodCount, prodHeight, prodWidth, prodWeight);
        res.status(201).json(newProduct);
    } catch(err){
        next(err);
    }
}

export const putUpdateProduct = async (req: Request, res: Response, next:NextFunction) => {
    const prodId = req.params.id;
    const prodName = req.body.name;
    const prodImageUrl = req.body.imageUrl;
    const prodCount = req.body.count;
    const prodHeight = req.body.height;
    const prodWidth = req.body.width;
    const prodWeight = req.body.weight;

    try{
        const updatedProduct = await productServices.updateProduct(prodId, prodName, prodImageUrl, prodCount, prodHeight, prodWidth, prodWeight);
        res.json(updatedProduct);
    } catch(err){
        next(err);
    }
}

export const deleteProduct = async (req:Request, res:Response, next:NextFunction) => {
    const prodId = req.params.id;

    try{
        await productServices.deleteProduct(prodId);
        res.status(204).end();
    } catch(err){
        throw err;
    }
}