export { closePopup, openPopup, handleProfileFormSubmit };
import {
popupProfile, popupAddNewCards, profileInfoEditButton, profileAddCardsButton,
popups, formPopupProfile, nameInput, jobInput, popupProfileNameInput, popupProfilejobInput
 } from './constants.js';
 import  {onResponse, getAllTasks, getTask, additTasks, deleteTask} from './api.js'


// функции открытия и закрытия модальных окон
// функции закрытия
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

// функции открытия
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

// функция закрытия попапа нажатием на Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

function handleProfileFormSubmit(evt) {
  additTasks({name: nameInput.textContent, about: jobInput.textContent})
  .then (updeteTask =>{
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    nameInput.textContent = popupProfileNameInput.value;
    jobInput.textContent = popupProfilejobInput.value;
    closePopup(popupProfile);
  })
}

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//   nameInput.textContent = popupProfileNameInput.value;
//   jobInput.textContent = popupProfilejobInput.value;
//   closePopup(popupProfile);
// }




