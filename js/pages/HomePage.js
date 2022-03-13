import Page from "./Page.js";

// types import
import { ITEM } from "../types/photographerTypes.js";

// template import
import PhotographerItem from "../Template/PhotographerItem.js";

class Home extends Page {
  constructor() {
    super();
  }

  async init() {
    await this.fetchPhotographers(ITEM);

    this.Photographers.forEach((photographer) => {
      const Template = new PhotographerItem(photographer);

      Template.createPhotographerItem();
    });
  }
}

const app = new Home();

app.init();
