import Search from "./js/models/Search";
import Coordinations from "./js/models/Coordinations";
import DOMElements from "./js/DOMSelectors";
import Chart from "chart.js";
import {
  renderCurrentCorona,
  resetCoronaView,
  renderCoronaChart,
  renderLoaders,
  renderErrorMessage
} from "./js/views/statsView";
import {getChartDays} from "./js/utils/getChartDays";
import {getCoronaDynamic} from "./js/utils/getCoronaDynamic";
import { chartOptions } from "./js/utils/getChartOptions";
import "./styles/style.sass";

const state = {};

const initialSearchingController = async () => {
  renderLoaders();
  state.userLocation = new Coordinations();
  state.coronaData = new Search();
  await state.userLocation.getUserLocationData()
  await state.coronaData.getDataByUserLocation(state.userLocation.coordination.country);
  await state.coronaData.getChartData();
  handleControllers();
};

const searchController = async () => {
  const inputValue = DOMElements.searchInput.value;
  if (inputValue.trim().length === 0) return;
  resetCoronaView();
  console.log('reset');
  renderLoaders();
  console.log('render');
  state.coronaData = new Search(inputValue);
  console.log(state.coronaData);
  await state.coronaData.getDataByCityName();
  await state.coronaData.getChartData();
  handleControllers();
};

const handleControllers = () => {
  resetCoronaView();
  if (!state.coronaData.error) {
    currentCoronaController();
    chartController();
  } else {
    renderErrorMessage();
  }
};

const currentCoronaController = () => {
  renderCurrentCorona(state.coronaData);
};

const chartController = () => {
  const chartDays = getChartDays(state.coronaData);
  const chartValues = getCoronaDynamic(state.coronaData);
  renderCoronaChart();
  const canvas = [...DOMElements.chartContainer.children];
  const ctx = canvas[0].getContext("2d");
  const options = chartOptions(chartDays, chartValues);
  new Chart(ctx, options);
  Chart.defaults.global.defaultFontColor = "#ffffff";
};

DOMElements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  searchController();
});

initialSearchingController();
