class PhotographerHeaderTemplate {
  constructor(photographer, FormModalContext, FormModal) {
    this._photographer = photographer;

    this.$header = document.querySelector(".photographer-header");

    this.FormModalContext = FormModalContext;
    this.FormModal = FormModal;
  }

  displayForm() {
    const $btnForm = document.querySelector(".btn-form");

    const openModal = () => {
      if (this.FormModalContext.currentState?.isFirstLoad === false) {
        // those 3 methods enable the form to be create , close , and submitted
        this.FormModal.createForm();
        this.FormModal.shouldCloseForm();
        this.FormModal.onSubmit();

        this.FormModalContext.onFirstLoad();
      }

      this.FormModal.displayForm();

      this.FormModalContext.onOpen();
    };

    $btnForm.addEventListener("click", openModal);
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
