import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
`;

const SearchResult = styled.div`
  background-color: black;
  cursor: pointer;
  padding: 25px;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const SearchBarInput = styled.input`
  width: 20rem;
  height: 2rem;
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1rem;
  &:focus {
    opacity: 0.8;
    color: black;
    &::placeholder {
      color: black;
    }
  }
`;

const SearchResultsBox = styled.div`
  width: 20rem;
  border-radius: 5px;
  margin: 5px 0;
  position: absolute;
  max-height: 500px;
  overflow-y: auto;
`;
function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const [isResultBoxOpen, setIsResultBoxOpen] = useState(false);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        props.submit(searchValue);
        setIsResultBoxOpen(true);
        setSearchValue("");
      }}
      onBlur={() => setIsResultBoxOpen(false)}
    >
      <SearchBarInput
        type="search"
        value={searchValue}
        placeholder={"Search city ..."}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {isResultBoxOpen && (
        <SearchResultsBox>
          {props.places.map((place, index) => {
            return (
              <SearchResult
                onMouseDown={() => {
                  props.onLocationSelected(place.coordinatesModel);
                  setIsResultBoxOpen(false);
                }}
                key={index}
              >
                {place.cityName}
              </SearchResult>
            );
          })}
        </SearchResultsBox>
      )}
    </Form>
  );
}
export default SearchBar;
