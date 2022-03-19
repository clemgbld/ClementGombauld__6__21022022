class CounterSubject {
  constructor(mediaLength) {
    this._observers = [];

    this.mediaLength = mediaLength;

    this.unRemovableObservers = 2;
  }

  subscribe(observer) {
    this._observers.push(observer);

    if (this._observers.length > this.mediaLength + this.unRemovableObservers) {
      this.autoUnsbscribe();
    }
  }

  unsubscribe(observer) {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }

  autoUnsbscribe() {
    this._observers = this._observers.slice(2);
  }

  fire() {
    this._observers.forEach((observer) => observer.updateCounter());
  }
}

export default CounterSubject;
