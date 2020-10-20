import "./style.css";

import Card from "./js/card.js";

import CardList from "./js/cardlist.js";

import Api from "./js/api.js";

import PopupForm from "./js/popupform.js";

import PopupImage from "./js/popupimage.js";

import UserInfo from "./js/userinfo.js";

import FormValidator from "./js/formvalidator.js";

const preloader = document.querySelector(".preloader");
const serverError = document.querySelector(".server-error");
const placesList = document.querySelector(".places-list");
const placeCard = document.querySelector(".place-card");
const addingNewCardForm = document.forms.new;
const nameOfCard = document.forms.new.elements.name;
const linkOfCard = document.forms.new.elements.link;
const popUp = document.querySelector(".popup");
const popUpEdit = document.querySelector(".popup-edit");
const popUpImage = document.querySelector(".popup-image");
const popUpAvatar = document.querySelector(".popup-avatar");
const avatarForm = document.forms.avatarform;
const avatarUrl = document.forms.avatarform.elements.avatarurl;
const avatarButton = document.forms.avatarform.elements.avatarbutton;
const editButton = document.forms.editform.elements.savebutton;
const newCardButton = document.forms.new.elements.formbutton;
const userInfoButton = document.querySelector(".user-info__button");
const userInfoEditButton = document.querySelector(".user-info__edit-button");
const userInfoAvatar = document.querySelector(".user-info__photo");
const popUpCloseButton = document.querySelector(".popup__close");
const popUpEditCloseButton = document.querySelector(".popup-edit__close");
const popUpAvatarCloseButton = document.querySelector(".popup-avatar__close"); 
const popUpImageCloseButton = document.querySelector(".popup-image__close");
const popUpImageContent = document.querySelector(".popup-image__content");
const editForm = document.forms.editform;
const editingFormName = document.forms.editform.elements.username;
const editingFormInfo = document.forms.editform.elements.userinfo;
const userInfoName = document.querySelector(".user-info__name");
const userInfoJob = document.querySelector(".user-info__job");
const userInfoImage = document.querySelector(".user-info__photo");
const userNameValue = document.querySelector(".usernamevalue");
const userinfovalue = document.querySelector(".userinfovalue");
const urlError = document.querySelector(".urlvalue");
const address = "https://nomoreparties.co/";
const token = "ffcebfcb-da13-4128-9a59-a7a8b53b9926";
const id = "cohort8/";
const pathInfo = "users/me";
const pathAvatar = "users/me/avatar"
const pathCards = "cards/";
const likes = document.querySelector(".place-card__like-counter");
// const deleteIcon = document.querySelector(".place-card__delete-icon");
const profile = document.querySelector(".profile");
const myId = document.querySelector(".profile").getAttribute("myid");

const card = new Card();
const apiData = new Api(
  address,
  id,
  pathInfo,
  pathCards,
  pathAvatar,
  token
);
const userInfo = new UserInfo(
  editingFormName,
  editingFormInfo,
  userInfoJob,
  userInfoName,
  userInfoImage,
  popUpEdit,
  editForm,
  apiData,
  avatarUrl,
  popUpAvatar,
  profile
);
const popup = new PopupForm(
  userInfoButton,
  userInfoEditButton,
  popUpCloseButton,
  popUpEditCloseButton,
  popUp,
  popUpEdit,
  newCardButton,
  editButton,
  userNameValue,
  userinfovalue,
  userInfo,
  popUpAvatarCloseButton,
  popUpAvatar,
  userInfoAvatar,
  urlError
);
const popupImage = new PopupImage(
  popUpImage,
  popUpImageContent,
  popUpImageCloseButton
);
const cardListing = new CardList(
  placesList,
  apiData,
  popUp,
  addingNewCardForm,
  linkOfCard,
  nameOfCard,
  card,
  likes,
  placeCard,
  myId,
  preloader,
  serverError
  );
const editValidator = new FormValidator(
  editingFormName,
  editingFormInfo,
  editButton,
  editForm
);
const newCardValidator = new FormValidator(
  nameOfCard,
  linkOfCard,
  newCardButton,
  addingNewCardForm
);

const avatarValidator = new FormValidator(
  avatarUrl,
  avatarUrl,
  avatarButton,
  avatarForm
);

placesList.addEventListener("click", card.like);
placesList.addEventListener("click", (event) => card.remove(event));
placesList.addEventListener("click", (event) => popupImage.openImage(event));
addingNewCardForm.addEventListener("submit", (event) => cardListing.renderFromForm(event));
editForm.addEventListener("submit", (event) => userInfo.updateUserInfo(event));
avatarForm.addEventListener("submit", (event) => userInfo.updateUserAvatar(event));

userInfo.uploadUserInfo();
cardListing.renderFromArray(myId);
popup.openForm();
popup.closeForm();
popupImage.closeImage();
editValidator.setEventListeners();
newCardValidator.setEventListeners();
avatarValidator.setEventListeners();
