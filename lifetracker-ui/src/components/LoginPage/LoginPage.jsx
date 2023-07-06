import React, { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function LoginPage({handleLogin}) {
  // const[isLoggedIn, setisLoggenIn]= useState(false)
  return (
    <div className='login-page'>
    
    <br></br>
    <br></br>
    <br></br>

    <LoginForm
    
    handleLogin={handleLogin}/>
    

    </div>
  )
}

export default LoginPage