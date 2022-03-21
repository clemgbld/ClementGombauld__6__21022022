import { VideoTemplate, ImageTemplate } from "../Template/MediaTemplate.js";
import { IMAGE, VIDEO } from "../types/mediatypes.js";

class MediaTemplateFactory {
  constructor(mediaData, CounterSubject, index, type) {
    if (type === IMAGE)
      return new ImageTemplate(mediaData, CounterSubject, index);

    if (type === VIDEO)
      return new VideoTemplate(mediaData, CounterSubject, index);

    throw "Unknown type format";
  }
}

export default MediaTemplateFactory;
