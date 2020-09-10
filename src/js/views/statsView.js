import DOMElements from "../DOMSelectors";

export const renderCurrentCorona = data => {
  const cityName = data.country;
  const confirmed = data.coronaData.confirmed;
  const deaths = data.coronaData.deaths;
  const recovered = data.coronaData.recovered;

  const markup = `
    <h2>${cityName}</h2>
    <div class="corona_current_stats">
    <span>Confirmed: ${confirmed}</span>
    <span>Deaths: ${deaths}</span>
    <span>Recovered: ${recovered}</span>
    </div>
  `
  DOMElements.coronaCurrentContainer.insertAdjacentHTML("beforeend", markup);
}

export const renderCoronaChart = () => {
  const markup = `<canvas class="corona_chart_canvas" width="200" height="120"></canvas>`;
  DOMElements.chartContainer.insertAdjacentHTML("beforeend", markup);
}

export const resetCoronaView = () => {
  DOMElements.coronaCurrentContainer.innerHTML = "";
  DOMElements.chartContainer.innerHTML = "";
}

export const renderLoaders = () => {
  DOMElements.coronaCurrentContainer.innerHTML = `<div class="hourglass"></div>`;
  DOMElements.chartContainer.innerHTML = `<div class="hourglass"></div>`;
}

export const renderErrorMessage = () => {
  DOMElements.coronaCurrentContainer.innerHTML = `
  <div class="error_container"><p>Problem occurred during loading resources. Enter proper city name and try again</p></div>
  `;
  DOMElements.chartContainer.innerHTML = `
  <div class="error_container"><p>Problem occurred during loading resources. Enter proper city name and try again</p></div>
  `;
}
