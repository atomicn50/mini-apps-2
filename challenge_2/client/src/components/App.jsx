import React from 'react';
import axios from 'axios';
import makeChart from '../utils/chartGenerator';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  startMonth: '09',
  	  endMonth: '10',
      year: '2018',
  	};
  	this.handleChange = this.handleChange.bind(this);
  	this.handleClick = this.handleClick.bind(this);
    this.renderChart = this.renderChart.bind(this);
  }

  componentDidMount() {
	  this.renderChart(this.state.startMonth, this.state.endMonth, this.state.year);
  }

  renderChart(startMonth, endMonth, year) {
  	axios.get('/api/bitcoin', {
      params : {
        startMonth,
        endMonth,
        year,
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
  	this.renderChart(this.state.startMonth, this.state.endMonth, this.state.year);
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
