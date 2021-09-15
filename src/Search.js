import React, { useState } from "react";

// handleChange (onChange) here somewhere
// save input here
// handleSubmit (onSubmit) here somewhere
// pass input in submit state for search
// use submit state as search query for api.js
function Search() {
    // input value of search field
    const [inputValue, setInputValue] = useState("");
    const [submitValue, setSubmitValue] = useState("");

    // listens to target value in input field and adds to state
    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSubmitValue(inputValue);
        console.log(submitValue);
    };

    return (
        <div>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        placeholder="Movie Name"
                        onChange={handleChange}
                    />
                    <button>search</button>
                </form>
            </div>
        </div>
    );
}

export default Search;
