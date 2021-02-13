import React from "react";
function SearchBar(props) {
    const BarStyling = { width: "20rem", background: "#F2F1F9", opacity: "0.5", padding: "0.5rem", borderRadius: "30px" };
    return (

        <form onSubmit={(e) => {
            e.preventDefault()
            return props.submit(props.value)
        }} >
            <input
                style={BarStyling}
                type="search"
                value={props.value}
                placeholder={"search country"}
                list="places"
                onChange={props.valueOnChange}
            >
            </input>

            <button type='submit'></button>

            <datalist id='places'>
                {props.places.map((place) => {
                    return <option value={place.cityName}></option>
                })}
            </datalist>
        </ form>

    )
}
export default SearchBar