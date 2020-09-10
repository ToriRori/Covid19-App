export const getCoronaDynamic = data => {
  return Object.values(data.chart.timeseries).map(item => {
    return item.confirmed - item.deaths - item.recovered;
  })
}
