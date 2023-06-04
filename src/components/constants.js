export { listContainerEl, temlateEl, popupProfile, popupAddNewCards, profileInfoEditButton, profileAddCardsButton, popupCards,
  popupCardsImage, popupCardsText, popups, formPopupProfile, nameInput, jobInput, popupProfileNameInput,
   popupProfilejobInput, formPopupNewCards, popupNewCardsNameInput, popupNewCardsLinkInput };

// Переменные
const listContainerEl = document.querySelector('.elements');
const temlateEl = document.querySelector('.template')
// Открытие и закрытие модальных окон
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddNewCards = document.querySelector('.popup_type_add_new-cards');
const profileInfoEditButton = document.querySelector('.profile__info-edit-button');
const profileAddCardsButton = document.querySelector('.profile__add-button');
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
const popupNewCardsLinkInput = document.querySelector('.popup__form-input-link')
