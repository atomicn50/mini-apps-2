const axios = require('axios');

const route = (startMonth, endMonth, year) => {
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${year}-${startMonth}-01&end=${year}-${endMonth}-01`;
}

exports.getDataForSpecifiedMonths = (startMonth, endMonth, year, callback) => {
  axios.get(route(startMonth, endMonth, year))
    .then(response => callback(null, response))
    .catch(err => callback(err));
}