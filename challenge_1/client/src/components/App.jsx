import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  searchTerm: '',
  	  events: [],
  	};
  	this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  	this.handleSearchBarSubmit = this.handleSearchBarSubmit.bind(this);
  }

  handleSearchBarChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSearchBarSubmit() {
  	const { searchTerm } = this.state;
    this.getEvents(searchTerm);
  }

  getEvents(query) {
    axios.get(`/events?q=${query}`)
      .then(response => response.data)
      .then(events => this.setState({
      	events
      }))
      .catch(err => console.log(err));
  }

  render() {
  	return (
      <div>
        <h1>Event Finder</h1>
      	<SearchBar 
      	  handleChange={this.handleSearchBarChange}
      	  handleSubmit={this.handleSearchBarSubmit} 
      	/>
      </div>
  	);
  }
}

export default App;