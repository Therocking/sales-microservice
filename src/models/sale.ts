import { Schema, model } from "mongoose";
import { ISale } from "../interfaces/sale.interface";


const SaleSchema = new Schema<ISale>({
  clientId: {type: String, required: true},
  productId: {type: String, required: true},
  amount: {type: Number, required: true},
  price: {type: Number, required: true},
  total: {type: Number, required: true},
  payment: {type: String, required: true, enum: ["Card", "Cash"]},
  saleDate: {type: Date, default: Date.now()}
})

SaleSchema.methods.toJSON = function() {
  const {__v, _id, ...rest} = this.toObject()
  rest.id = _id
  return rest
}

export const Sale = model<ISale>("Sale", SaleSchema)
