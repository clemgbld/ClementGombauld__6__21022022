// api import
import PhotographersApi from "../api/Api.js";

// factory import
import PhotographerFactory from "../factories/PhotographerFactory.js";

class Page {
  constructor() {
    this.Photographers = [];

    this.photographersApi = new PhotographersApi("/data/photographer.json");
  }

  async fetchPhotographers(type) {
    const photographersData = await this.photographersApi.get();
    this.Photographers = photographersData.photographers.map(
      (photographerData) => new PhotographerFactory(photographerData, type)
    );
  }
}

export default Page;
