import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export class ShowExpressValidatorErrors {
   
   // To show errors on routes with the midd check
   public static validFields = (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      
      if(!errors.isEmpty()) {
	 return res.status(400).json(errors.mapped())
      }

      next()
   }
}
