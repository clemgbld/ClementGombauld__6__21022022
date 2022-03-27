class LightBox {
  constructor(Medias) {
    this.$body = document.body;
    this.$closeButton = document.querySelector(".lightbox__close");
    this.$previousButton = document.querySelector(".lightbox__previous");
    this.$nextButton = document.querySelector(".lightbox__next");

    this.$lightbox = document.querySelector(".lightbox");
    this.$lightboxMediaContainer = document.querySelector(".lightbox__media");

    this.Medias = Medias;

    this.mediasLength = this.Medias.length;

    this.init();
  }

  previousSlide() {
    const previousIndex =
      +this.$lightboxMediaContainer.getAttribute("data-slide") - 1;

    const index = previousIndex < 0 ? this.mediasLength - 1 : previousIndex;

    const mediaContent = `
    ${
      this.Medias[index].video
        ? `<video aria-label=${this.Medias[index].title} class="lightbox__video" controls>
    <source src="${this.Medias[index].video}" type="video/mp4" >
    </video>`
        : `<img class="lightbox__img" src=${this.Medias[index].picture} alt="${this.Medias[index].title}"/>`
    }
    <h2 class="lightbox__title">${this.Medias[index].title}</h2>
    `;

    this.$lightboxMediaContainer.innerHTML = mediaContent;

    this.$lightboxMediaContainer.setAttribute("data-slide", `${index}`);
  }

  nextSlide() {
    const nextIndex =
      +this.$lightboxMediaContainer.getAttribute("data-slide") + 1;

    const index = nextIndex > this.mediasLength - 1 ? 0 : nextIndex;

    const mediaContent = `
      ${
        this.Medias[index].video
          ? `<video aria-label="${this.Medias[index].title}" class="lightbox__video" controls>
      <source src=${this.Medias[index].video} type="video/mp4" >
      </video>`
          : `<img class="lightbox__img" src="${this.Medias[index].picture}" alt="${this.Medias[index].title}"/>`
      }
      <h2 class="lightbox__title">${this.Medias[index].title}</h2>
      `;

    this.$lightboxMediaContainer.innerHTML = mediaContent;

    this.$lightboxMediaContainer.setAttribute("data-slide", `${index}`);
  }

  closeLightbox() {
    this.$body.style.overflow = "scroll";
    this.$lightbox.classList.add("hidden");
  }

  init() {
    const closeLightbox = () => {
      this.closeLightbox();
    };

    const closeLightboxEscape = (e) => {
      if (e.key === "Escape" && !this.$lightbox.classList.contains("hidden")) {
        this.closeLightbox();
      }
    };

    const nextSlide = () => {
      this.nextSlide();
    };

    const nextSlideArrow = (e) => {
      if (
        e.key === "ArrowRight" &&
        !this.$lightbox.classList.contains("hidden")
      ) {
        nextSlide();
      }
    };

    const previousSlide = () => {
      this.previousSlide();
    };

    const previousSlideArrow = (e) => {
      if (
        e.key === "ArrowLeft" &&
        !this.$lightbox.classList.contains("hidden")
      ) {
        this.previousSlide();
      }
    };

    this.$closeButton.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", (e) => closeLightboxEscape(e));

    this.$nextButton.addEventListener("click", nextSlide);
    document.addEventListener("keydown", (e) => nextSlideArrow(e));

    this.$previousButton.addEventListener("click", previousSlide);

    document.addEventListener("keydown", (e) => previousSlideArrow(e));
  }

  updateMedias(Medias) {
    this.Medias = Medias;
  }
}

export default LightBox;
