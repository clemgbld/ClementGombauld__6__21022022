import { POPULARITY, TITLE, DATE } from "../types/sorterTypes.js";

import MediaTemplateFactory from "../factories/MediaTemplateFactory.js";
import ProxyMediaSorter from "../proxy/ProxyMediaSorter.js";

import { IMAGE, VIDEO } from "../types/mediatypes.js";

class MediaFilter {
  constructor(Medias, DropDownMenuContext, FilterContext) {
    this.$container = document.querySelector(".media__container");

    this.$dropDownMenu = document.getElementById("dropdownMenu");
    this.$toggleButton = document.getElementById("dropdownMenuButton");
    this.$byRateButton = document.getElementById(POPULARITY);
    this.$byDateButton = document.getElementById(DATE);
    this.$byTitleButton = document.getElementById(TITLE);

    this.$arrow = document.querySelector(".dropdown__icon");
    this.$toggleButtonText = document.querySelector(".dropdown__text");

    this.DropDownMenuContext = DropDownMenuContext;
    this.FilterContext = FilterContext;

    this.Medias = Medias;

    this.ProxyMediaSorter = new ProxyMediaSorter();

    this.sortAndShowCard(POPULARITY);
  }

  clearCardContainer() {
    this.$container.innerHTML = "";
  }

  sortAndShowCard(type) {
    console.log(type);

    this.Medias = this.ProxyMediaSorter.sorter(this.Medias, type).data;

    this.Medias.forEach((Media) => {
      const Template = Media.video
        ? new MediaTemplateFactory(Media, VIDEO)
        : new MediaTemplateFactory(Media, IMAGE);

      Template.createCardItem();
    });
  }

  toggleMenu = () => {
    this.DropDownMenuContext.change();

    this.$dropDownMenu.classList.toggle("hidden");

    this.$arrow.classList.toggle("dropdown__icon--rotate");

    this.$dropDownMenu.setAttribute(
      "aria-expanded",
      this.DropDownMenuContext.currentState.isOpen
    );
  };

  allowToggleMenu() {
    this.$toggleButton.addEventListener("click", this.toggleMenu);
  }

  filter = (filterName) => {
    const buttonArr = [
      this.$byRateButton,
      this.$byDateButton,
      this.$byTitleButton,
    ];
    const typeArr = [POPULARITY, DATE, TITLE];

    const $lastActiveFilter = buttonArr.filter(
      (_, index) =>
        this.FilterContext.currentState.filterName === typeArr[index]
    )[0];

    const $activeFilter = buttonArr.filter(
      (_, index) => filterName === typeArr[index]
    )[0];

    // change the content of the button by the content of the active filter
    this.$toggleButtonText.innerHTML = $activeFilter.dataset.listName;

    // hide activefilter in the menu
    $activeFilter.classList.add("hidden");

    // show lastActiveFilter in the menu
    $lastActiveFilter.classList.remove("hidden");

    // update the current state
    this.FilterContext.change(filterName);

    // toggle the drop down menu
    this.toggleMenu();

    // clear the dom
    this.clearCardContainer();

    // update the dom
    this.sortAndShowCard(filterName);
  };

  allowFilter() {
    this.$byRateButton.addEventListener("click", () => this.filter(POPULARITY));
    this.$byDateButton.addEventListener("click", () => this.filter(DATE));
    this.$byTitleButton.addEventListener("click", () => this.filter(TITLE));
  }
}

export default MediaFilter;
