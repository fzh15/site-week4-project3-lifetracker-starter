import "./App.css";
import * as React from "react";
import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ActivityPage from "../ActivityPage/ActivityPage";
import NutritionPage from "../NutritionPage/NutritionPage";
import ExercisePage from "../ExercisePage/ExercisePage";
import SleepPage from "../SleepPage/SleepPage";
// import Navbar from "./Navbar"

function App() {
  

const[isLoggedIn, setisLoggedIn]= useState(false)
const[LoggedError, setLoginError]= useState("")
const [userId, setUserId] = useState()

//this is from the Navlinks compontent where I also define logoutUser
const logoutUser= ()=>{
  //should remove `lifetracker_`
  localStorage.removeItem(`lifetracker_token`);
  setisLoggedIn(false)
  // window.location.reload(); //refreshs the pages 
}



  const AccessForbidden = () => {
    return (
      <div>
        <h1>Access Forbidden</h1>
        <p>You do not have permission to access this page.</p>
      </div>
    );
  };
  
  useEffect(() => {
    const checkLoggedIn = () => {
      const token = localStorage.getItem("lifetracker_token");
      if (token) {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.userId); //get username

        if (decodedToken.exp * 1000 > Date.now()) {
          setisLoggedIn(true);
        } else {
          // Token has expired, log out the user
          logoutUser();
        }
      }
    };
  
    checkLoggedIn();
  }, []);
  

  // NotFound component
  const NotFound = () => {
    return (
      <div>
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>    
    );
  };    


const handleLogin = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data, response)
    if (response.ok) {
      const { token } = data;
      localStorage.setItem("lifetracker_token", token)
      //Successful Login
      setisLoggedIn(true);
      setLoginError(""); 
      // setUserId(response.data.user.id)
      //gives hte values for usere id that then i can use in out files to do it 

      //define this 
      console.log(data.message); //optional - display a success message
    } else {
      //Login failed
      setLoginError(data.message);
      console.log(data.message); //optional - display error message
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


const onRegister= async (first_name, last_name, username, email, password) => {
  try {
    const response = await fetch("http://localhost:3001/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({first_name, last_name, username, email, password
        
        
      }),
    });
    // FirstName, Email, Password 

    //wait for the response
    const data = await response.json();

    if (response.ok) {
      console.log(response); //optional - display a success message
      const { token } = response;
      //Registration successful
      setisLoggedIn(true);
    } else {
      logoutUser();
      //REgistration failed
      // console.log(data.message); //optional - display error meesage
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};
  return (

    <div className="app">
      <BrowserRouter>
        <Navbar
        isLoggedIn={isLoggedIn}
        setisLoggedIn={setisLoggedIn}
         />

        <Routes>
          <Route path="/" element={<Landing />} /> 

          {/* <Route path="/exercise" element={<ExercisePage />} /> 
          <Route path="/sleep" element={<SleepPage/>} />  */}


          <Route path="/login" element={<LoginPage 
          handleLogin={handleLogin}
          />} />
          <Route path="/register" element={<RegistrationPage 
          onRegister= {onRegister}/>} />
          <Route
            path="/activity"
            element={isLoggedIn ? <ActivityPage /> : <AccessForbidden />}
            />
            <Route
            path="/nutrition/*"
            element={isLoggedIn ? <NutritionPage /> : <AccessForbidden />}
            />
             <Route
            path="/sleep/*"
            element={isLoggedIn ? <SleepPage userId = {userId} /> : <AccessForbidden />}
            />
             <Route
            path="/exercise/*"
            element={isLoggedIn ? <ExercisePage /> : <AccessForbidden />}
            />




          <Route path="*" element={<NotFound />} />
        </Routes>
        <br></br>
        <br></br>

        <br></br>
      </BrowserRouter>
    </div>
  );
}

export default App;
