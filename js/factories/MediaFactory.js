import { Image, Video } from "../models/Media.js";
import { IMAGE, VIDEO } from "../types/mediatypes.js";

class MediaFactory {
  constructor(mediasData, type) {
    if (type === IMAGE) return new Image(mediasData);

    if (type === VIDEO) return new Video(mediasData);

    throw "Unknown type format";
  }
}

export default MediaFactory;
