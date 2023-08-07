import React from 'react'
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Profile from "../assets/profile.png"
import {GoHome} from "react-icons/go"
import {AiOutlineMessage,AiOutlineSetting,AiOutlineNotification,AiOutlineLogout} from "react-icons/ai"
import { Link,useLocation } from 'react-router-dom';


const RootLayoout = (props) => {
    const location =useLocation();
    console.log(location.pathname);
  return (
    <Grid container spacing={2}>
        <Grid item xs={1}>
        <div className='navbar'>
            <div className="navcontainer">
                <img src={Profile} />
                <ul className='navlist'>
                    <li>
                        <Link to ="/bachal/home" className={location.pathname == "/bachal/home"? "active":"icon"}>
                            <GoHome />
                        </Link>
                    </li>
                    <li>
                       <Link to ="/bachal/message" className={location.pathname == "/bachal/message"? "active":"icon"}>
                          <AiOutlineMessage />
                       </Link>
                    </li>
                    <li>
                       <Link className='icon'>
                          <AiOutlineNotification />
                       </Link>
                    </li>
                    <li>
                       <Link className='icon'>
                         <AiOutlineSetting />
                       </Link>
                    </li>
                    <li>
                        <Link to ="/login">
                            localStorage.removeItem("user")
                            <AiOutlineLogout className='iconlog'/>
                        </Link>
                    </li>
                   
                  
                </ul>

            </div>
            
        </div>
        </Grid>
        <Grid item xs={11}>
        <Outlet/>
        </Grid>
       
      </Grid>
 
       
  )
}

export default RootLayoout