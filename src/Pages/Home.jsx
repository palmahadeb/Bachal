import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Group from '../component/Group';
import FriendRequest from '../component/friendRequest';
import Friends from '../component/Friends';
import MyGroup from '../component/MyGroup';
import UserList from '../component/UserList';
import BlockedUsers from '../component/BlockedUsers';
import { useSelector } from 'react-redux'


const Home = () => {
  const auth = getAuth();
  let navigate =useNavigate()
  let loginUser = useSelector((state)=>state.loggeduser.loginUser)

  useEffect(()=>{
    if (loginUser == null){
      navigate("/login")
    }
    
    

  },[])

  // let handleLogout =()=>{
  //   signOut(auth).then(() => {
      
  //    navigate("/login")
  //   }).catch((error) => {
     
  //   });
  // }
  return (

    <Grid container spacing={2}>
        <Grid item xs={4}>
         <Group/>
          <FriendRequest/>
        </Grid>
        <Grid item xs={4}>
          <Friends/>
          <MyGroup/>
        </Grid>
        <Grid item xs={4}>
          <UserList/>
          <BlockedUsers/>
        </Grid>
      
      </Grid>
  //  <Button onClick={handleLogout} variant='contained'>Log Out</Button>
  )
}

export default Home