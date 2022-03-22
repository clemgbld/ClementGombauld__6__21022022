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
  }

  getInitialState() {
    if (this.states[0].isFirstLoad === false) {
      return this.states[0];
    }

    return ModalFormCloseState[2];
  }

  onFirstLoad() {
    console.log("modal first load");

    this.states[0].isFirstLoad = true;
    this.currentState = this.states.filter(
      (state) => state !== this.currentState
    )[0];
  }

  onOpen() {
    console.log("modal opened");

    this.currentState = this.states.filter(
      (state) => state !== this.currentState
    )[1];
  }

  onClose() {
    console.log("modal closed");

    this.currentState = this.states.filter(
      (state) => state !== this.currentState
    )[1];
  }
}

export default FormModalContext;
