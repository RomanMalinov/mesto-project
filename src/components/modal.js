export { closePopup, openPopup, handleProfileFormSubmit };
import {
  listContainerEl, temlateEl, popupProfile, popupAddNewCards, profileInfoEditButton, profileAddCardsButton, popupCards,
  popupCardsImage, popupCardsText, popups, formPopupProfile, nameInput, jobInput, popupProfileNameInput,
   popupProfilejobInput, formPopupNewCards, popupNewCardsNameInput, popupNewCardsLinkInput, popupFormBattonSave,
   formPopupAvatar, popupAvatarLinkInput, profileAddAvatarButton, popupAvatar, popupImgAvatar
 } from './constants.js';

 import { getAllCards,  getUserInfo, editProfile, addNewCard, deleteCard, likesCards, deleteLikesCards, changeAvatarImg } from './api.js'
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
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
 return editProfile({ name: popupProfileNameInput.value, about: popupProfilejobInput.value })
 .then(dataProfile => {
  nameInput.textContent = popupProfileNameInput.value;
  jobInput.textContent = popupProfilejobInput.value;
  closePopup(popupProfile);
 })
}
  function handleAvatarFormSubmit (evt) {
    evt.preventDefault()
    return changeAvatarImg ({ avatar: popupAvatarLinkInput.value })
    .then(avatarData => {
    popupImgAvatar.src = avatarData.avatar;
   closePopup(popupAvatar);
    })
   }


profileAddAvatarButton.addEventListener('click', () => openPopup(popupAvatar));

 formPopupAvatar.addEventListener('submit', handleAvatarFormSubmit);
// //
