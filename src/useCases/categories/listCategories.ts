import { Request, Response } from "express";
import { Category } from "../../models/Category.js";


export async function listCategories (req: Request, res: Response) {
    const categories = await Category.find()

    res.json(categories)
}
