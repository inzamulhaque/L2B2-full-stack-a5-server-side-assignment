import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import saleValidationSchema from "./sale.validation";
import { createOrder, getSaleHistory } from "./sale.controller";

const router: Router = Router();

router.post(
  "/order",
  auth(),
  validateRequest(saleValidationSchema),
  createOrder
);

router.get("/sales-history", auth(), getSaleHistory);

const saleRouter = router;
export default saleRouter;
