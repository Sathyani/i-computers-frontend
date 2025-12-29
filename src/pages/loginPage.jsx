import axios from 'axios'
import { useState } from 'react'
import toast from "react-hot-toast";
import { GrGoogle } from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function login(){
    console.log("Email", email)
    console.log("Password", password)

    try {
      const res = await axios.post(import.meta.env.VITE_BACKEND_URL+"/users/login", {
      email: email,
      password: password
      })

      console.log(res.data)

      if(res.data.role?.toLowerCase() === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

      toast.success("Login sucessfull")

    }catch(err){
      toast.error("Login fail")

      console.log("Error occure")
      console.log(err)
    }
  }

  return (
    <div className='w-full h-screen bg-[url("/bg.jpg")] bg-center bg-cover bg-no-repeat flex'>
      
      <div className='w-[50%] h-full flex flex-col justify-center items-center'>
        <img src='/logo.png' className='w-[200px] mb-[20px] h-[200px] object-cover'/>
        <h1 className='text-[45px] text-gold text-shadow-2xs text-center font-bold'>Plug In. Power Up. Play Hard.</h1>
        <p className='text-[30px] italic text-white font-semibold'>Your Ultimate Destination for Gaming Gear</p>
      </div>

      <div className='w-[50%] h-full flex justify-center items-center'>
        
        <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center p-[30px]">
          
          <h1 className='text-[40px] font-bold mb-[20px] text-yellow-700 text-shadow text-shadow-2xs '>Login</h1>
          
          <input
            onChange={
              (e)=>{
                setEmail(e.target.value)
            }}
						type="email"
						placeholder="Your Email"
						className="w-full h-[50px] mb-[20px] rounded-lg border border-accent p-[10px] text-[20px] text-white focus:outline-none focus:ring-2 focus:ring-gold"
					/>
          
          <input
            onChange={
              (e)=>{
                setPassword(e.target.value)
            }}
						type="password"
						placeholder="Password"
						className="w-full h-[50px] mb-[20px] rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-gold"
					/>
          
          <p className="text-white not-italic w-full mb-[20px] text-center">
						Forget your password?
						<Link to="/forgot-password" className="text-yellow-500 italic">
							Reset it here
						</Link>
					</p>
          
          <button 
            onClick={login}
            className="w-full h-[50px] mb-[20px] bg-accent text-white font-bold text-[20px] rounded-lg border-[2px] border-accent hover:bg-transparent hover:text-accent">
              Login 
          </button>
          
          <button className="w-full h-[50px] bg-accent text-white font-bold text-[20px] rounded-lg border-[2px] border-accent hover:bg-transparent hover:text-accent">
						Login with <GrGoogle className="inline ml-2 mb-1" />
					</button>
					
          <p className="text-white not-italic">
						Don't have an account?
						<Link to="/register" className="text-yellow- italic">
							Register here
						</Link>
					</p>

        </div>

      </div>
    </div>
  )
}
