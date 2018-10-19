import React from 'react';

const SearchBar = ({ handleChange, handleClick }) => (
  <div>
    <h2>Set Time Frame</h2>
    Start Month
	<select id="startMonth" onChange={handleChange}>
	  <option value="">Select Month</option>
	  <option value="01">January</option>
	  <option value="02">February</option>
	  <option value="03">March</option>
	  <option value="04">April</option>
	  <option value="05">May</option>
	  <option value="06">June</option>
	  <option value="07">July</option>
	  <option value="08">August</option>
	  <option value="09">September</option>
	  <option value="10">October</option>
	  <option value="11">November</option>
	  <option value="12">December</option>
	</select>
    <div>
      <br />
      End Month
      <select id="endMonth" onChange={handleChange}>
        <option value="">Select Month</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      </div>
    <div>
      <br />
      <button type="submit" onClick={handleClick}>Search</button>
    </div>
  </div>
);

export default SearchBar;
