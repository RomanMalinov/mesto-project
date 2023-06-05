import './pages/index.css';
import {
  listContainerEl, popupProfile, popupAddNewCards, profileInfoEditButton, profileAddCardsButton, popups, formPopupProfile, nameInput,
  jobInput, popupProfileNameInput, popupProfilejobInput, formPopupNewCards, popupNewCardsNameInput, popupNewCardsLinkInput, popupFormBattonSave
} from './components/constants.js'
import { initialCards, catOne, catTwo, catThree, catFour, catFive, catSix, addCard, renderCards } from './components/card.js';
import { hasInvalidInput, toggleButtonState, showInputError, hideInputError, checkInputValidity, setEventListeners, enableValidation } from './components/validate.js';


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-button-save',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__input-error',
  errorClass: 'form__input-error_active'
});
