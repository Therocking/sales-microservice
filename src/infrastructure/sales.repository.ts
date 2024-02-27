import { ICreateSale, ISale, IUpdateSale } from "../interfaces/sale.interface";

export interface ISaleRepository {
  Create(craeteDto: ICreateSale): Promise<ISale>
  GetAll(): Promise<ISale[]>
  Update(updateDto: IUpdateSale): Promise<ISale>
  Delete(id: string): Promise<ISale>
}
