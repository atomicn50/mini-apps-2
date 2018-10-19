import Chart from 'chart.js';
import { priceFormatter, dateFormatter } from './dataFormatter'; 
import options from '../chartConfig';

const makeChart = (rawData, type, id) => {
  let myChart = new Chart(id, {
  type: type,
  data: {
    datasets: [{data: priceFormatter(rawData)}],
    labels: dateFormatter(rawData),
  },
  options: options,
});
  return myChart;
}

export default makeChart;
