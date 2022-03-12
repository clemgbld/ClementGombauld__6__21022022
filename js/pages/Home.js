// api import
import PhotographersApi from "../api/Api.js";

// models import
import Photographer from "../../models/Photographer.js";

// template import
import PhotographerItem from "../Template/PhotographerItem.js";

class Home {
  constructor() {
    this.photographersApi = new PhotographersApi("/data/photographer.json");

    this.Photographers = [];
  }

  async fetchPhotographers() {
    const photographersData = await this.photographersApi.get();
    this.Photographers = photographersData.photographers.map(
      (photographerData) => new Photographer(photographerData)
    );
  }

  async init() {
    await this.fetchPhotographers();

    this.Photographers.forEach((photographer) => {
      const Template = new PhotographerItem(photographer);

      Template.createPhotographerItem();
    });
  }
}

const app = new Home();

app.init();
