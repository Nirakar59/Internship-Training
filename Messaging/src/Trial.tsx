import React, { useCallback, useEffect, useState } from 'react'
import { APIkey } from './Constants/index'
import type { Product, ProductResponse } from './Types/productTypes'
const Trial: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  const getdata = useCallback(async () => {
    try {
      const response = await fetch(APIkey)
      if (response.ok) {
        const data: ProductResponse = await response.json()
        console.log(data)
        setProducts(data.data)
      }
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    getdata()
  }, [getdata])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Catalog</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              {product.image?.[0] ? (
                <img
                  src={`/${product.image[0].replace(/\\/g, "/")}`}
                  alt={product.productname}
                  className="h-full object-contain"
                />
              ) : (
                <span className="text-gray-400">No Image</span>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {product.productname}
              </h2>
              <p className="text-gray-700 font-medium mb-1">₹{product.price}</p>

              {product.stock && (
                <p className="text-sm text-gray-600">
                  Stock: {product.stock.$numberDecimal}
                </p>
              )}

              {product.remainingStock && (
                <p className="text-sm text-gray-600">
                  Remaining: {product.remainingStock.$numberDecimal}
                </p>
              )}

              {product.type && (
                <p className="text-sm text-gray-600">Type: {product.type}</p>
              )}


            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trial
