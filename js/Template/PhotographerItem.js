class PhotographerItem {
  constructor(photographer) {
    this._photographer = photographer;

    this.$container = document.querySelector(".photographer");
  }

  createPhotographerItem() {
    const photographerItem = `
      <article class="photographer__container">
      <div class="photographer__wrapper">
      <a class="photographer__link" href="/photographer.html?${this._photographer.id}">
      <img class="photographer__img" role="img link" src=${this._photographer.picture} alt=${this._photographer.name}/>
      <h2 class="photographer__name" role="link">${this._photographer.name}</h2>
      </a>
      <h3 class="photographer__city">${this._photographer.city}</h3>
      <p class="photographer__tagline">${this._photographer.tagline}</p>
      <p class="photographer__price">${this._photographer.price}</p>
      </div>
      </article>
      `;

    this.$container.innerHTML += photographerItem;
  }
}

export default PhotographerItem;
