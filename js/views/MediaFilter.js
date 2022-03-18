import { POPULARITY, TITLE, DATE } from "../types/sorterTypes.js";

class MediaFilter {
  constructor(DropDownMenuContext, FilterContext) {
    this.$dropDownMenu = document.getElementById("dropdownMenu");
    this.$toggleButton = document.getElementById("dropdownMenuButton");
    this.$byRateButton = document.getElementById(POPULARITY);
    this.$byDateButton = document.getElementById(DATE);
    this.$byTitleButton = document.getElementById(TITLE);

    this.$arrow = document.querySelector(".dropdown__icon");
    this.$toggleButtonText = document.querySelector(".dropdown__text");

    this.DropDownMenuContext = DropDownMenuContext;
    this.FilterContext = FilterContext;
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

    //TODO: update the list of media

    // hide activefilter in the menu
    $activeFilter.classList.add("hidden");

    // show lastActiveFilter in the menu
    $lastActiveFilter.classList.remove("hidden");

    // update the current state
    this.FilterContext.change(filterName);

    // toggle the drop down menu
    this.toggleMenu();
  };

  allowFilter() {
    this.$byRateButton.addEventListener("click", () => this.filter(POPULARITY));
    this.$byDateButton.addEventListener("click", () => this.filter(DATE));
    this.$byTitleButton.addEventListener("click", () => this.filter(TITLE));
  }
}

export default MediaFilter;
