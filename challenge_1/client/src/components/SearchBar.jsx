import React from 'react';

const SearchBar = ({ handleChange, handleSubmit }) => (
  <div>
    <input id="searchTerm" type="text" placeholder="Enter event name here" onChange={handleChange} />
    <button type="submit" onClick={handleSubmit}>Search</button>
  </div>
);

export default SearchBar;
