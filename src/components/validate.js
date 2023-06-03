export { hasInvalidInput, toggleButtonState, showInputError, hideInputError, checkInputValidity, setEventListeners };

//Кнопки
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

//Валидация
const showInputError = (formElement, inputElement, errorMessage,) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input-error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active')
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input-error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage)
  } else {
    inputElement.setCustomValidity("");
  }
  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage
    showInputError(formElement, inputElement, errorMessage)
  } else {
    hideInputError(formElement, inputElement)
  };
};

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', (evt) => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });

};
