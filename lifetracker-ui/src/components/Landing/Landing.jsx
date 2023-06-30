import React from 'react'
import "./Landing.css"

function Landing() {
  return (
    <div className='landing-page'>
      <img className='hero-img'
          src= " https://media.istockphoto.com/id/159756787/photo/stopwatch-front-view.jpg?s=612x612&w=0&k=20&c=l8XEkA6qoNoxh77jCAC8NZ6YqJR3jQdtADDiDlJDOIU="
      /> 

      <div className='landing-page-text'>

      <h1> The Cycle</h1>
      <h2> Lets get active!</h2>

      </div>
      <h2 className='cta'>
        This application is meant to aid users 
        in tracking their health.

      </h2>
    </div>
  )
}

export default Landing

