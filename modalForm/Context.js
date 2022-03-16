import {
  ModalFormOpenState,
  ModalFormCloseState,
  ModalFirstLoadState,
} from "./State.js";

class FormModalContext {
  constructor() {
    this.states = [
      new ModalFirstLoadState(),
      new ModalFormOpenState(),
      new ModalFormCloseState(),
    ];
    this.currentState = this.getInitialState();

    console.log(this.currentState);
  }

  getInitialState() {
    if (this.states[0].isFirstLoad === false) {
      return this.states[0];
    }

    console.log("i am not here");

    return ModalFormCloseState[2];
  }

  onFirstLoad() {
    console.log("first load");

    this.states[0].isFirstLoad = true;
    this.currentState = this.states.filter(
      (state) => state !== this.currentState
    )[0];
  }

  onOpen() {
    console.log("opened");

    this.currentState = this.states.filter(
      (state) => state !== this.currentState
    )[1];
  }

  onClose() {
    console.log("closed");

    this.currentState = this.states.filter(
      (state) => state !== this.currentState
    )[1];
  }
}

export default FormModalContext;
