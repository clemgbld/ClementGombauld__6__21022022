class Info {
  constructor(allLikes, price) {
    this.$container = document.querySelector(".info");

    this.allLikes = allLikes;
    this.price = price;
  }

  createInfo() {
    const infos = `
        
        <div class="info__likes">
        <p>${this.allLikes}</p>
        <span class="info__heart">
        <ion-icon name="heart"></ion-icon>
        </span>
        </div>
       <p>${this.price}Є / jour </p> 
     
        `;

    this.$container.innerHTML = infos;
  }
}

export default Info;
