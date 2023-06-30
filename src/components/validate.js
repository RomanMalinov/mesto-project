// export { enableValidation };
export { FormValidator };


// Создание класса FormValidator
class FormValidator {
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


  enableValidation() {
    this._setEventListeners()
  }

}


// старый код до рефакторинга на ООП
//Кнопки
// function _hasInvalidInput(_inputList) {
//   return _inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   })
// };

// function _toggleButtonState(_inputList, _buttonElement, inactiveButtonClass) {
//   if (_hasInvalidInput(_inputList)) {
//     _buttonElement.setAttribute('disabled', true);
//     _buttonElement.classList.add(inactiveButtonClass);
//   } else {
//     _buttonElement.removeAttribute('disabled');
//     _buttonElement.classList.remove(inactiveButtonClass);
//   }
// }

// //Валидация
// const _showInputError = (_formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
//   const errorElement = _formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.classList.add(errorClass)
//   errorElement.textContent = errorMessage;
// };

// const _hideInputError = (_formElement, inputElement, inputErrorClass, errorClass) => {
//   const errorElement = _formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = '';
// }

// const _checkInputValidity = (_formElement, inputElement, inputErrorClass, errorClass) => {
//   const isInputNotValid = !inputElement.validity.valid;
//   if (inputElement.validity.patternMismatch) {
//     inputElement.setCustomValidity(inputElement.dataset.errorMessage)
//   } else {
//     inputElement.setCustomValidity("");
//   }
//   if (isInputNotValid) {
//     const errorMessage = inputElement.validationMessage
//     _showInputError(_formElement, inputElement, errorMessage, inputErrorClass, errorClass)
//   } else {
//     _hideInputError(_formElement, inputElement, inputErrorClass, errorClass)
//   };
// };

// const _setEventListeners = (_formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
//   _formElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//   });

//   const _inputList = Array.from(_formElement.querySelectorAll(inputSelector));
//   const _buttonElement = _formElement.querySelector(submitButtonSelector);

//   _inputList.forEach(inputElement => {
//     inputElement.addEventListener('input', (evt) => {
//       _checkInputValidity(_formElement, inputElement, inputErrorClass, errorClass);
//       _toggleButtonState(_inputList, _buttonElement, inactiveButtonClass);
//     });
//   });

// };

// const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass
// }) => {
//   const _formElements = document.querySelectorAll(formSelector);
//   const formList = Array.from(_formElements);
//   formList.forEach((_formElement) => {
//     _setEventListeners(_formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
//   });
// };

