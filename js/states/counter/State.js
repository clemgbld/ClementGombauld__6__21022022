export class CounterisIncrementedState {
  constructor() {
    this._isIncremented = true;
  }

  get isIncremented() {
    return this._isIncremented;
  }
}

export class CounterisNotIncrementedState {
  constructor() {
    this._isIncremented = false;
  }

  get isIncremented() {
    return this._isIncremented;
  }
}
