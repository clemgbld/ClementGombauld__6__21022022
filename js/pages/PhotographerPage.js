// bluePrint import
import Page from "./Page.js";

// types import
import { HEADER } from "../types/photographerTypes.js";
import { IMAGE, VIDEO } from "../types/mediatypes.js";
import { POPULARITY } from "../types/sorterTypes.js";

// views import
import MediaFilter from "../views/MediaFilter.js";

// template import
import PhotographerHeaderTemplate from "../Template/PhotographerHeaderTemplate.js";
import FormModal from "../Template/FormModal.js";

// context import
import FormModalContext from "../states/modalForm/Context.js";
import FilterContext from "../states/filter/Context.js";
import DropDownMenuContext from "../states/dropDownMenu/Context.js";

// Api import
import { MediasApi } from "../api/Api.js";

// factory import
import MediaFactory from "../factories/MediaFactory.js";

// import proxy
import ProxyMediaSorter from "../proxy/ProxyMediaSorter.js";

class PhotographerPage extends Page {
  constructor() {
    super();

    this.Medias = [];

    this.mediaApi = new MediasApi("/data/media.json");

    // context
    this.FormModalContext = new FormModalContext();
    this.DropDownMenuContext = new DropDownMenuContext();
    this.FilterContext = new FilterContext();

    // Proxy
    this.ProxyMediaSorter = new ProxyMediaSorter();
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

  filter(filterName) {
    this.Medias = this.ProxyMediaSorter.sorter(this.Medias, filterName);
  }

  async fetchMedias(photographerId) {
    const mediasData = await this.mediaApi.get();

    console.log(mediasData);

    const mediasDataFilterd = mediasData.media.filter(
      (mediaData) => photographerId === mediaData.photographerId
    );
    const mediasSortedByPopularity = this.ProxyMediaSorter.sorter(
      mediasDataFilterd,
      POPULARITY
    );

    this.Medias = mediasSortedByPopularity.data.map((mediaData) =>
      mediaData.video
        ? new MediaFactory(mediaData, VIDEO)
        : new MediaFactory(mediaData, IMAGE)
    );
  }

  async init() {
    await this.fetchPhotographers(HEADER);
    const id = this.getId();
    await this.fetchMedias(id);

    const MediaFilterItem = new MediaFilter(
      this.DropDownMenuContext,
      this.FilterContext
    );

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

    MediaFilterItem.allowToggleMenu();
    MediaFilterItem.allowFilter();
  }
}

const app = new PhotographerPage();

app.init();
