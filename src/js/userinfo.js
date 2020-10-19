export default class UserInfo {
  constructor(
    editingFormName,
    editingFormInfo,
    userInfoJob,
    userInfoName,
    userInfoImage,
    popUpEdit,
    editForm,
    api,
    avatarUrl,
    popUpAvatar,
    profile
  ) {
    this.editingFormName = editingFormName;
    this.editingFormInfo = editingFormInfo;
    this.userInfoJob = userInfoJob;
    this.userInfoName = userInfoName;
    this.userInfoImage = userInfoImage;
    this.popUpEdit = popUpEdit;
    this.editForm = editForm;
    this.api = api;
    this.avatarUrl =avatarUrl;
    this.popUpAvatar = popUpAvatar;
    this.profile = profile;
  }

  uploadUserInfo() {
    this.api.getUserInfo()
    .then(res => {
      this.userInfoName.textContent = res.name;
      this.userInfoJob.textContent = res.about;
      this.userInfoImage.style.backgroundImage = `url(${res.avatar})`;
      this.profile.setAttribute("myid", res._id);

      }
    ) 
    .catch(error =>
      console.log(`Ошибка: ${error.message}`));
  }

  setUserInfo() {
    this.editingFormName.value = this.userInfoName.textContent;
    this.editingFormInfo.value = this.userInfoJob.textContent;
  }
  
  updateUserInfo(event) {
    event.preventDefault();
    let nameinput = this.editingFormName.value;
    let infoinput = this.editingFormInfo.value;
    this.api.updateProfileInfo(nameinput, infoinput)
    .then(() => {
    this.userInfoName.textContent = nameinput;
    this.userInfoJob.textContent = infoinput;
    this.popUpEdit.classList.remove("popup-edit_is-opened");
    })
    .catch(error =>
      console.log(`Ошибка: ${error.message}`));
  }

  updateUserAvatar(event) {
    event.preventDefault();
    let avatar = this.avatarUrl.value;
    this.api.updateAvatar(avatar)
    .then(() => {
      this.userInfoImage.style.backgroundImage = `url(${avatar})`;
      this.popUpAvatar.classList.remove("popup-avatar_is-opened");
    })
    .catch(error =>
      console.log(`Ошибка: ${error.message}`));
  }
}


