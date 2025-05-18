import React, { createContext, useState } from "react";
import { TypeCartItems, TypeOfCart } from "./context";



interface TypeCartContext {
  cart: TypeOfCart
  addToCart: (product: TypeCartItems) => void
  addNumOfItems: (product: TypeCartItems) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<TypeCartContext>({
  cart: {
    productCount: 0,
    cartItems: [],
  },
  addToCart: () => {},
  addNumOfItems: () => {}

})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const [cart, setCart] = useState<TypeOfCart>({
        cartItems:[] ,
        productCount: 0
    })
    const[itemCount, setItemCount] = useState<number>(2)


    const addNumOfItems = (product:TypeCartItems) => {
    
        if(product){
        setItemCount((prev)=> prev+1)
        
       product.count = itemCount

    }    
}    
    
    const addToCart = (products: TypeCartItems) => {
        if (!products) throw new Error("please select the product first")
        setCart((prev) => {
            if (prev.cartItems === null) {
                const newItem: TypeCartItems = {
                    count: products.count,
                    id: String(new Date().getTime()),
                    product: products.product
                }
                return {
                    cartItems: [newItem],
                    productCount: 3
                }
            }
            else {
                const newItems:TypeCartItems = {
                    count: products.count,
                    id: String(new Date().getTime()),
                    product:  products.product
                }
               if((prev.cartItems.filter((prev)=> newItems.id === prev.id)).length>0) {return {
                    cartItems: [...prev.cartItems],
                    productCount: prev.cartItems.length + 1
                }}
                else{
                    return{
                        cartItems:  [...prev.cartItems,newItems],
                    productCount: prev.cartItems.length + 1
                    }
                }
                

            }
                
            
            })
        }
    




    const value = {
        cart,
        addToCart,
        addNumOfItems
    }

    return (
        <CartContext value={value}>
            {children}
        </CartContext>
    )
}
