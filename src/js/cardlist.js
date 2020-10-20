export default class CardList {
  constructor(
    container,
    api,
    popUp,
    addingNewCardForm,
    linkOfCard,
    nameOfCard,
    card,
    likes,
    placeCard,
    id,
    preloader,
    serverError
  ) {
    this.container = container;
    this.api = api;
    this.popUp = popUp;
    this.addingNewCardForm = addingNewCardForm;
    this.linkOfCard = linkOfCard;
    this.nameOfCard = nameOfCard;
    this.card = card;
    this.likes = likes;
    this.placeCard = placeCard;
    this.id = id;
    this.preloader = preloader;
    this.serverError = serverError;
  }

  addcard(cardtemplate) {
    this.container.insertAdjacentHTML("beforeEnd", cardtemplate);
  }

  setPreloader(loading) {
    if (loading) {
      this.preloader.classList.remove("hidden");
    } else {
      this.preloader.classList.add("hidden");
    } 
  }
  setError(error) {
    if (error)  this.serverError.classList.remove("hidden");
  }

  renderFromArray() {
    this.setPreloader(true);
    this.api.getCards()
      .then(res => {
        for (let data of res) {
          const ownerId = data.owner._id;
          const cardId = data._id;
          const likes = Object.keys(data.likes).length;
          const cardFromArray = this.card.create(data.link, data.name, likes, cardId, ownerId);
          this.addcard(cardFromArray); 
          if (data.owner._id !== document.querySelector(".profile").getAttribute("myid")) {
            document.querySelector(".place-card__delete-icon").remove();     
          };
          this.setPreloader(false);
        }
      })
      .catch(error => {
        this.setPreloader(false);
        this.setError(true);
        console.log(`Ошибка: ${error.message}`)
      });
  }
  
  renderFromForm(event) {
    event.preventDefault();
    let link = this.linkOfCard.value;
    let name = this.nameOfCard.value;
    let likes = 0;
    const cardFromFrom = this.card.create(link, name, likes);
    this.api.uploadFromForm(link, name)
    .then(() => {
      this.addcard(cardFromFrom);
      this.popUp.classList.remove("popup_is-opened");
      this.addingNewCardForm.reset();
    })    
  }

}


