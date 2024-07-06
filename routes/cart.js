import  { Router }  from 'express';
import create from '../controllers/carrito/createAndUpdate.js';
import read from '../controllers/carrito/read.js';
import subtractAndDeleteCart from '../controllers/carrito/subtractAndDelete.js'
import deleteOne from '../controllers/carrito/deleteOne.js'
import confirmPurchase from '../controllers/carrito/confirmcart.js';

let router = Router()

router.post('/create', create); // Agregar un producto al carrito
router.get('/:userEmail', read); // Ver el contenido del carrito
router.delete('/', deleteOne); // Eliminar un producto del carrito
router.put('/subtract', subtractAndDeleteCart); // restar cantidad si es 0 se elimina
router.post('/confirm',confirmPurchase)
export default router