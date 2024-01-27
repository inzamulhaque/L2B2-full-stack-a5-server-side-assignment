import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import saleValidationSchema from "./sale.validation";
import { createOrder } from "./sale.controller";

const router: Router = Router();

router.post(
  "/order",
  auth(),
  validateRequest(saleValidationSchema),
  createOrder
);

const saleRouter = router;
export default saleRouter;
