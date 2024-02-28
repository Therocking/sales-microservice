import { ICreateSale, ISale, IUpdateSale } from "../../../interfaces/sale.interface";


export interface ISaleService {
  Create(createDto: ICreateSale): Promise<ISale>
  GetAll(): Promise<ISale[]>
  GetById(id: string): Promise<ISale>
  Update(updateDto: IUpdateSale): Promise<ISale>
  Delete(id: string): Promise<ISale>
}
