import { DropDownMenuOpenState, DropDownMenuCloseState } from "./State.js";

class DropDownMenuContext {
  constructor() {
    this.states = [new DropDownMenuCloseState(), new DropDownMenuOpenState()];

    this.currentState = this.getInitialState();

    console.log("dropdown menu close");
  }

  getInitialState() {
    return this.states[0];
  }

  change() {
    this.currentState = this.states.filter(
      (state) => state !== this.currentState
    )[0];

    this.currentState.isOpen === true
      ? console.log("dropdown menu opened")
      : console.log("dropdown menu closed");
  }
}

export default DropDownMenuContext;
