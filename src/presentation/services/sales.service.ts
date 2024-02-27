import { ISaleRepository } from "../../infrastructure/sales.repository";
import { ICreateSale, ISale, IUpdateSale } from "../../interfaces/sale.interface";
import { CustomHttpErrors } from "../helpers/customHttpHandleErr.helper";
import { ISaleService } from "./interfaces/sales.services.interface";



export class SalesService implements ISaleService {
  private readonly _repository: ISaleRepository
  
  constructor(repository: ISaleRepository) {
    this._repository = repository
  }

  public async Create(createDto: ICreateSale): Promise<ISale> {
    try {
      const sale = await this._repository.Create(createDto)
      return sale
    } catch (err) {
      throw CustomHttpErrors.InternalError("Error en el servidor.")
    }
  }

  public async GetAll(): Promise<ISale[]> {
    try {
      const sales = await this._repository.GetAll()
      return sales
    } catch (err) {
      throw CustomHttpErrors.InternalError("Error en el servidor.")
    }
  }

  public async Update(updateDto: IUpdateSale): Promise<ISale> {
    try {
      const sale = await this._repository.Update(updateDto)
      return sale
    } catch (err) {
      throw CustomHttpErrors.InternalError("Error en el servidor.")
    }
  }

  public async Delete(id: string): Promise<ISale> {
    try {
      const sale = await this._repository.Delete(id)
      return sale
    } catch (err) {
      throw CustomHttpErrors.InternalError("Error en el servidor.")
    }
  }
}
