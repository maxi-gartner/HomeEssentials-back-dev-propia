import  { Router }  from 'express';
import read from '../controllers/user/read.js'
import read_one from '../controllers/user/read_one.js'
import update from '../controllers/user/update.js'
let router = Router()

router.get('/:email', read_one);
router.post('/:id', update)
router.get('/', read);

export default router