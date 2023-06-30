// export { closePopup, openPopup, handleProfileFormSubmit };
// import {
//   listContainerEl, temlateEl, popupProfile, popupAddNewCards, profileInfoEditButton, profileAddCardsButton, popupCards,
//   popupCardsImage, popupCardsText, popups, formPopupProfile, nameInput, jobInput, popupProfileNameInput,
//   popupProfilejobInput, formPopupNewCards, popupNewCardsNameInput, popupNewCardsLinkInput, popupFormBattonSave,
//   formPopupAvatar, popupAvatarLinkInput, profileAddAvatarButton, popupAvatar, popupImgAvatar, popupFormBattonSaveProfile, popupFormBattonSavenewCards, popupFormBattonSaveAvatar
// } from './constants.js';
// import { setStatusButton } from './utils.js'
// import { Api } from './api.js';
// import { api } from './card.js';
// // функции открытия и закрытия модальных окон
// // функции закрытия

// // три функции перенесены в класс popup, после рефакторинга ООH удалить
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEscape);
// }

// // функции открытия
// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEscape);
// }

// // функция закрытия попапа нажатием на Esc
// function closeByEscape(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened')
//     closePopup(openedPopup);
//   }
// }



// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   setStatusButton({ buttonEl: popupFormBattonSaveProfile, text: 'Сохраняем..' })
//   return api.editProfile({ name: popupProfileNameInput.value, about: popupProfilejobInput.value })
//     .then(dataProfile => {
//       nameInput.textContent = popupProfileNameInput.value;
//       jobInput.textContent = popupProfilejobInput.value;
//       closePopup(popupProfile);
//     })
//     .catch(err => console.log(err))
//     .finally(() => {
//       setStatusButton({ buttonEl: popupFormBattonSaveProfile, text: 'Сохранить' })
//     })
// }
// function handleAvatarFormSubmit(evt) {
//   evt.preventDefault()
//   setStatusButton({ buttonEl: popupFormBattonSaveAvatar, text: 'Сохраняем..' })
//   popupFormBattonSave.textContent = 'Сохранение...'
//   return api.changeAvatarImg({ avatar: popupAvatarLinkInput.value })
//     .then(avatarData => {
//       popupImgAvatar.src = avatarData.avatar;
//       closePopup(popupAvatar);
//     })
//     .catch(err => console.log(err))
//     .finally(() => {
//       setStatusButton({ buttonEl: popupFormBattonSaveAvatar, text: 'Сохранить' })
//     })
// }


// profileAddAvatarButton.addEventListener('click', () => openPopup(popupAvatar));

// formPopupAvatar.addEventListener('submit', handleAvatarFormSubmit);
// // //
