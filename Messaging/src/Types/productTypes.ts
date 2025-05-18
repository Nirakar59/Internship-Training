export type Product = {
  _id: string
  productname: string
  price: number
  image: string[]
  category: string[]
  stock?: {
    $numberDecimal: string
  }
  remainingStock?: {
    $numberDecimal: string
  }
  slug?: string
  ingredients?: string
  details?: string
  type?: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type ProductResponse = {
  message: string
  data: Product[]
}