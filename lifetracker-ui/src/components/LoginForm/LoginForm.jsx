import React, { useState } from 'react'

const LoginForm = () => {
    const[Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Error, setError]= useState("")
    
    const handlePasswordChange = (e) => {
          e.preventDefault();
          setName(e.target.value)


    }
    const handleEmailChange = (e) => {
          e.preventDefault();
          setEmail(e.target.value)


    }

    const handleSubmit = (e)=>
    {
      e.preventDefault();
      

      try {
        // Perform login request
        const response = LoginForm(Email, Password);
  
        // Handle successful login
        // ...
      } catch (error) {
        if (error.response) {
          const statusCode = error.response.status;
          if (statusCode === 401) {
            setError('Incorrect email and password combination.');

          } else if (statusCode === 400 || statusCode === 422) {
            setError('Something went wrong with your request.');

          } else {
            setError('An unexpected error occurred.');
          }
        } else {
          setError('Network error. Please try again later.');
        }
      }

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
         <label>Password:</label>

            <input
            className='form-input'
            name = "Password"
            type = "text"
            value = {Password}
            onChange = {handlePasswordChange}
            />

            <label>Email:</label>
            <input
            className='form-input'
            name = "email"
            type = "email"
            value = {Email}
            onChange = {handleEmailChange}
            />
    
    <button className='submit-login'> Login </button>
    
    </form>
    </div>

    //error messages 


  )
}

export default LoginForm