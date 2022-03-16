// bluePrint import
import Page from "./Page.js";

// type import
import { HEADER } from "../types/photographerTypes.js";

// template import
import PhotographerHeaderTemplate from "../Template/PhotographerHeaderTemplate.js";
import FormModal from "../Template/FormModal.js";

// context import
import FormModalContext from "../../modalForm/Context.js";

class PhotographerPage extends Page {
  constructor() {
    super();

    this.FormModalContext = new FormModalContext();
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

    const FormModalPhotographer = new FormModal(
      photographerData.name,
      this.FormModalContext
    );

    const PhotographerHeader = new PhotographerHeaderTemplate(
      photographerData,
      this.FormModalContext,
      FormModalPhotographer
    );

    PhotographerHeader.createPhotographerHeaderTemplate();
    PhotographerHeader.displayForm();
  }
}

const app = new PhotographerPage();

app.init();
