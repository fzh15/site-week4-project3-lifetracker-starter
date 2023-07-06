import React from 'react'
import { Link } from 'react-router-dom'
import "./NavLinks.css"

function NavLinks({isLoggedIn, setisLoggedIn}) {
  console.log(isLoggedIn)
    const logoutUser= ()=>{
        //should remove `lifetracker_`
        localStorage.removeItem(`lifetracker_token`);
        setisLoggedIn(false)
        // window.location.reload(); //refreshs the pages 
    }
  return (
    <div className='nav-links'>

        <Link to="/activity">Activity</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/exercise">Exercise</Link>
        <Link to="/sleep"> Sleep </Link> 



        {isLoggedIn ? (

          //write a messae that gives a  welcome message on the header of the page 

        <button className='logout-button' onClick={logoutUser}> Log Out </button>
        
        ):(
        <>  
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
        </>
         )}
        

        

    </div>
  )
}

export default NavLinks


