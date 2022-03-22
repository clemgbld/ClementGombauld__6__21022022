class PhotographerHeader {
  constructor(data) {
    this._name = data.name;
    this._id = data.id;
    this._city = data.city;
    this._tagline = data.tagline;
    this._portrait = data.portrait;
    this._price = data.price;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get city() {
    return this._city;
  }

  get tagline() {
    return this._tagline;
  }

  get picture() {
    return `/src/photographersIDPhotos/${this._portrait}`;
  }

  get price() {
    return this._price;
  }
}

export default PhotographerHeader;
