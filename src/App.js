import React, { useState } from "react";

function App() {
  // const date = new Date().toLocaleTimeString();
  // console.log(date);
  const [date,setDate]=useState(new Date().toLocaleTimeString());
  function getTime(){
    setDate(new Date().toLocaleTimeString());
  }
  setInterval(getTime,1000);
  return (
    <div className="App">
      <h1>{date}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
