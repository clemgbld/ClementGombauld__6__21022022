import { POPULARITY, TITLE, DATE } from "../types/sorterTypes.js";

class MediaSorter {
  static sorter(mediaData, orderBy) {
    console.log("Get from Compute");

    if (orderBy === POPULARITY) {
      const result = {
        key: orderBy,
        data: Array.from(mediaData).sort((a, b) => b.likes - a.likes),
      };

      return result;
    }

    if (orderBy === TITLE) {
      const result = {
        key: orderBy,
        data: Array.from(mediaData).sort((a, b) =>
          a.title < b.title ? -1 : 1
        ),
      };

      return result;
    }

    if (orderBy === DATE) {
      const result = {
        key: orderBy,
        data: Array.from(mediaData).sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        ),
      };

      return result;
    }

    throw "Unknown type";
  }
}

export default MediaSorter;
