export default class PopupForm {
  constructor(
    userInfoButton,
    userInfoEditButton,
    popUpCloseButton,
    popUpEditCloseButton,
    popUp,
    popUpEdit,
    submitNew,
    submitEdit,
    nameError,
    infoError,
    userInfo,
    popUpAvatarCloseButton,
    popUpAvatar,
    userInfoAvatar,
    urlError
  ) {
    this.userInfoButton = userInfoButton;
    this.userInfoEditButton = userInfoEditButton;
    this.popUpCloseButton = popUpCloseButton;
    this.popUpEditCloseButton = popUpEditCloseButton;
    this.popUp = popUp;
    this.popUpEdit = popUpEdit;
    this.submitNew = submitNew;
    this.submitEdit = submitEdit;
    this.nameError = nameError;
    this.infoError = infoError;
    this.userInfo = userInfo;
    this.popUpAvatarCloseButton = popUpAvatarCloseButton;
    this.popUpAvatar = popUpAvatar;
    this.userInfoAvatar = userInfoAvatar;
    this.urlError= urlError;
  }

  openForm() {
    this.userInfoButton.addEventListener("click", () => {
      this.popUp.classList.add("popup_is-opened");
      this.submitNew.setAttribute("disabled", true);
      this.submitNew.classList.remove("button_active");
    }
    );
    this.userInfoEditButton.addEventListener("click", () => {
      this.userInfo.setUserInfo();
      this.popUpEdit.classList.add("popup-edit_is-opened");
      this.submitEdit.classList.add("button_active");
      this.submitEdit.removeAttribute("disabled");
      this.nameError.textContent = " ";
      this.infoError.textContent = " ";
    }
    );
    this.userInfoAvatar.addEventListener("click", () => {
      this.popUpAvatar.classList.add("popup-avatar_is-opened");
      this.urlError.textContent = " ";
    }
    )
  }

  closeForm() {
    this.popUpCloseButton.addEventListener("click", () =>
      this.popUp.classList.remove("popup_is-opened")
    );
    this.popUpEditCloseButton.addEventListener("click", () =>
      this.popUpEdit.classList.remove("popup-edit_is-opened")
    );
    this.popUpAvatarCloseButton.addEventListener("click", () =>
      this.popUpAvatar.classList.remove("popup-avatar_is-opened")
    );
  }
}
