import { Router } from "express";
import { IModuleRouter } from "../app/interface/moduleRouter";
import UserRoutes from "../app/modules/user/user.route";
import bikeRouter from "../app/modules/bike/bike.route";
import authRouter from "../app/modules/auth/auth.route";
import saleRouter from "../app/modules/sale/sale.route";

const router: Router = Router();

const moduleRouters: IModuleRouter[] = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/bikes",
    route: bikeRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/sales",
    route: saleRouter,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
