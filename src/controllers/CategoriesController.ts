import { createCategory } from "../useCases/categories/createCategory.js";
import { listCategories } from "../useCases/categories/listCategories.js";
import { listProductsByCategories } from "../useCases/categories/listProductsByCategories.js";

export default class CategoriesCtrl {
    static listCategories = listCategories
    static createCategory= createCategory
    static listProductsByCategories = listProductsByCategories
    
}


