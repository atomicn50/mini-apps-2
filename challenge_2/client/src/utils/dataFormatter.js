const dateSplitter = (date) => {
  const months = {
    '09': 'September',
    '10': 'October',
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