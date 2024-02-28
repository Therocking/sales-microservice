import { ICreateSale, ISale, IUpdateSale } from "../interfaces/sale.interface";

export interface ISaleRepository {
  Create(craeteDto: ICreateSale): Promise<ISale>
  GetAll(): Promise<ISale[]>
  GetById(id: string): Promise<ISale | null>
  Update(updateDto: IUpdateSale): Promise<ISale | null>
  Delete(id: string): Promise<ISale | null>
}
