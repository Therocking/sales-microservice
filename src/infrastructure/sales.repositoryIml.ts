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
     const sales = await Sale.find({active: true})
     return sales
  }

  public async GetById(id: string): Promise<ISale | null> {
     const sale = await Sale.findById(id);
      return sale
  }

  public async Update(updateDto: IUpdateSale): Promise<ISale | null> {
      const {id, ...rest} = updateDto
      const sale = await Sale.findByIdAndUpdate(id, {amount: rest.amount}, {new: true})
      return sale
  }

  public async Delete(id: string): Promise<ISale | null> {
      const sale = await Sale.findByIdAndUpdate(id, {active: false}, {new: true})
      return sale!
  }
}
