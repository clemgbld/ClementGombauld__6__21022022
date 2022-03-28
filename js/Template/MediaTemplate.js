class MediaTemplate {
  constructor(Media, CounterSubject, index) {
    this.$body = document.body;
    this.$closeButton = document.querySelector(".lightbox__close");

    this.$lightbox = document.querySelector(".lightbox");
    this.$lightboxMediaContainer = document.querySelector(".lightbox__media");

    this.$card = document.createElement("article");
    this.likes = Media.likes;
    this.initialLikes = Media.initialLikes;
    this.title = Media.title;
    this.id = Media.id;
    this.$wrapper = document.querySelector(".media__container");

    this.CounterSubject = CounterSubject;

    this.CounterSubject.subscribe(this);

    this.index = index;
  }

  openLightBox() {
    this.$body.setAttribute("aria-hidden", 'true');
    this.$body.style.overflow = "hidden";
    this.$lightbox.classList.remove("hidden");
    this.$lightboxMediaContainer.setAttribute("data-slide", `${this.index}`);


    const mediaContent = `
    ${
      this.video
        ? `<video aria-label="${this.title}" class="lightbox__video" controls>
    <source src="${this.video}" type="video/mp4" >
    </video>`
        : `<img class="lightbox__img" src="${this.picture}" alt="${this.title}"/>`
    }
    <h2 class="lightbox__title">${this.title}</h2>
    `;

    this.$lightboxMediaContainer.innerHTML = mediaContent;

    this.$closeButton.focus();
  }

  createCardItem() {
    const cardContent = `
      
      <a href="javascript:void(0)" class="card_media" id="media-${this.id}">
      ${
        this.video
          ? `<video aria-label="${this.title}" class="card__video">
      <source src="${this.video}" type="video/mp4" >
      </video>`
          : `<img class="card__image" src="${this.picture}" alt="${this.title}"/>`
      }
      </a>
      <div class="card__content">
      <h2 class="card__title">${this.title}</h2>
      <button class="card__btn"  id="likes-${
        this.id
      }" ><span class="card__likes">${this.likes}</span> 
      <ion-icon name="heart" class="card__heart" aria-label="likes"></ion-icon>
      
      </button>
      </div>
      `;

    this.$card.classList.add("card");

    this.$card.innerHTML = cardContent;

    this.$wrapper.appendChild(this.$card);

    const $likesButton = document.getElementById(`likes-${this.id}`);

    $likesButton.addEventListener("click", (e) => {
      if (e.target.id === `likes-${this.id}`) {
        const targetId = +e.target.id.split("-")[1];
        return this.CounterSubject.fire(targetId);
      }

      const targetId = +e.target.parentNode.id.split("-")[1];
      this.CounterSubject.fire(targetId);
    });

    const $media = document.getElementById(`media-${this.id}`);

    const openLightBox = () => {
      this.openLightBox();
    };

    $media.addEventListener("click", openLightBox);
  }

  updateCounter(id) {
    if (id !== this.id) return;

    if (this.initialLikes === this.likes) {
      this.likes++;

      return this.updateCounterView();
    }

    this.likes--;

    this.updateCounterView();
  }

  updateCounterView() {
    const $likesButton = document.getElementById(`likes-${this.id}`);

    const $likesNumber = $likesButton.querySelector(".card__likes");

    $likesNumber.innerHTML = `${this.likes}`;
  }
}

export class ImageTemplate extends MediaTemplate {
  constructor(Media, CounterSubject, index) {
    super(Media, CounterSubject, index);

    this.picture = Media.picture;
  }
}

export class VideoTemplate extends MediaTemplate {
  constructor(Media, CounterSubject, index) {
    super(Media, CounterSubject, index);

    this.video = Media.video;
  }
}
