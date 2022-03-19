import MediaSorter from "../sorter/sorter.js";

class ProxyMediaSorter {
  constructor() {
    this.cache = [];
  }

  sorter(medias, orderBy) {
    console.log(this.cache);

    const cachedResult = this.cache.find((el) => el.key === orderBy);

    if (cachedResult) {
      console.log("get from cache");

      return cachedResult;
    }

    const data = MediaSorter.sorter(medias, orderBy);

    console.log(data);

    this.cache.push(data);

    console.log(this.cache);

    return data;
  }
}

export default ProxyMediaSorter;
