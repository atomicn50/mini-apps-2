import React from 'react';

const SearchBar = ({ handleChange, handleSubmit }) => (
  <div>
  	<h1>Event Finder</h1>
    <input id="searchTerm" type="text" placeholder="Enter Search Term Here" onChange={handleChange} />
    <button type="submit" onClick={handleSubmit}>Search</button>
  </div>
);

export default SearchBar;
