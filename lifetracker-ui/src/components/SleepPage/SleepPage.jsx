import React from 'react'
import SleepForm from '../SleepForm/SleepForm'


function SleepPage({userId}) {
  return (
    <div className='SleepForm'>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    <h1>   Record Your Sleep </h1>
    <img className='sleep-image'
    src='https://i.pinimg.com/originals/60/c4/f8/60c4f8ba139de77cfc766588ce8d7ab8.jpg'>
      
    </img>
    
    <SleepForm  userId={userId}/>
    </div>
  )
}

export default SleepPage