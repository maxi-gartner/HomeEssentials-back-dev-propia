import  { Router }  from 'express';
import saved from '../controllers/Curriculums/saved.js';
let router = Router()

router.post('/', saved);
  
export default router