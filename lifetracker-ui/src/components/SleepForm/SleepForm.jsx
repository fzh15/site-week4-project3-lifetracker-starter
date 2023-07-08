import React, { useState, useEffect } from "react";
import "./SleepForm.css";
import axios from "axios";

const SleepForm = ({ userId }) => {
  // State variables to store the start and end times
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");
  const [LoggedError, setLoginError] = useState("");
  const [sleepEntries, setSleepEntries] = useState([]);
  const [SleepData, setSleepData] = useState([]);

  const handleStartTimeChange = (e) => {
    // Event handler for start time change
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    // Event handler for end time change
    setEndTime(e.target.value);
  };

  // Fetch sleep entries using axios.get
  const fetchSleepEntries = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/sleep");
      setSleepEntries(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch sleep data using axios.get
  const fetchSleepData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/sleep");
      setSleepData(response.data);
    } catch (error) {
      console.error("Error fetchSleepData: ", error);
    }
  };

  //mkae use effect that queries sleep data
  // useEffect(() => {
  //   const SleepData = () => {
  //     // make axios call axios.get
  //     // get the endpoint (end time and start time)
  //     // set useState for SleepData
  //     //log it in html w/ Sleepdata variable

  //     if (

  //       )
  //        {

  //       if (     )
  //       {

  //       } else {

  //       }
  //     }
  //   };

  //   checkLoggedIn();
  // }, []);
  // Form submit handler
  const handleSubmit = async (e) => {
    // Send a POST request to add a new sleep entr
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/sleep", {
        start_time,
        end_time,
        user_id: userId,
      });

      // Clear form inputs and error state
      setStartTime("");
      setEndTime("");
      setLoginError("");

      // Fetch updated sleep entries & sleep data
      fetchSleepEntries();
      fetchSleepData();

      console.log(response.data.message); //  a success message
    } catch (error) {
      console.error("Error:", error);
      setLoginError("Error occurred during submission");
    }
  };

  useEffect(() => {
    // Fetch initial sleep entries + sleep data
    fetchSleepEntries();
    fetchSleepData();
  }, []);

  // axios.post HERE-----
  // try {
  //   const response = await fetch("http://localhost:3001/api/sleep", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ start_time, end_time, userId  }),
  //     //user_id
  //   });

  //   const data = await response.json();

  //     //define this
  //     console.log(data); //optional - display a success message

  //     //Login failed
  //     setLoginError(data.message);
  //     console.log(data.message); //optional - display error message

  // } catch (error) {
  //   console.error("Error:", error);
  // }

  // axios.get HERE-----

  console.log("user id: ", userId);
  console.log("Start Time:", start_time);
  console.log("End Time:", end_time);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="start-time">Start Time:</label>
          <input
            type="datetime-local"
            id="start-time"
            value={start_time}
            onChange={handleStartTimeChange}
          />
        </div>

        <div>
          <label htmlFor="end-time">End Time:</label>
          <input
            type="datetime-local"
            id="end-time"
            value={end_time}
            onChange={handleEndTimeChange}
          />
        </div>

        <button type="submit"> Submit </button>
      </form>

      <form>
        <div className="renderedtablelist">
          <h1>Sleep Log</h1>
          <p> Start Time: {start_time} </p>
          <p> End Time: {end_time} </p>
        </div>
      </form>
      {
        sleepEntries.map( sleepEntry => <h1 style={{ background: "black", color: "white", padding: "30px"}} >{sleepEntry.start_time}, {sleepEntry.end_time}</h1> )
      }
    </>
  );
};

export default SleepForm;

{
  /* <h2>Sleep Entries</h2>
<ul>
  {sleepEntries.map((entry) => (
    <li key={entry.id}>
      Start Time: {entry.start_time} - End Time: {entry.end_time}
    </li>
  ))}
</ul>

<h2>Sleep Data</h2>
<ul>
  {SleepData.map((data) => (
    <li key={data.id}>
      {/* Display Sleep Data */
}
//     </li>
//   ))}
// </ul> */}
