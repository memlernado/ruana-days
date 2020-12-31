import React from "react";
function LocationLabel(props) {
  return (
    <div>
      <h1>{props.city}</h1>
      <h2>{props.country}</h2>
    </div>
  );
}
export default LocationLabel;
