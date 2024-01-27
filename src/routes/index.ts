import { Router } from "express";
import { IModuleRouter } from "../app/interface/moduleRouter";
import UserRoutes from "../app/modules/user/user.route";

const router: Router = Router();

const moduleRouters: IModuleRouter[] = [
  {
    path: "/users",
    route: UserRoutes,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
