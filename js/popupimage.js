class PopupImage {
    constructor (
      popUpImage,
      popUpImageContent,
      popUpImageCloseButton  
    ) {
      
      this.popUpImage = popUpImage;
      this.popUpImageContent = popUpImageContent;
      this.popUpImageCloseButton = popUpImageCloseButton;
  }
    
    openImage(event) {
      if (event.target.classList.contains("place-card__image")) {
        let currentImage = event.target.getAttribute("style");
        this.popUpImage.classList.add("popup-image_is-opened");
        this.popUpImageContent.setAttribute("style", currentImage);
      }
    }
    closeImage() {
      this.popUpImageCloseButton.addEventListener("click", () =>
        this.popUpImage.classList.remove("popup-image_is-opened")
      );
    }
  }