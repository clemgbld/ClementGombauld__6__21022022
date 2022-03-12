// api import
import PhotographersApi from "../api/Api.js";

// models import
import Photographer from "../../models/Photographer.js";

class Home {
  constructor() {
    this.photographersApi = new PhotographersApi("/data/photographer.json");

    this.Photographers = [];
  }

  async fetchPhotographers() {
    const photographersData = await this.photographersApi.get();
    this.Photographers = photographersData.map(
      (photographerData) => new Photographer(photographerData)
    );
  }

  async init() {
    await this.fetchPhotographers();
  }
}

const app = new Home();

app.init();
