import React from "react";
import "../index.css";

function Day(props) {
  const icon = "http://openweathermap.org/img/wn/" + props.icon + "@2x.png";
  return (
    <div className="day">
      <div className="container">
        {/* <h1 className="icon">{props.ruana}</h1> */}
        <img src={icon} alt="icon" width="42" heigh="42" className="icon" />
        <h1 className="temp">{props.temp}</h1>
      </div>

      <h1 className="weekDay">{props.weekDay}</h1>
      <h3>
        {props.month} {props.day}
      </h3>
    </div>
  );
}
export default Day;
