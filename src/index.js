
import './pages/index.css';
import './components/api.js'
import {
  listContainerEl, popupProfile, popupAddNewCards, profileInfoEditButton, profileAddCardsButton, popups, formPopupProfile, nameInput,
  jobInput, popupProfileNameInput, popupProfilejobInput, formPopupNewCards, popupNewCardsNameInput, popupNewCardsLinkInput, popupFormBattonSave
} from './components/constants.js'
import { handleFormAddNewCard} from './components/card.js';
import { hasInvalidInput, toggleButtonState, showInputError, hideInputError, checkInputValidity, setEventListeners, enableValidation } from './components/validate.js';
import { closePopup, handleProfileFormSubmit, openPopup } from './components/modal.js'
import  {onResponse, getAllTasks, addTask, additTasks, deleteTask} from './components/api.js'
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

formPopupNewCards.addEventListener('submit', handleFormAddNewCard);

profileAddCardsButton.addEventListener('click', () => openPopup(popupAddNewCards));

formPopupProfile.addEventListener('submit', handleProfileFormSubmit);

profileInfoEditButton.addEventListener('click', () => {
  popupProfileNameInput.value = nameInput.textContent;
  popupProfilejobInput.value = jobInput.textContent
  openPopup(popupProfile)
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-button-save',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__input-error',
  errorClass: 'form__input-error_active'
});
