import { VideoTemplate, ImageTemplate } from "../Template/MediaTemplate.js";
import { IMAGE, VIDEO } from "../types/mediatypes.js";

class MediaTemplateFactory {
  constructor(mediaData, type) {
    if (type === IMAGE) return new ImageTemplate(mediaData);

    if (type === VIDEO) return new VideoTemplate(mediaData);

    throw "Unknown type format";
  }
}

export default MediaTemplateFactory;
