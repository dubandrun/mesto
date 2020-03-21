import Api from "./api";
import Card from "./card";
import CardList from "./cardlist";
import FormValidator from "./formvalidator";
import PopupForm from "./popupform";
import PopupImage from "./popupimage";
import UserInfo from "./userinfo";

export default function constsAndListeners() {
  const placesList = document.querySelector(".places-list");
  const addingNewCardForm = document.forms.new;
  const nameOfCard = document.forms.new.elements.name;
  const linkOfCard = document.forms.new.elements.link;
  const popUp = document.querySelector(".popup");
  const editButton = document.forms.editform.elements.savebutton;
  const newCardButton = document.forms.new.elements.formbutton;
  const userInfoButton = document.querySelector(".user-info__button");
  const userInfoEditButton = document.querySelector(".user-info__edit-button");
  const popUpCloseButton = document.querySelector(".popup__close");
  const popUpEditCloseButton = document.querySelector(".popup-edit__close");
  const popUpImageCloseButton = document.querySelector(".popup-image__close");
  const popUpEdit = document.querySelector(".popup-edit");
  const popUpImage = document.querySelector(".popup-image");
  const popUpImageContent = document.querySelector(".popup-image__content");
  const editForm = document.forms.editform;
  const editingFormName = document.forms.editform.elements.username;
  const editingFormInfo = document.forms.editform.elements.userinfo;
  const userInfoName = document.querySelector(".user-info__name");
  const userInfoJob = document.querySelector(".user-info__job");
  const userInfoImage = document.querySelector(".user-info__photo");
  const userNameValue = document.querySelector(".usernamevalue");;
  const userinfovalue = document.querySelector(".userinfovalue");;
  const address = "https://praktikum.tk/";
  const token = "ffcebfcb-da13-4128-9a59-a7a8b53b9926";
  const id = "cohort8/";
  const pathInfo = "users/me";
  const pathCards = "cards";


  const card = new Card();
  const apiData = new Api(
    address,
    id,
    pathInfo,
    pathCards,
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
    apiData
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
    userInfo
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
    card
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

  placesList.addEventListener("click", card.like);
  placesList.addEventListener("click", (event) => card.remove(event));
  placesList.addEventListener("click", (event) => popupImage.openImage(event));
  addingNewCardForm.addEventListener("submit", (event) => { cardListing.renderFromForm(event) });
  editForm.addEventListener("submit", (event) => userInfo.updateUserInfo(event));

  cardListing.renderFromArray();
  userInfo.uploadUserInfo();
  popup.openForm();
  popup.closeForm();
  popupImage.closeImage();
  editValidator.setEventListeners();
  newCardValidator.setEventListeners();
  };

