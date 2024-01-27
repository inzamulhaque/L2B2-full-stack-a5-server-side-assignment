import { Router } from "express";

export interface IModuleRouter {
  path: string;
  route: Router;
}
