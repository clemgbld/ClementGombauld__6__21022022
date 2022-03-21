class Info {
  constructor(allLikes, price) {
    this.$container = document.querySelector(".info");

    this.allLikes = allLikes;
    this.allIds = [];
    this.price = price;
  }

  createInfo() {
    const infos = `
        
        <div class="info__likes">
        <p class="info__allLikes">${this.allLikes}</p>
        <span class="info__heart">
        <ion-icon name="heart"></ion-icon>
        </span>
        </div>
       <p>${this.price}Є / jour </p> 
     
        `;

    this.$container.innerHTML = infos;
  }

  updateCounter(id) {
    if (!this.allIds.includes(id)) {
      this.allLikes++;
      this.allIds.push(id);
      return this.updateCounterView();
    }

    this.allLikes--;
    this.allIds = this.allIds.filter((el) => el !== id);
    this.updateCounterView();
  }

  updateCounterView() {
    const $allLikes = document.querySelector(".info__allLikes");

    $allLikes.innerHTML = `${this.allLikes}`;
  }
}

export default Info;
