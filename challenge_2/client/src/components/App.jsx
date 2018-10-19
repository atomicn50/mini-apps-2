import React from 'react';
import axios from 'axios';
import makeChart from '../utils/chartGenerator';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  startMonth: '',
  	  endMonth: '',
  	};
  	this.handleChange = this.handleChange.bind(this);
  	this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
	this.renderChart();
  }

  renderChart() {
  	axios.get('/api/bitcoin')
	  .then(response => response.data)
	  .then(data => makeChart(data, 'line', 'chart'))
	  .catch(err => console.log(err));
  }

  renderNewChart() {
    const { startMonth, endMonth } = this.state;
    axios.get('/api/bitcoin/search', {
      params: {
      	startMonth,
      	endMonth,
      }
    })
      .then(response => response.data)
      .then(data => makeChart(data, 'line', 'chart'))
      .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleClick() {
  	this.renderNewChart();
  }

  render() {
  	return (
  	  <div>
        <canvas id="chart" height="400" width="1000"></canvas>
  	    <SearchBar 
  	      handleChange={this.handleChange} 
  	      handleClick={this.handleClick}
  	    />
      </div>  
  	);
  }
}

export default App;
