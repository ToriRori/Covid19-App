import axios from "axios";

class Coordinations {
  async getUserLocationData() {
    try {
      const url = "https://extreme-ip-lookup.com/json/";
      const userLocation = await axios(url).then(res => res.data);
      this.coordination = userLocation;
    } catch (err) {
      console.log(err);
    }
  }
}

export default Coordinations;
