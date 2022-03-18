import { POPULARITY, TITLE, DATE } from "../../types/sorterTypes.js";

export class FilterPopularityState {
  constructor() {
    this._filterName = POPULARITY;
  }

  get filterName() {
    return this._filterName;
  }
}

export class FilterTitleState {
    constructor() {
      this._filterName = TITLE;
    }
  
    get filterName() {
      return this._filterName;
    }
  }

  export class FilterDateState {
    constructor() {
      this._filterName = DATE;
    }
  
    get filterName() {
      return this._filterName;
    }
  }
