
// Создание класса FormValidator

export default class FormValidator {
  constructor(configSelecor, formElement) {
    this._configSelecor = configSelecor;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._configSelecor.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._configSelecor.submitButtonSelector);
  }


  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState(_inputList, _buttonElement, inactiveButtonClass) {
    if (this._hasInvalidInput(_inputList)) {
      this._buttonElement.setAttribute('disabled', true);
      this._buttonElement.classList.add(this._configSelecor.inactiveButtonClass);
    } else {
      this._buttonElement.removeAttribute('disabled');
      this._buttonElement.classList.remove(this._configSelecor.inactiveButtonClass);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._configSelecor.inputErrorClass);
    errorElement.classList.add(this._configSelecor.errorClass)
    errorElement.textContent = errorMessage;
  };


  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._configSelecor.inputErrorClass);
    errorElement.classList.remove(this._configSelecor.errorClass);
    errorElement.textContent = ''
  }

  _checkInputValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid;
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage)
    } else {
      inputElement.setCustomValidity("");
    }
    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage
      this._showInputError(inputElement, errorMessage)
    } else {
      this._hideInputError(inputElement)
    };
  };

  _setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', (evt) => {
        this._checkInputValidity(inputElement)
        this._toggleButtonState();
      });
    });

  }

  //добавлен метод очистки формы
  clearForm() {
    this._inputList.map((inputElement) => {
     return this._hideInputError(inputElement);
    })
    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners()
  }
}
