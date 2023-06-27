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
  config
} from './components/constants.js'

import Card, { handleFormAddNewCard, addCard } from './components/card.js';

import {
  hasInvalidInput,
  toggleButtonState,
  showInputError,
  hideInputError,
  checkInputValidity,
  setEventListeners,
  enableValidation
} from './components/validate.js';

import {
  closePopup,
  handleProfileFormSubmit,
  openPopup
} from './components/modal.js'

import { Api } from './components/api.js'

export let userId = null




/// --------------Артём



const api = new Api(config)




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


//   const card = new Card({
//   user, initialCards
// })

export function likeClick(card, data){
  let promise = null

  if (card.isCardLiked()){
    promise = api.removeLike(data._id)
  } else{
    promise = api.addLikeLike(data._id)
  }
  promise
  .then(data => {
    card.setLikeButtonState(data)
  })
  .catch(err => {
    console.log(err)
  })
}


/// --------------Ниже старый код




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


