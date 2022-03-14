class FormModal {
  constructor(photographerName) {
    this.photographerName = photographerName;
    this.$body = document.body;
    this.$modalWrapper = document.querySelector(".modal");
    this.$container = document
      .createElement("div")
      .classList.add("modal__container");
  }

  onOpenForm() {}

  onCloseForm() {}

  createForm() {
    const form = `
       <div class="modal__content">
        <h1 role="heading">Contactez-moi ${this.photographerName}</h1>
        <div class="modal__close" role="button" aria-label="Close Contact form">
         <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="white"/>
         </svg>
        </div>
       </div>
       <form action="#" method="GET">
        <div class="modal__form-group" id="3">
         <label for="firstname" class="modal__label">Prénom</label>
         <input id="firstname" class="modal__input" name="firstname" type="text" aria-label="firstname"  aria-labelby="3" requiered/>
        </div>
        <div class="modal__form-group" id="5">
         <label for="lastname" class="modal__label">Nom</label>
         <input id="lastname" class="modal__input" name="lastname" type="text" aria-label="lastname" aria-labelby="5" requiered/>
        </div>
        <div class="modal__form-group" id="7">
         <label for="email" class="modal__label">Email</label>
         <input id="email" class="modal__input" name="email" type="email" aria-label="email" aria-labelby="7" requiered/>
        </div>
        <div class="modal__form-group" id="9">
         <label for="message" class="modal__label">Votre message</label>
        <textarea id="message" class="modal__input" name="message" type="text" aria-label="your message" aria-labelby="9" requiered/>
        </div>
        <button role="button" type="submit" class="btn" aria-label="Send">Envoyer</button>
       </form>
      `;

    this.$container.innerHtml = form;
    this.$modalWrapper.appendChild(this.$container);
    this.$modalWrapper.style.display = "flex";
  }
}

export default FormModal;
