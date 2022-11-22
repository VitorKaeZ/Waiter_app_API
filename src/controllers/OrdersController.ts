import { cancelOrder } from "../useCases/orders/cancelOrder.js"
import { changeOrderStatus } from "../useCases/orders/changeOrderStatus.js"
import { createOrder } from "../useCases/orders/createOrder.js"
import { listOrders } from "../useCases/orders/listOrders.js"


export default class OrdersCtrl {
    static listOrders = listOrders
    static createOrder = createOrder
    static changeOrderStatus = changeOrderStatus
    static cancelOrder = cancelOrder
}