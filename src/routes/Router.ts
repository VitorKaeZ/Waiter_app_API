import { Router } from 'express'
import CategoriesCtrl from '../controllers/CategoriesController.js'
import OrdersCtrl from '../controllers/OrdersController.js'
import ProductsCtrl from '../controllers/ProductsController.js'
import upload from '../middlewares/Multer.js'

const router = Router()

// List categories
router.get('/categories', CategoriesCtrl.listCategories )
//Create Category
router.post('/categories', CategoriesCtrl.createCategory)
// List products
router.get('/products', ProductsCtrl.listProducts)
// Create product
router.post('/products', upload.single('image'), ProductsCtrl.createProducts)
// Get products by category
router.get('/categories/:categoryId/products', CategoriesCtrl.listProductsByCategories )
// List orders
router.get('/orders', OrdersCtrl.listOrders)
// Create order
router.post('/orders', OrdersCtrl.createOrder)
// Change order status
router.patch('/orders/:orderId', OrdersCtrl.changeOrderStatus)
// Delete/cancel order
router.delete('/orders/:orderId', OrdersCtrl.cancelOrder)

export { router }