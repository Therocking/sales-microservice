


export class ValidateFields {
  public static IsValidPayment(payment: string) {
    const validPayments = ["Card", "Cash"]

    if(!validPayments.includes(payment)) {
      throw "Forma de pago no valida."
    }
  }
}
