import { SalesRepositoryImpl } from "../../infrastructure/sales.repositoryIml";



export class ValidateFields {
  private readonly _repository = new SalesRepositoryImpl()

  public IsValidPayment = (payment: string) => {
    const validPayments = ["Card", "Cash"]

    if(!validPayments.includes(payment)) {
      throw "Forma de pago no valida."
    }
  }

  public ExistSale = async(id: string) => {
    const sale = await this._repository.GetById(id)

    if(!sale || !sale.active) throw "No existe una venta por ese id"
  }
}
