import { Router } from "express";
import { check } from "express-validator";
import { SalesRepositoryImpl } from "../../infrastructure/sales.repositoryIml";
import { SalesService } from "../services/sales.service";
import { SalesControllers } from "../controllers/sales.controller";
import { ShowExpressValidatorErrors } from "../middlewares/showValidatorErrors.middleware";
import { ValidateFields } from "../helpers/validateFields.helper";

export class SalesRoutes {
  public static get Routes(): Router {
    const router = Router();

    const repository = new SalesRepositoryImpl()
    const service = new SalesService(repository)
    const controller = new SalesControllers(service)

    const validator = new ValidateFields()

    router.post("/",[
      check("clientId", "Falta el id del client").notEmpty(),
      ShowExpressValidatorErrors.validFields,
      check("productId", "Falta el id del producto").isString().notEmpty(),
      ShowExpressValidatorErrors.validFields,
      check("amount", "Falta la cantidad del producto").isInt().notEmpty(),
      ShowExpressValidatorErrors.validFields,
      check("total", "Falta el total de la venta").notEmpty(),
      ShowExpressValidatorErrors.validFields,
      check("payment").custom(validator.IsValidPayment),
      ShowExpressValidatorErrors.validFields,
      check("price", "Falta el precio").isFloat().notEmpty(),
      ShowExpressValidatorErrors.validFields
    ],controller.Create)

    router.get("/",controller.GetAll)

    router.put("/:id",[
      check("id", "Falta el id.").notEmpty(),
      ShowExpressValidatorErrors.validFields,
      check("id", "Formato del id invalido.").isMongoId(),
      ShowExpressValidatorErrors.validFields,
      check("id").custom(validator.ExistSale),
      ShowExpressValidatorErrors.validFields
    ],controller.Update)

    router.delete("/:id",[
      check("id", "Falta el id.").notEmpty(),
      ShowExpressValidatorErrors.validFields,
      check("id", "Formato del id invalido.").isMongoId(),
      ShowExpressValidatorErrors.validFields,
      check("id").custom(validator.ExistSale),
      ShowExpressValidatorErrors.validFields
    ],controller.Delete)

    return router
  }
}
