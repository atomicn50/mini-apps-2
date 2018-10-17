import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import Events from './Events.jsx';

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
  	const { events } = this.state;
  	return (
      <div>
        <h1>Event Finder</h1>
      	<SearchBar 
      	  handleChange={this.handleSearchBarChange}
      	  handleSubmit={this.handleSearchBarSubmit} 
      	/>
      	<h1>Events</h1>
      	<Events events={events} />
      </div>
  	);
  }
}

export default App;