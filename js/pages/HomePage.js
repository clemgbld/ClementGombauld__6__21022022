// api import
import PhotographersApi from "../api/Api.js";

// factory import
import PhotographerFactory from "../factories/PhotographerFactory.js";

// types import
import { ITEM } from "../types/photographerTypes.js";

// template import
import PhotographerItem from "../Template/PhotographerItem.js";

class Home {
  constructor() {
    this.Photographers = [];

    this.photographersApi = new PhotographersApi("/data/photographer.json");
  }

  async fetchPhotographers() {
    const photographersData = await this.photographersApi.get();
    this.Photographers = photographersData.photographers.map(
      (photographerData) => new PhotographerFactory(photographerData, ITEM)
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
