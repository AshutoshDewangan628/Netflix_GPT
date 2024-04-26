import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const handlesignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // dispatch(removeUser);
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-24'
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="netflix-logo" />
        {user &&
        <div className='p-2 flex'>
          <img className='w-10' src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp" alt="user-logo" />
          <button onClick={handlesignout} className='text-bold text-white'>Sign Out</button>
        </div>
        }

    </div>

  )
}

export default Header