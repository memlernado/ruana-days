import React from "react";
function LocationLabel(props) {
  let country;
  if(props.city !== undefined){
    country = <h2>{props.country}</h2>
  }
  else{
    country = <h1>{props.country}</h1>
  }
  return (
    <div>
      <h1 >{props.city}</h1>
      {country}
    </div>
  );
}
export default LocationLabel;
