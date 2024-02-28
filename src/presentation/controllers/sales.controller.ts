import { Request, Response } from "express";
import { ISaleService } from "../services/interfaces/sales.services.interface";
import { CustomHandleError } from "../helpers/handleHttpErr";


export class SalesControllers {
  private readonly _service: ISaleService 

  constructor(service: ISaleService) {
    this._service = service
  }

  public Create = (req: Request, res: Response) => {
    this._service.Create(req.body)
      .then(sale => res.status(202).json(sale))
      .catch(err => CustomHandleError.HandleError(err, res))
  }

  public GetAll = (_req: Request, res: Response) => {
    this._service.GetAll()
      .then(sales => res.json(sales))
      .catch(err => CustomHandleError.HandleError(err, res))
  }

  public Update = (req: Request, res: Response) => {
    this._service.Update({...req.body, id: req.params.id})
      .then(sales => res.json(sales))
      .catch(err => CustomHandleError.HandleError(err, res))
  }

  public Delete = (req: Request, res: Response) => {
    const id = req.params.id

    this._service.Delete(id)
      .then(sales => res.json(sales))
      .catch(err => CustomHandleError.HandleError(err, res))
  }
}
