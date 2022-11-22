import { createCategories } from "../useCases/categories/createCategories.js";
import { listCategories } from "../useCases/categories/listCategories.js";

export default class CategoriesCtrl {
    static listCategories = listCategories
    static createCategories= createCategories
    
}


