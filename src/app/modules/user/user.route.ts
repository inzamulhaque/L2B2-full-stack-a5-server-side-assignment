import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import userValidationSchema from "./user.validation";

const router: Router = Router();

router.post("/create-faculty", validateRequest(userValidationSchema));

const UserRoutes = router;
export default UserRoutes;
