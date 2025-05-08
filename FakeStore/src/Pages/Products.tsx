import { use, useCallback, useEffect, useState } from 'react'
import { LogInContext } from '../Context/AuthContext'
// import { Navigate } from 'react-router'
import { useNavigate } from 'react-router'

// import { data } from 'react-router'
export type TypeProduct = {
  'category': string, //"men's clothing"
  'description': string, //"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
  'id': number, //2
  'image': string  //"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  'price': number //22.3
  'rating': {
    'rate': number,
    'count': number
  }
  //{ rate: 4.1, count: 259 }
  'title': string  //"Mens Casual Premium Slim Fit T-Shirts "
}


const Products = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = use(LogInContext)
  const [products, setProducts] = useState<TypeProduct[]>([])


  const getProducts = useCallback(async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')

      if (response.ok) {
        const data: TypeProduct[] = await response.json()
        console.log(data);
        setProducts(data)

      }
    }
    catch (err) {
      console.log(err);

    }
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <>
    <title>Products</title>
      <main className="bg-gray-100 py-10 px-4 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain bg-gray-50 p-4"
              />
              <div className="p-4 flex flex-col gap-2">
                <h2 className="font-semibold text-lg text-gray-800">{product.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
                <span className="text-sm text-gray-500">Category: {product.category}</span>
                <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                  <span>⭐ {product.rating.rate}</span>
                  <span>{product.rating.count} reviews</span>
                </div>
                <button onClick={() => {
                  if (!isLoggedIn) {
                    navigate('/login');
                  }
                }} className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold">
                  Add to Cart
                </button>
                <button onClick={() => {
                  if (!isLoggedIn) {
                    navigate('/login');
                  }
                }} className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold">
                  Buy Now
                </button>
              </div>

            </div>

          ))}
        </div>
      </main>
    </>
  )
}

export default Products