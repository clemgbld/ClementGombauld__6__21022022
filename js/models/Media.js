class Media {
  constructor(mediaData, photographerName) {
    this._id = mediaData.id;
    this._photographerId = mediaData.photographerId;
    this._title = mediaData.title;
    this._likes = mediaData.likes;
    this._initialLikes = mediaData.likes;
    this._date = mediaData.date;
    this._price = mediaData.price;
    this._name = photographerName;
  }

  get photographerId() {
    return this._photographerId;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get likes() {
    return this._likes;
  }

  set likes(likes) {
    this._likes = likes;
  }

  get initialLikes() {
    return this._initialLikes;
  }

  get date() {
    return this._date;
  }

  get price() {
    return this._price;
  }
}

export class Image extends Media {
  constructor(mediaData, photographerName) {
    super(mediaData, photographerName);

    this._image = mediaData.image;
  }

  get picture() {
    const firstname = this._name.split(" ")[0];

    return `/src/${firstname}/${this._image}`;
  }
}

export class Video extends Media {
  constructor(mediaData, photographerName) {
    super(mediaData, photographerName);

    this._video = mediaData.video;
  }

  get video() {
    const firstname = this._name.split(" ")[0];

    return `/src/${firstname}/${this._video}`;
  }
}
