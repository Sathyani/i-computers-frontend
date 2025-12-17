import { useState } from "react"

export default function Test(){
    const[count, setCount] = useState(0)
    const[status, setStatus] = useState("🌞")

    return(
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-[600px] h-[300px] shadow-2xl flex justify-center items-center text-center">
                <button className="w-[100px] h-[30px] bg-red-700 text-white"onClick={()=>{
                    setCount(count - 1)
                }}>
                    Decrement
                </button>
                
                <h1 className="w-[100px] h-[30px] text-2xl"> {count} </h1>

                <button className="w-[100px] h-[30px] bg-blue-700 text-white" onClick={()=>{
                    setCount(count + 1)
                }}>
                    Increment
                </button>

            </div>

            <div className="w-[600px] h-[300px] shadow-2xl flex flex-col justify-center items-center text-center">
                <span className="w-[100px] h-[30px]"onClick={()=>{
                    setCount(count - 1)
                }}>
                    {status}
                </span>

                <div className="w-full h-[50px] flex justify-center">
                    <button className="w-[100px] h-[30px] bg-red-700 text-white" onClick={()=>{setStatus("🌚")}}> off </button>
                    <button className="w-[100px] h-[30px] bg-green-700 text-white" onClick={()=>{setStatus("🌞")}}> On </button>
                </div>

            </div>
        </div>
    )
}