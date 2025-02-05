import express from 'express';

import { userSignUp } from '../controller/user-controller.js';
import { userLogIn } from '../controller/user-controller.js';
import {getProducts, getProductById} from '../controller/product-controller.js'; 
import { addPaymentGateway, paymentResponse} from '../controller/payment-controller.js';

const router =  express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;
