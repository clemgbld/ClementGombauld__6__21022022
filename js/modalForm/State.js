export class ModalFormOpenState {
  constructor() {
    this._isOpen = true;
  }

  get isOpen() {
    return this._isOpen;
  }
}

export class ModalFormCloseState {
  constructor() {
    this._isOpen = false;
  }

  get isOpen() {
    return this._isOpen;
  }
}

export class ModalFirstLoadState {
  constructor() {
    this._isFirstLoad = false;
  }

  get isFirstLoad() {
    return this._isFirstLoad;
  }

  set isFirstLoad(boolean) {
    this._isFirstLoad = boolean;
  }
}
