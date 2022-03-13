import Page from "./Page.js";

import { HEADER } from "../types/photographerTypes.js";

import PhotographerHeaderTemplate from "../Template/PhotographerHeaderTemplate.js";

class PhotographerPage extends Page {
  constructor() {
    super();
  }

  getId() {
    const urlString = window.location.href.toLowerCase();
    const url = new URL(urlString);
    return +url.searchParams.get("id");
  }

  getPhotographer(id) {
    return this.Photographers.filter(
      (photographer) => photographer.id === id
    )[0];
  }

  async init() {
    await this.fetchPhotographers(HEADER);
    const id = this.getId();
    const photographerData = this.getPhotographer(id);
    const PhotographerHeader = new PhotographerHeaderTemplate(photographerData);

    PhotographerHeader.createPhotographerHeaderTemplate();
  }
}

const app = new PhotographerPage();

app.init();
