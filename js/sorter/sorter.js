import { POPULARITY, TITLE, DATE } from "../types/sorterTypes.js";

class MediaSorter {
  static sorter(mediaData, orderBy) {
    console.log("Get from Compute");

    switch (orderBy) {
      case POPULARITY:
        return {
          key: orderBy,
          data: mediaData.sort((a, b) => b.likes - a.likes),
        };
      case TITLE:
        return {
          key: orderBy,
          data: mediaData.sort((a, b) => a.title - b.title),
        };

      case DATE:
        return {
          key: orderBy,
          data: mediaData.sort((a, b) => new Date(a.date) - new Date(b.date)),
        };

      default:
        throw "Unknown type of sort";
    }
  }
}

export default MediaSorter;
