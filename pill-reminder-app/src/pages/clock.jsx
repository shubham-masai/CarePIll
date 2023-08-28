import React, { useState, useEffect } from "react";
import "./Clock.css";
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="clock">
      <div
        className="hour_hand"
        style={{
          transform: `rotateZ(${time.getHours() * 30}deg)`
        }}
      />
      <div
        className="min_hand"
        style={{
          transform: `rotateZ(${time.getMinutes() * 6}deg)`
        }}
      />
      <div
        className="sec_hand"
        style={{
          transform: `rotateZ(${time.getSeconds() * 6}deg)`
        }}
      />
      <span className="twelve">12</span>
      <span className="one">1</span>
      <span className="two">2</span>
      <span className="three">3</span>
      <span className="four">4</span>
      <span className="five">5</span>
      <span className="six">6</span>
      <span className="seven">7</span>
      <span className="eight">8</span>
      <span className="nine">9</span>
      <span className="ten">10</span>
      <span className="eleven">11</span>
    </div>
  );
}

export default Clock;