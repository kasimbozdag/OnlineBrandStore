import express from "express";
import { checkoutController } from "../controllers/checkoutController";
import { getOrderController } from "../controllers/getOrderController";
import { getProductController } from "../controllers/getProductController";

const router = express.Router();
router.post('/checkout', checkoutController);
router.get('/order/:id', getOrderController);
router.get('/products', getProductController);

export default router;