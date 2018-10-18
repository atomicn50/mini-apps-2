import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import Events from './Events.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  searchTerm: '',
  	  page: 1,
  	  events: [],
  	};
  	this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  	this.handleSearchBarSubmit = this.handleSearchBarSubmit.bind(this);
  	this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleSearchBarChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSearchBarSubmit() {
    this.getEvents();
  }

  handlePageClick(data) {
  	const page = data.selected;
  	this.setState({page: page + 1}, () => {
  	  this.getEvents();
  	})
  }

  getEvents() {
  	const { searchTerm, page } = this.state;
    axios.get(`/events?q=${searchTerm}&_page=${page}&_limit=10`)
      .then(response => response.data)
      .then(events => this.setState({events}))
      .catch(err => console.log(err));
  }

  render() {
  	return (
      <div>
      	<SearchBar 
      	  handleChange={this.handleSearchBarChange}
      	  handleSubmit={this.handleSearchBarSubmit} 
      	/>
      	<Events events={this.state.events} />
      	<div className="pagination">
      	  <ReactPaginate 
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={20}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
          />
        </div>
      </div>
  	);
  }
}

export default App;