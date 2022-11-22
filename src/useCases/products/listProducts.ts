import { Request, Response } from "express";
import { Product } from "../../models/Product.js";


export async function listProducts (req: Request, res: Response) {
    try {
        const products = await Product.find()

        res.json(products)
    } catch (error) {
        console.error(error)
    }
}
