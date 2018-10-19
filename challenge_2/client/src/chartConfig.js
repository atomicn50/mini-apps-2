const options = {
  title: {
    display: true,
    text: 'Bitcoin Prices for Past Month',
    fontSize: 20,
    fontColor: '#2C8952',
  },
  elements: {
    line: {
      tension: 0,
    }
  },
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Bitcoin Price (USD)',
        fontSize: 15,
      },
    }],
  },   
};

export default options;
