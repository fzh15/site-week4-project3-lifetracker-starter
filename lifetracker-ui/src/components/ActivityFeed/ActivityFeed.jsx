// import React from 'react'
// import "./ActivityFeed.css"

// function ActivityFeed() {
//   return (
//     <div>ActivityFeed</div>
//   )
// }

// export default ActivityFeed


import React from "react";
import { Link } from "react-router-dom";
import "./ActivityFeed.css"

const Activity = () => {
  return (
    <div className="activity-container">
      <h1>Activity Page</h1>

      <div className="activity-cards">
        <div className="activity-card">
          <h2>Tracked Hours of Sleep</h2>
          <p>Track and view your sleep activity here.</p>
          <Link to="/sleep/*">Go to Sleep Tracker</Link>
        </div>

        <div className="activity-card">
          <h2>Tracked Hours of Nutrition</h2>
          <p>Track and view your nutrition activity here.</p>
          <Link to="/nutrition/*">Go to Nutrition Tracker</Link>
        </div>

        <div className="activity-card">
          <h2>Tracked Hours of Exercise</h2>
          <p>Track and view your exercise activity here.</p>
          <Link to="/exercise/*">Go to Exercise Tracker</Link>
        </div>
      </div>
    </div>
  );
};

export default Activity;
