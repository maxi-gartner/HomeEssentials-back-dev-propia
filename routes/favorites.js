import  { Router }  from 'express';
import create from '../controllers/favorites/create.js';
import read from '../controllers/favorites/read.js';
import removeFromFavorites from '../controllers/favorites/delete.js';
import removeAllFavorites from '../controllers/favorites/deleteAll.js';
let router = Router()

router.post('/', create);
router.get('/', read);
router.delete('/', removeFromFavorites);
router.delete('/deleteAll', removeAllFavorites);

export default router