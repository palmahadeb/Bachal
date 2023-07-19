import { Button } from '@mui/material'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const auth = getAuth();
  let navigate =useNavigate()
  let handleLogout =()=>{
    signOut(auth).then(() => {
     navigate("/login")
    }).catch((error) => {
     
    });
  }
  return (
   <Button onClick={handleLogout} variant='contained'>Log Out</Button>
  )
}

export default Home