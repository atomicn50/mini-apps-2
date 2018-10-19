const axios = require('axios');

exports.getDataForLatestMonth = (callback) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(response => callback(null, response))
    .catch(err => callback(err));
}

exports.getDataForSpecifiedMonths = (startMonth, endMonth, callback) => {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-${startMonth}-01&end=2018-${endMonth}-01`)
    .then(response => callback(null, response))
    .catch(err => callback(err));
}