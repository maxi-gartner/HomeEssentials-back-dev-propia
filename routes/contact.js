import  { Router }  from 'express';
import saved from '../controllers/contact/saved.js';
import getContacts from "../controllers/contact/read.js"
let router = Router()

router.get('/get', getContacts)
router.post('/', saved);

export default router