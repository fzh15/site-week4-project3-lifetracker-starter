import React from 'react'
import { Link } from 'react-router-dom'
import "./NavLinks.css"

function NavLinks({isLoggedIn}) {

    const logoutUser= ()=>{
        //should remove `lifetracker_token`
        localStorage.removeItem(`lifetracker_token`);
        window.location.reload(); //refreshs the pages 

    }
  return (
    <div className='nav-links'>

        <Link to="/activity">Activity</Link>
        <Link to="/nutrition">Nutrition</Link>

        {isLoggedIn ? (

        <button className='logout-button' onClick={logoutUser}> </button>
        
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


