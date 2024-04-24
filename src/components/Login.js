import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { checkvalidation } from '../utils/Validation';

const Login = () => {
  const [issignin,setIssignin]=useState(true);
  const [errormessage,setErrormessage]=useState(null);

  const email=useRef(null);
  const password=useRef(null);
  
  const handletoggle=()=>{
    setIssignin(!issignin);
  }

  const handleButton=()=>{
    const message=checkvalidation(email.current.value,password.current.value);
    setErrormessage(message);
  }
  return (
    <div>
    <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img" />
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault();
      }} className='absolute w-3/12 p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
        
        <h1 className='text-3xl'>{issignin ?"Sign In":"Sign Up"}</h1>
        {!issignin && (<input type="Name" placeholder='Full Name'
          className='p-3 my-4 w-full bg-gray-800'
        />)}
        <input ref={email}
         type="Email" placeholder='Email'
          className='p-3 my-4 w-full bg-gray-800'
        />
        <input ref={password}
         type="Password" placeholder='Password'
          className='p-3 my-4 w-full bg-gray-800'
        />
        <p className='text-red-600 font-bold'>{errormessage}</p>
        <button onClick={handleButton}
        className='w-full p-3 my-4 bg-red-700'>{issignin ?"Sign In":"Sign Up"}</button>
        <p onClick={handletoggle}
        className='cursor-pointer'
        >{issignin ? "New to netflix? Signup now" : "Registered User? SignIn Now"}</p>
      </form>

  </div>
  )
}

export default Login