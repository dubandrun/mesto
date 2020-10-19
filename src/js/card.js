export default class Card {
  create(link, name, likes, cardId, ownerId) {
    const template = `<div class="place-card" cardid=${cardId} ownerid=${ownerId}>
    <div class="place-card__image" style="background: url(${link}); background-size: cover; background-position: center">
      <button class="place-card__delete-icon"></button>
    </div>
    <div class="place-card__description">
      <h3 class="place-card__name">${name}</h3>
      <div class="place-card__like">
        <button class="place-card__like-icon"></button>
        <p class="place-card__like-counter">${likes}</p>
      </div>
    </div>
  </div>`;
    return template;
  }

  like(event) {
    if (event.target.classList.contains("place-card__like-icon"))
      event.target.classList.toggle("place-card__like-icon_liked");
  }

  remove(event) {
    if (event.target.classList.contains("place-card__delete-icon"))
    event.currentTarget.removeChild(event.target.closest(".place-card"));
  }
}


