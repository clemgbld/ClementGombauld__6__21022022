class MediaTemplate {
  constructor(Media) {
    this.$card = document.createElement("article");
    this.likes = Media.likes;
    this.title = Media.title;
    this.id = Media.id;
    this.$wrapper = document.querySelector(".media__container");
  }

  createCardItem() {
    const cardContent = `
      
      <a href="javascript:void(0)" class="card_media">
      ${
        this.video
          ? `<video aria-label=${this.title} class="card__video">
      <source src=${this.video} type="video/mp4" >
      </video>`
          : `<img class="card__image" src=${this.picture} alt=${this.title}/>`
      }
      </a>
      <div class="card__content">
      <h2 class="card__title">${this.title}</h2>
      <button class="card__btn"><span class="card__likes">${
        this.likes
      }</span> <span class="card__heart" aria-label="likes">
      <ion-icon name="heart"></ion-icon>
      </span>
      </button>
      </div>

      
      
     
      `;

    this.$card.classList.add("card");

    this.$card.innerHTML = cardContent;

    this.$wrapper.appendChild(this.$card);
  }
}

export class ImageTemplate extends MediaTemplate {
  constructor(Media) {
    super(Media);

    this.picture = Media.picture;
  }
}

export class VideoTemplate extends MediaTemplate {
  constructor(Media) {
    super(Media);

    this.video = Media.video;
  }
}
