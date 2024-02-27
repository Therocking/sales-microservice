
export interface ISale {
  clientId: string
  productId: string
  amount: number
  price: number
  total: number
  payment: string
  saleDate: Date
}

export interface ICreateSale {
  clientId: string
  productId: string
  amount: string
  price: number
  total: number
  payment: string
}

export interface IUpdateSale {
  id: string 
  amount: number
  price: number
  total: number
}
