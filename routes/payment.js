import { Router } from 'express';
import donation from '../controllers/donations/donation.js'
import payment from '../controllers/payment/payment.js';

let router = Router();

router.post('/', payment)

export default router