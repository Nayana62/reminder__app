import { useAuth } from '@/context/AuthContext';
import React, { useState } from 'react'

function Login() {

const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const[error, setError] = useState(null);
const[isLoggingIn, setIsLoggingIn] = useState(true)

const {login, signup, currentUser} = useAuth()
console.log(currentUser)

async function submitHandler() {
    if(!email || !password) { 
        setError("Please enter email and password")
        return
     }
     if(isLoggingIn) {
      try{
        await login(email, password)
      }
      catch(err){
        setError("Incorrect email or password")
      }
        return 
     }
     await signup(email, password)

}

  return (
    <div className='flex-1 flex flex-col justify-center items-center text-xs sm:text-sm gap-4'>
        <h1 className='font-extrabold text-2xl sm:text-4xl select-none text-[#3c7482] uppercase'>{isLoggingIn ? "login" : "Register"}</h1>

        {error && <div className='w-full max-w-[40ch] border-rose-400 border-2 border-solid text-center text-rose-400 py-2'>{error}</div>}

        <input type="email" className=' outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-2 border-solid border-white focus:border-[#3c7482] rounded' placeholder='Email address...'
        value={email} onChange={(e) => setEmail(e.target.value)}
        />

        <input type="password" className=' outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-2 border-solid border-white focus:border-[#3c7482] rounded' placeholder='Password'
        value={password} onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={submitHandler} className='w-full max-w-[39ch]   border-solid uppercase py-2 rounded duration-300 relative border-2 border-[#3c7482] text-[#3c7482] hover:bg-[#3c7482] font-bold hover:text-white'>
            <h2 className='relative z-20'>SUBMIT</h2>
            </button>
            <h2 className='duration-300 hover:scale-110 cursor-pointer' onClick={() => setIsLoggingIn(!isLoggingIn)}>{!isLoggingIn ? "Login" : "Register"}</h2>
    </div>
  )
}

export default Login