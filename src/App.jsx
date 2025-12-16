import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'
import Header from './components/header'

function App() {
  return(
    <div className='w-[600px] h-[600px] border bg-gray-400 relative'>
      <div className='w-[500px] h-[500px] border bg-yellow-100 flex flex-col justify-center items-center'>
        <div className='w-[100px] h-[100px] border bg-blue-700'></div>
        <div className='w-[100px] h-[100px] border bg-red-600 fixed left-[550px] top-[550px]'></div>
        <div className='w-[100px] h-[100px] border bg-green-800'></div>
        <div className='w-[100px] h-[100px] border bg-pink-600 absolute right-[20px] bottom-[20px]'></div>

      </div>

    </div>
  )
}

export default App
