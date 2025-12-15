import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductCard name="Laptop" price="150,000" image="https://picsum.photos/id/1/200/300"/>
      <ProductCard name="Phone" price="90,000" image="https://picsum.photos/id/3/200/300"/>
      <ProductCard name="Watch" price="5,000" image="https://picsum.photos/id/5/200/300"/>
    </>
  )
}

export default App
