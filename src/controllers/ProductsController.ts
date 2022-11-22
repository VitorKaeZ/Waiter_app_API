import { listProducts } from "../useCases/products/listProducts.js";
import { createProducts } from "../useCases/products/createProducts.js";

export default class ProductsCtrl {
    static listProducts = listProducts
    static createProducts = createProducts
}