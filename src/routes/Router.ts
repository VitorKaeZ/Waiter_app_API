import { Router } from 'express'
import CategoriesCtrl from '../controllers/CategoriesController.js'
import ProductsCtrl from '../controllers/ProductsController.js'
import upload from '../middlewares/Multer.js'

const router = Router()

// List categories
router.get('/categories', CategoriesCtrl.listCategories )
//Create Category
router.post('/categories', CategoriesCtrl.createCategories)
// List products
router.get('/products', ProductsCtrl.listProducts)
// Create product
router.post('/products', upload.single('image'), ProductsCtrl.createProducts)
// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
    res.status(200).json({ msg: "Bem vindo a nossa API!" })
})
// List orders
router.get('/orders', (req, res) => {
    res.status(200).json({ msg: "Bem vindo a nossa API!" })
})
// Create order
router.post('/orders', (req, res) => {
    res.status(200).json({ msg: "Bem vindo a nossa API!" })
})
// Change order status
router.patch('/orders/:orderId', (req, res) => {
    res.status(200).json({ msg: "Bem vindo a nossa API!" })
})
// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
    res.status(200).json({ msg: "Bem vindo a nossa API!" })
})

export { router }