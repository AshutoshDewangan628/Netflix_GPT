import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import {onAuthStateChanged } from "firebase/auth"
import { addUser,removeUser } from '../utils/userSlice';
import { auth } from "../utils/Firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {LOGO,USERAVTAR} from '../utils/constat';


const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const handlesignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // dispatch(removeUser);
    }).catch((error) => {
      // An error happened.
    });
  }
 
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browser")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    
},[])
  return (
    <div className='absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-24'
        src={LOGO} alt="netflix-logo" />
        {user &&
        <div className='p-2 flex'>
          <img className='w-10' src={USERAVTAR} alt="user-logo" />
          <button onClick={handlesignout} className='text-bold text-white'>Sign Out</button>
        </div>
        }

    </div>

  )
}

export default Header