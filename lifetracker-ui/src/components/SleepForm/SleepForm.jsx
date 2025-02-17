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
      {
        sleepEntries.map( sleepEntry => <h1 style={{ background: "black", color: "white", padding: "30px"}} >{sleepEntry.start_time}, {sleepEntry.end_time}</h1> )
      }
        </div>
      </form>
    </>
  );
};

export default SleepForm;
