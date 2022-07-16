import React, { useState } from "react";

function App() {

  const now = new Date().toLocaleTimeString();

  // time is dynamically updated value by setTime function
  // useState(now) defines starting position for time
  const [time, setTime] = useState(now);

  // updateTime will create new const newTime with the new current time 
  // and setTime() function will increase it dynamically
  function updateTime(){
    const newTime = new Date().toLocaleTimeString();    
    setTime(newTime);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );

}

export default App;
