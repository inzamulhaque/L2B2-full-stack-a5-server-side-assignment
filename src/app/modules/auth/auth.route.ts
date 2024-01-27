import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import loginUserValidationSchema from "./auth.validation";
import { loginUser } from "./auth.controller";

const router: Router = Router();

router.post("/login", validateRequest(loginUserValidationSchema), loginUser);

const authRouter = router;
export default authRouter;
