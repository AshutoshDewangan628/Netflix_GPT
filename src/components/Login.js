import React, {useRef} from 'react'
import Header from './Header'
import { useState } from 'react';
import { checkvalidation } from '../utils/Validation';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/Firebase';
import {updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {BGURL} from "../utils/constat"

const Login = () => {
  const dispatch=useDispatch();
  const [issignin,setIssignin]=useState(true);
  const [errormessage,setErrormessage]=useState(null);

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  
  const handletoggle=()=>{
    setIssignin(!issignin);
  }

  const handleButton=()=>{
    const message=checkvalidation(email.current.value,password.current.value);
    setErrormessage(message);

    if(message) return;
    if(!issignin){
    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          
          updateProfile(user, {
            displayName:name.current.value
          }).then(() => {
            const {uid,email,displayName} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode+"-"+errorMessage)
          // ..
        });
    }
    else{
      //signIn
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormessage(errorCode+errorMessage)
      });
    }
  }
  return (
    <div>
    <Header/>
      <div className='absolute'>
        <img src={BGURL} alt="bg-img" />
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault();
      }} className='absolute w-3/12 p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
        
        <h1 className='text-3xl'>{issignin ?"Sign In":"Sign Up"}</h1>
        {!issignin && (<input ref={name} type="Name" placeholder='Full Name'
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