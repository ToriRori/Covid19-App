import axios from "axios";

const n = require('country-js');
class Search {
  constructor(inputValue = "") {
    this.inputValue = inputValue;
    this.coronaData = {};
    this.chart = [];
    this.key = "";
    this.country = "";
    this.error = false;
  }

  async getDataByUserLocation(country) {
    try {
      const key = n.search(country)[0].code;
      const url = `https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${key}&onlyCountries=true`
      this.coronaData = await axios(url).then(res => res.data[0]);
      this.key = key;
      this.country = country;
    } catch (err) {
      this.error = true;
      console.log(err);
    }
  }

  async getDataByCityName() {
    try {
      const key = n.search(this.inputValue)[0].code;
      const url = `https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${key}&onlyCountries=true`
      this.coronaData = await axios(url).then(res => res.data[0]);
      this.key = key;
      this.country = this.inputValue;
    } catch (err) {
      this.error = true;
      console.log(true);
    }
  }

  async getChartData() {
    try {
      const url = `https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso2=${this.key}&onlyCountries=true`
      this.chart = await axios(url).then(res => res.data[0]);
    } catch (err) {
      this.error = true;
      this.errorLog = err;
    }
  }
}

export default Search;
