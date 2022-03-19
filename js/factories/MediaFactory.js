import { Image, Video } from "../models/Media.js";
import { IMAGE, VIDEO } from "../types/mediatypes.js";

class MediaFactory {
  constructor(mediasData, photographerName, type) {
    if (type === IMAGE) return new Image(mediasData, photographerName);

    if (type === VIDEO) return new Video(mediasData, photographerName);

    throw "Unknown type format";
  }
}

export default MediaFactory;
