import React, { useState, useEffect } from "react";

export const DateTimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(timer);
    }, []);
  
    return (
        <div style={{ textAlign: "right", marginRight: "2rem", marginTop: "0rem"}}>
       
       <b> <p>{currentTime.toLocaleString()}</p></b>
      </div>
    );
  };