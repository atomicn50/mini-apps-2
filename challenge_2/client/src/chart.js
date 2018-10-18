import Chart from 'chart.js';
import axios from 'axios';

// axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
//   .then(response => {console.log(response)})

const ctx = 'chart';
const myChart = new Chart(ctx, {
  type: 'line',
  data: [],
  options: {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MMM YYYY'
            }
        }
      }]
    }
  }
});

export default myChart;
