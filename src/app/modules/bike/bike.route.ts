import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import bikeValidationSchema, {
  updateBikeValidationSchema,
} from "./bike.validation";
import {
  createBike,
  getAllBikes,
  removeBike,
  updateBike,
} from "./bike.controller";

const router: Router = Router();

router.get("/", auth(), getAllBikes);

router.post("/", auth(), validateRequest(bikeValidationSchema), createBike);

router.delete("/remove-bike/:id", auth(), removeBike);

router.patch(
  "/update-bike/:id",
  auth(),
  validateRequest(updateBikeValidationSchema),
  updateBike
);

const bikeRouter = router;
export default bikeRouter;
