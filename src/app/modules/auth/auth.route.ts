import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import loginUserValidationSchema, {
  refreshTokenValidationSchema,
} from "./auth.validation";
import { loginUser, refreshToken } from "./auth.controller";

const router: Router = Router();

router.post("/login", validateRequest(loginUserValidationSchema), loginUser);

router.post(
  "/refresh-token",
  validateRequest(refreshTokenValidationSchema),
  refreshToken
);

const authRouter = router;
export default authRouter;
