class Api {
  constructor(url) {
    this._url = url;
  }

  async get() {
    try {
      const res = await fetch(this._url);

      const data = await res.json();

      return data;
    } catch (err) {
      console.log("an error occurs", err);
    }
  }
}

class PhotographersApi extends Api {
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    return await this.get();
  }
}

export default PhotographersApi;

export class MediasApi extends Api {
  constructor(url) {
    super(url);
  }

  async getMedias() {
    return await this.get();
  }
}
