const dateSplitter = (date) => {
  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',    
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
  };
  const month = months[date.slice(5, 7)];
  const day = date.slice(8);
  return `${month} ${day}`;
}

const dateFormatter = (data) => {
  const dates = [];
  for (let date in data) {
    dates.push(dateSplitter(date));
  }
  return dates;
}

const priceFormatter = (data) => {
  const prices = [];
  for (let date in data) {
  	prices.push(data[date]);
  }
  return prices;
}

export {
  dateFormatter,
  priceFormatter,
}