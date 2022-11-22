import { Request, Response } from "express";
import { Product } from "../../models/Product.js";



export async function createProducts (req: Request, res: Response) {
    try {
        
        const { name, description, price, ingredients, category } = req.body
        const imagePath = req.file?.filename

        console.log(JSON.parse(ingredients))
        const product = await Product.create({ 
            name, 
            description, 
            price: Number(price), 
            ingredients: JSON.parse(ingredients), 
            category, 
            imagePath 
        })

        res.status(201).json(product)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}
