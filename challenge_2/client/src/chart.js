import axios from 'axios';
import makeChart from './utils/chartGenerator.js';

let myChart;

axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(response => response.data.bpi)
  .then(data => makeChart(data, 'line', 'chart'))
  .catch(err => console.log(err));

export default myChart;