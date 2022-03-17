import Photographer from "../models/Photographer.js";
import PhotographerHeader from "../models/PhotographerHeader.js";
import { ITEM, HEADER } from "../types/photographerTypes.js";

class PhotographerFactory {
  constructor(photographerData, type) {
    if (type === ITEM) return new Photographer(photographerData);

    if (type === HEADER) return new PhotographerHeader(photographerData);

    throw "Unknown type format";
  }
}

export default PhotographerFactory;
