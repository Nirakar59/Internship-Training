import React, { useCallback, useEffect, useState } from 'react'


const ProductList = () => {

    const[products, setProducts] = useState<TypeData[] | null>(null)

    const getData = useCallback(async()=>{
        try{
            const response =  await fetch('https://fakestoreapi.com/products')
            if(response){
                const data = await response.json()
                console.log(data);
                setProducts(data)
            }
        }
        catch(err){
            console.log(err);
            
        }
    },[])

    useEffect(()=>{getData()},[getData])

  return (
    <>
<div className="test grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  
  {products?.map((product) => (
    <div
      key={product?.id}
      className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    >
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <img
        src={product?.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-3"
      />
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="font-bold text-lg mb-1">Price: ${product.price}</p>
      <p className="text-sm text-gray-700 mb-1">
        <strong>Category:</strong> {product.category}
      </p>
      <p className="text-sm text-yellow-600">
        <strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
      </p>
    </div>
  ))}
</div>
    </>

  )
}

export default ProductList