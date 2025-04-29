import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router';
import './App.css'

const  App =() => {
  const[datas, setDatas] = useState<TypeData | null >(null)
  const[id, setId] = useState<string>("1")


  const getData =  useCallback(async() => {
    if(Number(id)<=20){

        try{   
            const response = await fetch('https://fakestoreapi.com/products' + `/${id}`)
            const data = await response.json()
            console.log(data);
            setDatas(data)  
        }
        catch(err){
            console.log(err);
        }
    }
   
  },[id])


  useEffect(()=>{getData()},[getData])
  if(Number(id)>20)  return <h1>Only 20 items are there</h1> 


  return (
    <>
       <div className="min-h-screen bg-gray-50 p-6">
  {/* Input Section */}
  <div className="flex flex-col gap-2 max-w-sm mx-auto">
    <label htmlFor="numInp" className="text-lg font-medium text-gray-700">
      Get Data
    </label>
    <input
      type="number"
      id="numInp"
      defaultValue={1}
      onChange={(e) => setId(e.target.value)}
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Product Card or Loading */}
  {datas ? (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200 mt-6">
      <h2 className="text-2xl font-bold mb-4">{datas.title}</h2>
      <img
        src={datas.image}
        alt={datas.title}
        className="w-full h-64 object-contain mb-4"
      />
      <p className="text-gray-600 mb-3">{datas.description}</p>
      <p className="text-lg font-semibold mb-2">
        <strong>Price:</strong> ${datas.price}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <strong>Category:</strong> {datas.category}
      </p>
      <p className="text-sm text-yellow-600">
        <strong>Rating:</strong> {datas.rating?.rate} ⭐ ({datas.rating?.count} reviews)
      </p>
    </div>
  ) : (
    <p className="text-center text-gray-500 mt-6">Loading...</p>
  )}

  {/* Navigation Button */}
  <div className="flex justify-center mt-6">
    <Link to="/productlist">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
        Go to Product List
      </button>
    </Link>
  </div>
</div>
    </>
  )



    

}

export default App
