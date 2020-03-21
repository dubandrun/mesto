class CardList {
  constructor(
    container,
    api,
    popUp,
    addingNewCardForm,
    linkOfCard,
    nameOfCard,
    card
  ) {
    this.container = container;
    this.api = api;
    this.popUp = popUp;
    this.addingNewCardForm = addingNewCardForm;
    this.linkOfCard = linkOfCard;
    this.nameOfCard = nameOfCard;
    this.card = card;
  }

  addcard(cardtemplate) {
    this.container.insertAdjacentHTML("beforeEnd", cardtemplate);
  }

  renderFromArray() {
    this.api.getCards()
      .then(res => {
        for (let data of res) {
          const cardFromArray = this.card.create(data.link, data.name);
          this.addcard(cardFromArray);
        }
      })
      .catch(error => 
        console.log(`Ошибка: ${error.message}`));
  }

  renderFromForm(event) {
    event.preventDefault();
    const cardFromFrom = this.card.create(this.linkOfCard.value, this.nameOfCard.value);
    this.addcard(cardFromFrom);
    this.popUp.classList.remove("popup_is-opened");
    this.addingNewCardForm.reset();
  }
}


