import { Request, Response } from "express";
import { Product } from "../../models/Product.js";


export async function listProducts (req: Request, res: Response) {
    const categories = await Product.find()

    res.json(categories)
}
