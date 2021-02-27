import React, { useState } from "react";
import styled from "styled-components";

const SearchResult = styled.div`
  background-color: black;
  padding: 25px;
  &:hover {
    background-color: white;
    color: black;
  }
`;
function SearchBar(props) {
  const [searchValue, setSearchValue] = useState();
  const [isResultBoxOpen, setIsResultBoxOpen] = useState(false);
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    opacity: "0.5",
    padding: "0.5rem",
    borderRadius: "30px",
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.submit(searchValue);
        setIsResultBoxOpen(true);
      }}
    >
      <input
        style={BarStyling}
        type="search"
        value={searchValue}
        placeholder={"search country"}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>

      {isResultBoxOpen && (
        <div>
          {props.places.map((place, index) => {
            console.log(placee);
            return (
              <SearchResult
                onClick={() => {
                  props.onLocationSelected(place.coordinatesModel);
                  setIsResultBoxOpen(false);
                }}
                key={index}
              >
                {place.cityName}
              </SearchResult>
            );
          })}
        </div>
      )}
    </form>
  );
}
export default SearchBar;
