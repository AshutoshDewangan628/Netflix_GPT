import React, { useEffect } from 'react'
import Login from './Login';
import Browser from './Browser'
import {onAuthStateChanged } from "firebase/auth"
import {auth} from "../utils/Firebase"
import {createBrowserRouter,RouterProvider, useNavigate} from "react-router-dom";
import { addUser,removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
  

const Body = () => {
    const dispatch=useDispatch();
    const approuter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        }
    ])
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            
          } else {
            
            dispatch(removeUser());
          }
        });
    },[])

  return (
    <div>
        <RouterProvider router={approuter} />
    </div>
  )
}

export default Body