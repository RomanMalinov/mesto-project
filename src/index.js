import './pages/index.css';

import {
  listContainerEl,
  temlateEl,
  popupProfile,
  popupAddNewCards,
  profileInfoEditButton,
  profileAddCardsButton,
  popupCards,
  popupCardsImage,
  popupCardsText,
  popups,
  formPopupProfile,
  nameInput,
  jobInput,
  popupProfileNameInput,
  popupProfilejobInput,
  formPopupNewCards,
  popupNewCardsNameInput,
  popupNewCardsLinkInput,
  popupFormBattonSave,
  popupImgAvatar,
  config,
  popupSelectorImage,
  formPopupAvatar
} from './components/constants.js'

import Card, { handleFormAddNewCard, addCard } from './components/card.js';

// import {
//   hasInvalidInput,
//   toggleButtonState,
//   showInputError,
//   hideInputError,
//   checkInputValidity,
//   setEventListeners,
//   enableValidation
// } from './components/validate.js';

import { FormValidator } from './components/validate.js';

import {
  closePopup,
  handleProfileFormSubmit,
  openPopup
} from './components/modal.js'

import { Api } from './components/api.js'
import { PopupWithImage } from './components/PopUpWithImage';
import Section from './components/Section';
import PopupWithForm from './components/PopupWithForm';
import { UserInfo } from './components/userInfo';





export let userId = null




/// --------------Артём



const api = new Api(config)

const imagePopup = new PopupWithImage('.popup_type_zoom-card');
// imagePopup передадим в Card как handleImageClick

const editAvatarPopup = new PopupWithForm('.popup_type_add__img-avatar');

const addNewCardPopup = new PopupWithForm('.popup_type_add_new-cards');

const editProfilePopup = new PopupWithForm('.popup_type_profile');




// доработать код когда будет UserInfo класс, этот код заменит Promise.all часть

api.initializeData()
.then(([user, initialCards]) => {

  user.setUserInfo();
  const userId = user.getUserInfo()._id;

    // nameInput.textContent = user.name;
    // jobInput.textContent = user.about;
    // popupImgAvatar.src = user.avatar;
    // userId = user._id
    // const newCards = initialCards.map(addCard);
    // listContainerEl.append(...newCards)

  const cardList = new Section({
    
  })


  })
  .catch(err => console.log(err))


// возможно, ненужный код

// export function likeClick(card, data){
//   let promise = null

//   if (card.isCardLiked()){
//     promise = api.removeLike(data._id)
//   } else{
//     promise = api.addLikeLike(data._id)
//   }
//   promise
//   .then(data => {
//     card.setLikeButtonState(data)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }

/// --------------Ниже старый код



Promise.all([api.getUserInfo(), api.getAllCards()])
  .then(([user, initialCards]) => {
    nameInput.textContent = user.name;
    jobInput.textContent = user.about;
    popupImgAvatar.src = user.avatar;
    userId = user._id
    const newCards = initialCards.map(addCard);
    listContainerEl.append(...newCards)
  })
  .catch(err => console.log(err))


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

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__form-input',
//   submitButtonSelector: '.popup__form-button-save',
//   inactiveButtonClass: 'button_inactive',
//   inputErrorClass: 'form__input-error',
//   errorClass: 'form__input-error_active'
// });

//селкторы вынесены в объект конфигурации
const configSelecor = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-button-save',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__input-error',
  errorClass: 'form__input-error_active'
};

// для каждой проверяемой формы создаем экземпляра класса
const profileFormValidator = new FormValidator(configSelecor, formPopupProfile)
profileFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(configSelecor, formPopupAvatar)
avatarFormValidator.enableValidation();

const newCardsFormValidator = new FormValidator(configSelecor, formPopupNewCards)
newCardsFormValidator.enableValidation();

//создание экземпляра класса c данными пользователя
// userInfo = new UserInfo({
//   selectorUserName: ;
//   selectorUserAbout: ;
// });
// //
