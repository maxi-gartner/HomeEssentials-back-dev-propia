import  { Router }  from 'express';
import read from '../controllers/orders/getOrders.js'
import update from '../controllers/orders/UpdateOrderStatus.js'
let router = Router()


router.get('/', read);
router.post('/update', update);
export default router