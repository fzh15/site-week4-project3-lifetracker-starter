import "./App.css";
import * as React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import LoginForm from "../LoginForm/LoginForm";
import Landing from "../Landing/Landing";
import LoginPage from "../LoginPage/LoginPage";
import Home from "../Home/Home";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ActivityPage from "../ActivityPage/ActivityPage";
// import Navbar from "./Navbar"

function App() {

const[isLoggedIn, setisLoggenIn]= useState(false)



  return (
    <div className="app">
      <BrowserRouter>
        <Navbar
        isLoggedIn={isLoggedIn}
         />

        <Routes>
          <Route path="/" element={<Landing />} /> */
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          {/* <Route
            path="/activity"
            element={isLoggedIn ? <ActivityPage /> : <AccessForbidden />}
            />
            <Route
            path="/nutrition/*"
            element={isLoggedIn ? <NutritionPage /> : <AccessForbidden />}
            />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <br></br>
        <br></br>

        <br></br>

          <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
