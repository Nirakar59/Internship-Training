import { createContext } from "react"
import { TypeProduct } from "../Pages/Products";

interface UserType {
    sub:number
    user:string
    ita:number
}
interface TYpeuserContext {
    user: UserType|null
    handleLogOut: ()=>void
}

export const UserContext  = createContext<TYpeuserContext | null>(null)
export type TypeCartItems = {
    count: number
    id: string
    product: TypeProduct[]
}
interface TypeOfCart {
    productCount : number,
    cartItems: TypeCartItems[] | null
}
export type {TypeOfCart}
export type {UserType}
