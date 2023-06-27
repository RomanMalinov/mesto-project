export { listContainerEl, temlateEl, popupProfile, popupAddNewCards, profileInfoEditButton, profileAddCardsButton, popupCards,
  popupCardsImage, popupCardsText, popups, formPopupProfile, nameInput, jobInput, popupProfileNameInput,
   popupProfilejobInput, formPopupNewCards, popupNewCardsNameInput, popupNewCardsLinkInput, popupFormBattonSave,
   formPopupAvatar, popupAvatarLinkInput, profileAddAvatarButton, popupAvatar, popupImgAvatar, popupFormBattonSaveProfile, popupFormBattonSavenewCards, popupFormBattonSaveAvatar };


// Конфиг для API
export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-25',
  headers: {
    'content-type': 'application/json',
    authorization: '4795c652-4f69-4cb4-b309-abc01e676f2c',
  }
}
// Переменные
const listContainerEl = document.querySelector('.elements');
const temlateEl = document.querySelector('.template')
// Открытие и закрытие модальных окон
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddNewCards = document.querySelector('.popup_type_add_new-cards');
const profileInfoEditButton = document.querySelector('.profile__info-edit-button');
const profileAddCardsButton = document.querySelector('.profile__add-button');
const profileAddAvatarButton = document.querySelector('.profile__avatar-update-button');
const popupAvatar = document.querySelector('.popup_type_add__img-avatar');

// Открытие попапа с картинкой
const popupCards = document.querySelector('.popup_type_zoom-card');
const popupCardsImage = popupCards.querySelector('.popup__container-img');
const popupCardsText = popupCards.querySelector('.popup__container-text');
// Все кнопки закрытия модальных окон
const popups = document.querySelectorAll('.popup');
// Редактирование имени и информации о себе
const formPopupProfile = document.forms['profile-form'];
const nameInput = document.querySelector('.profile__info-title');
const jobInput = document.querySelector('.profile__info-subtitle');
// Находим поля формы в DOM
const popupProfileNameInput = document.querySelector('.popup__form-input-name');
const popupProfilejobInput = document.querySelector('.popup__form-input-job');
//Форма добавления карточки
const formPopupNewCards = document.forms['card-form'];
const popupNewCardsNameInput = document.querySelector('.popup__form-input-img-name');
const popupNewCardsLinkInput = document.querySelector('.popup__form-input-link');
const popupFormBattonSave = formPopupNewCards.querySelector('.popup__form-button-save');
//aватар
const formPopupAvatar = document.forms['avatar-form'];
const popupAvatarLinkInput = document.querySelector('.popup__form-input-link-avatar');
const popupImgAvatar = document.querySelector('.profile__image');
// кнопки сохранении для ux
const popupFormBattonSaveProfile = document.querySelector('.popup__form-button-save-profile');
const popupFormBattonSavenewCards = document.querySelector('.popup__form-button-save-new-cards');
const popupFormBattonSaveAvatar = document.querySelector('.popup__form-button-save-avatar');


