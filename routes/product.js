import  { Router }  from 'express';
import read from '../controllers/products/read.js'
import productsPaginationHome from "../controllers/products/best_sellers.js"
import  searchProducts  from '../controllers/products/search_products.js';

import ordenPrice from "../controllers/products/filter_by_prices.js"
import getOne from '../controllers/products/get_one.js';

import getProductsByCategory from '../controllers/products/getproductsbycategory.js';

let router = Router()


router.get('/', read);
router.get('/sixcards', productsPaginationHome)
router.get('/search',searchProducts)

router.get('/order',ordenPrice)
router.get('/:id', getOne)

router.get('/categories/:categoryId',getProductsByCategory)

export default router