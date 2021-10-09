import React from "react";
import styled from "styled-components";

const LocationLabelContainer = styled.div`
  min-width: max-content;
  max-width: 400;
  color: black;
  font-weight: border;
`;

function LocationLabel(props) {
  const icon = "http://openweathermap.org/img/wn/" + props.icon + "@2x.png";
  let country;
  if (props.city !== undefined) {
    country = <h2>{props.country}</h2>;
  } else {
    country = <h1>{props.country}</h1>;
  }
  return (
    <LocationLabelContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={icon} alt="icon" width="42" heigh="42" className="icon" />
        <h1>{props.city}</h1>
      </div>

      {country}
    </LocationLabelContainer>
  );
}
export default LocationLabel;
