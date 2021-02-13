import React from "react";
import "../index.css";
function Day(props) {
  const icon = "http://openweathermap.org/img/wn/" + props.icon + "@2x.png";
  return (
    <div className="day">
       <h1 className="m">
        {props.temp} {props.ruana}
      </h1> 
      <img src={icon} alt="icon" width="42" heigh="42" className="icon" />
      <h1>{props.weekDay}</h1>
      <h3>
        {props.month} {props.day}
      </h3>
    </div>
  );
}
export default Day;
