import React from "react";
import styled from "styled-components";

const LocationLabelContainer = styled.div`
  min-width: max-content;
  max-width: 400;
  color: black;
  font-weight: border;
`;

function LocationLabel(props) {
  let country;
  if (props.city !== undefined) {
    country = <h2>{props.country}</h2>;
  } else {
    country = <h1>{props.country}</h1>;
  }
  return (
    <LocationLabelContainer>
      <h1>{props.city}</h1>
      {country}
    </LocationLabelContainer>
  );
}
export default LocationLabel;
