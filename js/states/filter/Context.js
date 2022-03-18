import {
  FilterPopularityState,
  FilterTitleState,
  FilterDateState,
} from "./State.js";

class FilterContext {
  constructor() {
    this.states = [
      new FilterPopularityState(),
      new FilterTitleState(),
      new FilterDateState(),
    ];

    this.currentState = this.getInitialState();
  }

  getInitialState() {
    return this.states[0];
  }

  change(type) {
    this.currentState = this.states.filter(
      (state) => state.filterName === type
    )[0];

    console.log(`filter by ${this.currentState.filterName}`);
  }
}

export default FilterContext;
