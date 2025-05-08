import { createContext } from "react"

interface UserType {
    sub:number,
    user:string,
    ita:number
}
interface TYpeuserContext {
    user: UserType|null,
    handleLogOut: ()=>void
}

export const UserContext  = createContext<TYpeuserContext | null>(null)

export type {UserType}