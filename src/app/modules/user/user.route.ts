import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import userValidationSchema from "./user.validation";
import { createUser } from "./user.controller";

const router: Router = Router();

router.post("/", validateRequest(userValidationSchema), createUser);

const UserRoutes = router;
export default UserRoutes;
