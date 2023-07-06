import React, { useState } from 'react';
import "./SleepForm.css";

const SleepForm = () => {

// State variables to store the start and end times
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleStartTimeChange = (e) => {
     // Event handler for start time change
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    // Event handler for end time change
    setEndTime(e.target.value);
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    //CALL TO BACKEND AXIOS (TRY FUNCTION (AXIOS. POST) CATCH)
    // try {
    //   const response = await fetch("http://localhost:3001/api/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });
  
    //   const data = await response.json();
  
    //   if (response.ok) {
    //     //Successful Login
    //     setisLoggedIn(true);
    //     setLoginError(""); 
    //     //define this 
    //     console.log(data.message); //optional - display a success message
    //   } else {
    //     //Login failed
    //     setLoginError(data.message);
    //     console.log(data.message); //optional - display error message
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }



    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="start-time">Start Time:</label>
        <input
          type="datetime-local"
          id="start-time"
          value={startTime}
          onChange={handleStartTimeChange}
        />
      </div>

      <div>
        <label htmlFor="end-time">End Time:</label>
        <input
          type="datetime-local"
          id="end-time"
          value={endTime}
          onChange={handleEndTimeChange}
        />
      </div>

      <button type="submit"> Submit </button>
    </form>
  );
};

export default SleepForm;
