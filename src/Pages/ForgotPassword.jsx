import React, { useState } from 'react'
import {Button,TextField} from '@mui/material';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {

    const auth = getAuth();

    let navigate =useNavigate()

    let [text,setText] =useState("")

    let handleforgotPassword =()=>{
        console.log(text);
           sendPasswordResetEmail(auth, text)
            .then(() => {
               navigate("/login")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              
            });

    }

  return (
            <div className='forgotPassword'>
                <div className='box'>
                   <h1>Forgot Password</h1> 
                     <TextField onChange={(e)=>setText(e.target.value)} className='fg-textbox' id="outlined-basic" label="Email" variant="outlined" />
                  
                            <div className='buttonregi'>
                              <Button onClick={handleforgotPassword}  variant="contained">Confirm</Button>
                            </div>
                        

                        
                </div>
            </div>
    )
}

export default ForgotPassword