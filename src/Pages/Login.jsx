import React from 'react'
import {Grid,TextField,Button,Alert} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import loginimg from "../assets/loginimg.webp"
import login from "../assets/googlelogin.webp"
import Headingregi from '../component/Headingregi';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { Link } from 'react-router-dom';

let initialValues ={
  email: "",
  fullName: "",
  password:"",
  loading:false,
  error:""
}



const Login = () => {
  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  let [values,setValues] =useState(initialValues)

  let handleValues =(e)=>{
    setValues({
     ...values,
     [e.target.name]: e.target.value
    })
  
  }

  let handleSubmit=()=>{

    let {email,password}=values

    if(!email){
      setValues({
            ...values,
            error:"Please Enter Your Email"
          })
          return
    }

    if(!password){
      setValues({
            ...values,
            error:"Please Enter Your Password"
            
           })
           return
    }


    setValues({
      ...values,
     loading:true
     })

    createUserWithEmailAndPassword(auth,email,password).then((user)=>{ 
      console.log(user)
      setValues({
        email: "",
        password:"",
        loadind:false
       })
       console.log(user);
    })

    
  }

  let handleGoogleLogin =()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })

    }

  return (
    <Grid container spacing={2}>

        <Grid item xs={6}>
         <div className='regicontainer'>
           <Headingregi className="regiheading" title= "Login to your account!"/>

           <img onClick={handleGoogleLogin} className='logimg' src={login}/>
            <div className='textinput'>
                <TextField value={values.email} onChange={handleValues} name='email' id="outlined-basic" label="Email address" variant="outlined" />   
            </div> 
                {values.error.includes("Email") && <Alert  severity="error">{values.error}</Alert>}          

           <div className='textinput'>
               <TextField value={values.password} onChange={handleValues} name='password' id="outlined-basic" label="Password" variant="outlined" />
           </div>
               {values.error.includes("Password") && <Alert  severity="error">{values.error}</Alert>}

              <Alert severity="info">Don't Have An Account! <strong> <Link to ="/">Registration</Link> </strong> </Alert>
             

              <div className='buttonlog'>
                  {values.loading
                    ?
                  <div className='loading'>
                    <LoadingButton loading variant="outlined">
                      Submit
                  </LoadingButton>
                  </div>
                    :
                  <div className='buttonregi'>
                  <Button onClick={handleSubmit} variant="contained">Login to Continue</Button>
                  </div>
                    }
        
           </div>

         </div>
        </Grid>

        <Grid item xs={6}>
         <img className='loginimg' src={loginimg}/>
        </Grid>

    </Grid>
       
  )
}

export default Login