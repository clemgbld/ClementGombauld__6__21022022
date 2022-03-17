import MediaSorter from "../sorter/sorter.js";

class ProxyMediaSorter {
  constructor() {
    this.cache = [];
  }

  sorter(medias, orderBy) {
    const cachedResult = this.cache.find((el) => el.key === orderBy);
    if (cachedResult) {
      console.log("get from cache");

      return cachedResult;
    }

    const data = MediaSorter.sorter(medias, orderBy);
    this.cache.push(data);

    return data;
  }
}

export default ProxyMediaSorter;
