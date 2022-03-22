class CounterSubject {
  constructor(mediaLength) {
    this._observers = [];

    this.mediaLength = mediaLength;

    this.unRemovableObservers = 2;
  }

  subscribe(observer) {
    if (
      this._observers.length ===
      this.mediaLength + this.unRemovableObservers
    ) {
      this.autoUnsbscribe();
    }

    this._observers.push(observer);
  }

  unsubscribe(observer) {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }

  autoUnsbscribe() {
    this._observers = this._observers.slice(0, 2);
  }

  fire(action) {
    this._observers.forEach((observer) => observer.updateCounter(action));
  }
}

export default CounterSubject;
