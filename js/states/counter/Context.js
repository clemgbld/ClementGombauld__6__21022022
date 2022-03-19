import {
  CounterisIncrementedState,
  CounterisNotIncrementedState,
} from "./State.js";

class CounterContext {
  constructor() {
    this.states = [
      new CounterisNotIncrementedState(),
      new CounterisIncrementedState(),
    ];

    this.currentState = this.getInitialState();
  }

  getInitialState() {
    return this.states[0];
  }

  change() {
    this.currentState = this.states.filter(
      (state) => state !== this.currentState
    )[0];

    this.currentState.isIncremented === true
      ? console.log("likes incremented")
      : console.log("likes decremented");
  }
}

export default CounterContext;
