export const getChartDays = data => {
  return Object.keys(data.chart.timeseries).map(item => {
    return item.toString().split("/").map(num => prefInt(num, 2)).join('/');
  });
}

function prefInt(number, len) {
  if (number.length < len)
    return (Array(len).join('0') + number).slice(-len);
  return number;
}
