import { Router } from "express";
import { SalesRepositoryImpl } from "../../infrastructure/sales.repositoryIml";
import { SalesService } from "../services/sales.service";
import { SalesControllers } from "../controllers/sales.controller";


export class SalesRoutes {
  public static get Routes(): Router {
    const router = Router();

    const repository = new SalesRepositoryImpl()
    const service = new SalesService(repository)
    const controller = new SalesControllers(service)

    router.post("/", controller.Create)
    router.get("/", controller.GetAll)
    router.put("/:id", controller.Update)
    router.delete("/:id", controller.Delete)

    return router
  }
}
