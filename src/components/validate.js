// export { enableValidation };
export { FormValidator };


// Создание класса FormValidator
class FormValidator {
  constructor(configSelecor, formElement) {
    this.configSelecor = configSelecor;
    this.formElement = formElement;
    this.inputList = Array.from(this.formElement.querySelectorAll(this.configSelecor.inputSelector));
    this.buttonElement = this.formElement.querySelector(this.configSelecor.submitButtonSelector);
  }


  hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (this.hasInvalidInput(inputList)) {
      this.buttonElement.setAttribute('disabled', true);
      this.buttonElement.classList.add(this.configSelecor.inactiveButtonClass);
    } else {
      this.buttonElement.removeAttribute('disabled');
      this.buttonElement.classList.remove(this.configSelecor.inactiveButtonClass);
    }
  }

  showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.configSelecor.inputErrorClass);
    errorElement.classList.add(this.configSelecor.errorClass)
    errorElement.textContent = errorMessage;
  };


  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.configSelecor.inputErrorClass);
    errorElement.classList.remove(this.configSelecor.errorClass);
    errorElement.textContent = ''
  }

  checkInputValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid;
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage)
    } else {
      inputElement.setCustomValidity("");
    }
    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage
      this.showInputError(inputElement, errorMessage)
    } else {
      this.hideInputError(inputElement)
    };
  };

  setEventListeners() {
    this.formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this.inputList.forEach(inputElement => {
      inputElement.addEventListener('input', (evt) => {
        this.checkInputValidity(inputElement)
        this.toggleButtonState();
      });
    });

  }


  enableValidation() {
    this.setEventListeners()
  }

}


// старый код до рефакторинга на ООП
//Кнопки
// function hasInvalidInput(inputList) {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   })
// };

// function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.setAttribute('disabled', true);
//     buttonElement.classList.add(inactiveButtonClass);
//   } else {
//     buttonElement.removeAttribute('disabled');
//     buttonElement.classList.remove(inactiveButtonClass);
//   }
// }

// //Валидация
// const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.classList.add(errorClass)
//   errorElement.textContent = errorMessage;
// };

// const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = '';
// }

// const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
//   const isInputNotValid = !inputElement.validity.valid;
//   if (inputElement.validity.patternMismatch) {
//     inputElement.setCustomValidity(inputElement.dataset.errorMessage)
//   } else {
//     inputElement.setCustomValidity("");
//   }
//   if (isInputNotValid) {
//     const errorMessage = inputElement.validationMessage
//     showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass)
//   } else {
//     hideInputError(formElement, inputElement, inputErrorClass, errorClass)
//   };
// };

// const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
//   formElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//   });

//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   const buttonElement = formElement.querySelector(submitButtonSelector);

//   inputList.forEach(inputElement => {
//     inputElement.addEventListener('input', (evt) => {
//       checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
//       toggleButtonState(inputList, buttonElement, inactiveButtonClass);
//     });
//   });

// };

// const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass
// }) => {
//   const formElements = document.querySelectorAll(formSelector);
//   const formList = Array.from(formElements);
//   formList.forEach((formElement) => {
//     setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
//   });
// };

