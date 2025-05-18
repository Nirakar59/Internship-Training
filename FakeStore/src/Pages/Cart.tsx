import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Trash2, Minus, Plus } from "lucide-react";

const CartPage: React.FC = () => {
  const { cart, addNumOfItems } = useContext(CartContext);
  const cartItems = cart.cartItems ?? [];

  const totalPrice = cartItems.reduce((sum, item) => {
    const product = item.product[0];
    return sum + (product?.price ?? 0) * item.count;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 border-b pb-4">🛒 Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-20 text-lg">
            Your cart is empty.
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => {
                const product = item.product[0];
                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm"
                  >
                    <div className="flex gap-4">
                      <img
                        src={product?.image}
                        alt={product?.category}
                        className="w-28 h-28 object-cover rounded-xl"
                      />
                      <div>
                        <h2 className="text-lg font-semibold capitalize">{product?.category}</h2>
                        <p className="text-sm text-gray-600 line-clamp-2 max-w-md">
                          {product?.description}
                        </p>
                        <div className="text-sm mt-2 space-y-1">
                          <p className="text-gray-700">
                            Price: ${product?.price.toFixed(2)}
                          </p>
                          <p className="text-yellow-500">
                            ⭐ {product.rating.rate} ({product.rating.count} reviews)
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center mt-2 gap-2">
                            <button className="p-1 border rounded-md text-gray-600 hover:bg-gray-200">
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 text-md font-medium">{item.count}</span>
                            <button onClick={()=>{addNumOfItems(item)}} className="p-1 border rounded-md text-gray-600 hover:bg-gray-200">
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="mt-4 sm:mt-0 text-red-500 hover:text-red-700">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t pt-4 text-right">
              <p className="text-xl font-semibold">
                Total:{" "}
                <span className="text-green-600">${totalPrice.toFixed(2)}</span>
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
