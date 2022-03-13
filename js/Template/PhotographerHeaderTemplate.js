class PhotographerHeaderTemplate {
  constructor(photographer) {
    this._photographer = photographer;

    this.$header = document.querySelector(".photographer-header");
  }

  displayForm() {
    const $btnForm = document.querySelector(".btn-form");
  }

  createPhotographerHeaderTemplate() {
    const photographerHeaderTemplate = `
          <div class="photographer-header__container">
           <div class="photographer-header__content">
            <h1 role="header" class="photographer-header__name">${this._photographer.name}</h1>
            <p role="text" class="photographer-header__city">${this._photographer.city}</p>
            <p role="text" class="photographer-header__tagline">${this._photographer.tagline}</p>
           </div>
           <button class="btn btn-form">Contactez-moi</button>
           <img class="photographer-header__img" role="img" src=${this._photographer.picture} alt=${this._photographer.name}/>
          </div>  
      `;

    this.$header.innerHTML = photographerHeaderTemplate;
  }
}

export default PhotographerHeaderTemplate;
