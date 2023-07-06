import "./App.css";
import * as React from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import LoginForm from "../LoginForm/LoginForm";
import Landing from "../Landing/Landing";
import LoginPage from "../LoginPage/LoginPage";
import Home from "../Home/Home";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ActivityPage from "../ActivityPage/ActivityPage";
import NutritionPage from "../NutritionPage/NutritionPage";
import ExercisePage from "../ExercisePage/ExercisePage";
import SleepPage from "../SleepPage/SleepPage";
// import Navbar from "./Navbar"

function App() {
  

const[isLoggedIn, setisLoggedIn]= useState(false)
const[LoggedError, setLoginError]= useState("")
const[userName, setUserName] = useState("")

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
      const token = Cookies.get("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        setUserName(decodedToken.userName); //get username
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


  // const handleLogin = async (email, password) => {
  //   try {
  //     const response = await fetch("http://localhost:3001/api/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  
  //     const data = await response.json();
  
  //     if (response.ok) {
  //       const { token } = data; // Access 'token' from 'data' object
  //       Cookies.set("token", token); // Set the token as a cookie
  //       // Successful Login
  //       setisLoggedIn(true);
  //       setLoginError("");
  //       console.log(data.message); // Optional - display a success message
  //     } else {
  //       // Login failed
  //       setLoginError(data.message);
  //       console.log(data.message); // Optional - display error message
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

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

    if (response.ok) {
      const { token } = response.data;
      Cookies.set("token", token); // Set the token as a cookie
      //Successful Login
      setisLoggedIn(true);
      setLoginError(""); 
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
      const { token } = response.data;
      Cookies.set("token", token); // Set the token as a cookie
      //Registration successful
      setisLoggedIn(true);
      console.log(data.message); //optional - display a success message
    } else {
      //REgistration failed
      console.log(data.message); //optional - display error meesage
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
            element={isLoggedIn ? <SleepPage /> : <AccessForbidden />}
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
