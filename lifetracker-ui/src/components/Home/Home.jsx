import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='sections'>
        <h1>Fitness </h1>
            <img className='Fitness'
                src= "https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_1280.jpg "
                alt= "Fitness"
                width="600" height="600"> 

            </img>

        <h1> Food </h1>

                <img className='Food'
                src= "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
                label= " Food"
                alt= "Food"
                width="600" height="600"> 

                </img>

        <h1> Rest</h1>

                <img className='Rest'
                
                src="https://goop-img.com/wp-content/uploads/2022/03/7-different-types-of-rest_bruce-mars-wBuPCQiweuA-unsplash.jpg"
                alt= "Rest"
                width="600" height="600"> 

                </img>
        
        <h1> Planner </h1>

                <img className='Planner'
                src= "https://target.scene7.com/is/image/Target/WeeklyPlanners_QUIVER-200529-1590797695396"
                alt= "Planner"
                width="600" height="600"> 

                </img>




    </div>
  )
}

export default Home