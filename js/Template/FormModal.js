class FormModal {
  constructor(photographerName, FormModalContext) {
    this.photographerName = photographerName;
    this.$body = document.body;
    this.$main = document.querySelector("main");
    this.$modalWrapper = document.querySelector(".modal");

    this.FormModalContext = FormModalContext;
  }

  closeModal(that) {
    that.$main.setAttribute("aria-hidden", false);
    that.$modalWrapper.setAttribute("aria-hidden", true);
    that.$body.style.overflow = "scroll";
    that.$modalWrapper.style.display = "none";
    that.FormModalContext.onClose();
  }

  displayForm() {
    this.$main.setAttribute("aria-hidden", true);
    this.$modalWrapper.setAttribute("aria-hidden", false);
    this.$body.style.overflow = "hidden";
    this.$modalWrapper.style.display = "flex";
  }

  shouldCloseForm() {
    const $closeBtn = document.querySelector(".modal__close");

    const that = this;

    const onCloseModal = () => {
      this.closeModal(that);
    };

    $closeBtn.addEventListener("click", onCloseModal);

    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        this.$modalWrapper.getAttribute("aria-hidden") === "false"
      ) {
        onCloseModal();
      }
    });
  }

  onSubmit() {
    const formEl = document.querySelector(".modal__form");
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const formValidation = (e) => {
      e.preventDefault();

      const that = this;

      console.log("firstname", firstname.value);
      console.log("lastname", lastname.value);
      console.log("email", email.value);
      console.log("message", message.value);
      formEl.reset();
      this.closeModal(that);
    };

    formEl.addEventListener("submit", formValidation);
  }

  createForm() {
    const form = `
    <div class="modal__container">
       <div class="modal__content">
        <h1 class="modal__heading" role="heading">Contactez-moi ${this.photographerName}</h1>
        <button class="modal__close" role="button" aria-label="Close Contact form">
         <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="#fff"/>
         </svg>
        </button>
       </div>
       <form class="modal__form" action="#" method="GET">
        <div class="modal__form-group" id="3">
         <label for="firstname" class="modal__label">Prénom</label>
         <input id="firstname" class="modal__input" name="firstname" type="text" aria-label="firstname"  aria-labelby="3" required/>
        </div>
        <div class="modal__form-group" id="5">
         <label for="lastname" class="modal__label">Nom</label>
         <input id="lastname" class="modal__input" name="lastname" type="text" aria-label="lastname" aria-labelby="5" required/>
        </div>
        <div class="modal__form-group" id="7">
         <label for="email" class="modal__label">Email</label>
         <input id="email" class="modal__input" name="email" type="email" aria-label="email" aria-labelby="7" required/>
        </div>
        <div class="modal__form-group" id="9">
         <label for="message" class="modal__label">Votre message</label>
        <textarea id="message" class="modal__text" name="message" type="text" aria-label="your message" aria-labelby="9" required></textarea>
        </div>
        <button role="button" type="submit" class="btn" aria-label="Send">Envoyer</button>
       </form>
       </div>
      `;

    this.$modalWrapper.innerHTML = form;
    this.displayForm();
  }
}

export default FormModal;
