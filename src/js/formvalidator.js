export default class FormValidator {
  constructor(
    firstInput,
    secondInput,
    submit,
    form
  ) {
    this.firstInput = firstInput;
    this.secondInput = secondInput;
    this.submit = submit;
    this.form = form;
  }

  checkInputValidity() {
    const errorElement = document.querySelector(`#error-${event.target.id}`);
    if (!event.target.checkValidity()) {
      errorElement.classList.add("error_active");
      errorElement.textContent = event.target.validationMessage;
    } else {
      errorElement.classList.remove("error_active");
      errorElement.textContent = " ";
    }
  }

  setSubmitButtonState() {
    if (
      !(this.firstInput.validity.valid &
      this.secondInput.validity.valid)
      ) {
      this.submit.setAttribute("disabled", true);
      this.submit.classList.remove("button_active");
    } else {
      this.submit.removeAttribute("disabled");
      this.submit.classList.add("button_active");
    }
  }

  setEventListeners() {
    this.form.addEventListener("input", this.setSubmitButtonState.bind(this));
    this.firstInput.addEventListener("input", this.checkInputValidity);
    this.secondInput.addEventListener("input", this.checkInputValidity);
  }
}
