export class DropDownMenuOpenState {
  constructor() {
    this._isOpen = true;
  }

  get isOpen() {
    return this._isOpen;
  }
}

export class DropDownMenuCloseState {
  constructor() {
    this._isOpen = false;
  }

  get isOpen() {
    return this._isOpen;
  }
}
