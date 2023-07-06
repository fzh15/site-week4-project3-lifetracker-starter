import React, { useState } from 'react'
import "./LoginForm.css"

const LoginForm = ({handleLogin}) => {
    const[Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Error, setError]= useState("")
    
    const handlePasswordChange = (e) => {
          e.preventDefault();
          setPassword(e.target.value)


    }
    const handleEmailChange = (e) => {
          e.preventDefault();
          setEmail(e.target.value)


    }

    const handleSubmit = (e)=>
    {
      e.preventDefault();
      handleLogin(Email, Password)
      

    }

    // const loginUser = ()=>{

    // }
    // goes in App 

    //use state function 
  return (

    // [ ] Gracefully handle errors:
    // [ ] If the user has attempted to login and gotten a `401` error, then an error message should be displayed in an element with the class name of `error` indicating that the `email` and `password` combination is incorrect.
    // [ ] If the user has attempted to login and gotten a `400` or `422` error, then an error message should be displayed in an element with the class name of `error` indicating what went wrong.

    <div className = "login-form">

      <h2>Welcome </h2>
      <form onSubmit={handleSubmit}>

      <label>Email:</label>
            <input
            className='form-input'
            name = "email"
            type = "email"
            value = {Email}
            onChange = {handleEmailChange}
            />

         <label>Password:</label>

            <input
            className='form-input'
            name = "Password"
            type = "text"
            value = {Password}
            onChange = {handlePasswordChange}
            />

    
    <button className='submit-login'> Login </button>
    
    </form>
    </div>

    //error messages 


  )
}

export default LoginForm