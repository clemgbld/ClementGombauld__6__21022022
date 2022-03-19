// bluePrint import
import Page from "./Page.js";

// types import
import { HEADER } from "../types/photographerTypes.js";
import { IMAGE, VIDEO } from "../types/mediatypes.js";

// views import
import MediaFilter from "../Template/MediaFilter.js";

// template import
import PhotographerHeaderTemplate from "../Template/PhotographerHeaderTemplate.js";
import FormModal from "../Template/FormModal.js";
import Info from "../Template/Info.js";

// context import
import FormModalContext from "../states/modalForm/Context.js";
import FilterContext from "../states/filter/Context.js";
import DropDownMenuContext from "../states/dropDownMenu/Context.js";

// Api import
import { MediasApi } from "../api/Api.js";

// factory import
import MediaFactory from "../factories/MediaFactory.js";

class PhotographerPage extends Page {
  constructor() {
    super();

    this.Medias = [];
    this.allLikes = 0;

    this.mediaApi = new MediasApi("/data/media.json");

    // context
    this.FormModalContext = new FormModalContext();
    this.DropDownMenuContext = new DropDownMenuContext();
    this.FilterContext = new FilterContext();
  }

  getAllLikes(medias) {
    this.allLikes = medias.reduce((acc, curr) => acc + curr.likes, 0);
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

  async fetchMedias(photographerId, photographerName) {
    const { media } = await this.mediaApi.get();

    const mediasDataFilterd = media.filter(
      (mediaData) => photographerId === mediaData.photographerId
    );

    this.getAllLikes(mediasDataFilterd);

    this.Medias = mediasDataFilterd.map((mediaData) =>
      mediaData.video
        ? new MediaFactory(mediaData, photographerName, VIDEO)
        : new MediaFactory(mediaData, photographerName, IMAGE)
    );
  }

  async init() {
    await this.fetchPhotographers(HEADER);
    const id = this.getId();

    const photographerData = this.getPhotographer(id);

    console.log(photographerData);

    await this.fetchMedias(id, photographerData.name);

    const MediaFilterItem = new MediaFilter(
      this.Medias,
      this.DropDownMenuContext,
      this.FilterContext
    );

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

    MediaFilterItem.allowToggleMenu();
    MediaFilterItem.allowFilter();

    const InfoBottom = new Info(this.allLikes, photographerData.price);

    InfoBottom.createInfo();
  }
}

const app = new PhotographerPage();

app.init();
