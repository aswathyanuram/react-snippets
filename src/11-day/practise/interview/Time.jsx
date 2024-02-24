import React, { useEffect, useState } from "react";

export default function Time() {
  const getDateFormat = (date) => {
    // Extract hours, minutes, seconds, and AM/PM indicator
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Add leading zeros to minutes and seconds if needed
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Concatenate all parts into the desired format
    const formattedTime =
      hours + ":" + formattedMinutes + ":" + formattedSeconds + " " + ampm;
    return formattedTime;
  };

  const [time, setTime] = useState(getDateFormat(new Date()));
  const [color, setColor] = useState("red");

  //First FORM
  useEffect(() => {
    setInterval(() => {
      setTime(getDateFormat(new Date()));
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <label>Pick a Color: </label>
        <select
          onChange={(e) => {
            console.log(e.target.value);
            const value = e.target.value; //MUG UP
            setColor(value);
          }}
        >
          <option value="red">Red</option>
          <option>Green</option>
          <option>Blue</option>
        </select>
      </div>
      <div style={{ color: color }}>{time}</div>
    </div>
  );
}
