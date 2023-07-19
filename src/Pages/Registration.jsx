import React from 'react'
import {Grid,TextField,Button,Alert} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import registration from "../assets/registrationimg.webp"
import Headingregi from '../component/Headingregi';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import {RiEyeFill,RiEyeCloseFill} from "react-icons/ri"


let initialValues ={
  email: "",
  fullName: "",
  password:"",
  loading:false,
  error:"",
  eye:false
}

const Registration = () => {

  const auth = getAuth();
  let navigate = useNavigate()
  let [values,setValues] =useState(initialValues)

  let handleValues =(e)=>{
    setValues({
     ...values,
     [e.target.name]: e.target.value
    })
  
  }

  let handleEye =()=>{
    setValues({
      ...values,
      eye:!values.eye
    })
  }

  let handleSubmit=()=>{



    let {email,fullName,password}=values

    if(!email){
      setValues({
            ...values,
            error:"Please Enter Your Email"
          })
          return
    }

    if(!fullName){
      setValues({
                ...values,
                error:"Please Enter Your Name"
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

      sendEmailVerification(auth.currentUser)
  .then(() => {
   
  });

      setValues({
        email: "",
        fullName: "",
        password:"",
        loadind:false
       })
       navigate("/login")
    })

    
  }

  return (
    <Grid container spacing={2}>

        <Grid item xs={6}>
         <div className='regicontainer'>
           <Headingregi className="regiheading" title= "Get started with easily register"/>

           <p className='regipara'>Free register and you can enjoy it</p>

            <div className='textinput'>
                <TextField value={values.email} onChange={handleValues} name='email' id="outlined-basic" label="Email address" variant="outlined" />             
              {values.error.includes("Email") && <Alert  severity="error">{values.error}</Alert>}
            </div> 
            

            <div className='textinput'>
                <TextField value={values.fullName} onChange={handleValues} name='fullName' id="outlined-basic" label="Full name" variant="outlined" />
             {values.error.includes("Name") && <Alert  severity="error">{values.error}</Alert>}
           </div>

           <div className='textinput'>
               <TextField value={values.password} type={values.eye?"text":"password"} onChange={handleValues} name='password' id="outlined-basic" label="Password" variant="outlined" />
             {values.error.includes("Password") && <Alert  severity="error">{values.error}</Alert>}

              <div onClick={handleEye} className='eye'>
                 {values.eye
                 ?
                 <RiEyeFill/>
                 :
                 <RiEyeCloseFill/>
                 } 
              </div>
            

           </div>

           <Alert severity="info">Already Have An Account! <strong> <Link to ="/login">Login</Link> </strong> </Alert>

             {values.loading
             ?
           <div className='loading'>
            <LoadingButton loading variant="outlined">
              Submit
           </LoadingButton>
           </div>
             :
           <div className='buttonregi'>
           <Button onClick={handleSubmit} variant="contained">Sign up</Button>
           </div>

             }

              <Alert severity="error">Forgot Password<strong> <Link to ="/forgotpassword">Click Here</Link> </strong> </Alert>


         </div>
        </Grid>

        <Grid item xs={6}>
         <img className='regiimg' src={registration}/>
        </Grid>

    </Grid>
       
  )
}

export default Registration