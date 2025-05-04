import { useCallback, useEffect, useState } from "react"

type productType = {
  productId: number
  quantity: number
}

type cartType = {
  date: string
  id: number
  products: productType[]
  length: number
  userId: number
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<cartType[]>([])

  const fetchCarts = useCallback(async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts")
      if (response.ok) {
        const data = await response.json()
        setCartItems(data)
      }
    } catch (err) {
      console.error("Failed to fetch carts:", err)
    }
  }, [])

  useEffect(() => {
    fetchCarts()
  }, [fetchCarts])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cart List</h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg shadow p-4 mb-4 bg-white"
        >
          <div className="mb-2">
            <strong>Cart ID:</strong> {item.id}
          </div>
          <div className="mb-2">
            <strong>User ID:</strong> {item.userId}
          </div>
          <div className="mb-2">
            <strong>Date:</strong>{" "}
            {new Date(item.date).toLocaleDateString("en-US")}
          </div>
          <div className="mt-2">
            <strong>Products:</strong>
            <ul className="list-disc pl-5 mt-1">
              {item.products.map((prod, idx) => (
                <li key={idx}>
                  Product ID: {prod.productId}, Quantity: {prod.quantity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart
