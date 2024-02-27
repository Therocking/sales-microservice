import { ICreateSale, ISale, IUpdateSale } from "../interfaces/sale.interface";
import { Sale } from "../models/sale";
import { ISaleRepository } from "./sales.repository";


export class SalesRepositoryImpl implements ISaleRepository {

  public async Create(craeteDto: ICreateSale): Promise<ISale> {
     var newSale = new Sale(craeteDto)
     await newSale.save()

    return newSale
  }

  public async GetAll(): Promise<ISale[]> {
     const sales = await Sale.find()
     return sales
  }

  public async Update(updateDto: IUpdateSale): Promise<ISale> {
      const {id, ...rest} = updateDto
      const sale = await Sale.findByIdAndUpdate(id, rest)
      return sale!
  }

  public async Delete(id: string): Promise<ISale> {
      const sale = await Sale.findByIdAndDelete(id)
      return sale!
  }
}
