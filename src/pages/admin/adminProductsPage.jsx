import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BiPlus } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader'

export default function AdminProductsPage() {

  const [products, setProducts] = useState([])
 const [loaded, setLoaded] = useState(false)

  useEffect(()=>{  //run first time in startting and second this runs when any value changes
    if(!loaded){
      axios.get(import.meta.env.VITE_BACKEND_URL + '/products').then((response)=>{
        console.log(response.data)
        setProducts(response.data)
        setLoaded(true)
      })
    }           
    
  }, [loaded])

  return (
    <div className="w-full min-h-screen bg-primary p-8">
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        {loaded ? <table className="w-full text-sm text-left text-secondary">

          <thead className="bg-secondary text-primary sticky top-0 z-10">
            <tr className="uppercase tracking-wide text-xs">
              <th className="px-6 py-4">Image</th>
              <th className="px-6 py-4">Product ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Labeled Price</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Brand</th>
              <th className="px-6 py-4">Model</th>
              <th className="px-6 py-4">Stock</th>
              <th className="px-6 py-4">Availability</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {products.map((item) => (
              <tr
                key={item.productID}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl shadow-md border"
                  />
                </td>

                <td className="px-6 py-4 font-semibold">{item.productID}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4 font-medium">Rs. {item.price}</td>
                <td className="px-6 py-4 line-through text-gray-500">
                  Rs. {item.labelPrice}
                </td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.brand}</td>
                <td className="px-6 py-4">{item.model}</td>
                <td className="px-6 py-4 text-center font-semibold">
                  {item.stock}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.isAvailable
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {item.isAvailable ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <button onClick={() => {
                    const token = localStorage.getItem("token");

                    axios.delete(
                      import.meta.env.VITE_BACKEND_URL + "/products/" + item.productID,
                      {
                        headers: {
                          Authorization: `Bearer ${token}`
                        }
                      }
                    )
                    .then(() => {
                      toast.success("Product deleted successfully");
                      setLoaded(false)
                    })
                    }} className="text-white rounded-full cursor-pointer hover:bg-red-400 bg-red-800 justify-center items-center font-medium transition h-[30px] w-[100px]">
                      Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>:<Loader/>}
      </div>

      <Link
        to="/admin/add-product"
        className="fixed right-6 bottom-6 w-14 h-14 flex items-center justify-center
          rounded-full bg-accent text-white text-3xl shadow-xl
          hover:bg-gold hover:scale-105 transition-all duration-300"
      >
        <BiPlus />
      </Link>
    </div>
  )
}
