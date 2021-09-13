import React, { useState } from "react";

// handleChange (onChange) here somewhere
// save input here
// handleSubmit (onSubmit) here somewhere
// pass input in submit state for search
// use submit state as search query for api.js

function Search() {
    return (
        <div>
            <div>
                <form action="">
                    <input type="text" placeholder="Movie Name" />
                    <button>search</button>
                </form>
            </div>
        </div>
    );
}

export default Search;
