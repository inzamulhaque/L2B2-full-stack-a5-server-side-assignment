import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import bikeValidationSchema from "./bike.validation";
import { createBike } from "./bike.controller";

const router: Router = Router();

router.post("/", auth(), validateRequest(bikeValidationSchema), createBike);

const bikeRouter = router;
export default bikeRouter;
