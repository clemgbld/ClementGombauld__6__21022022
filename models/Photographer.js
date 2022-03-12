class Photographer {
  constructor(data) {
    this._name = data.name;
    this._id = data.id;
    this._city = data._city;
    this._tagline = data.tagline;
    this._price = data.price;
    this._portrait = data.portrait;
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

  get price() {
    return this._price;
  }

  get picture() {
    return `/src/photographersIdPhotos/${this._portrait}`;
  }
}

export default Photographer;
