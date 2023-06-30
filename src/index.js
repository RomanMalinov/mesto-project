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

import Card from './components/card.js';
import { handleFormAddNewCard, addCard } from './components/card.js';

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

// ПРОВЕРКА
// import {
//   closePopup,
//   handleProfileFormSubmit,
//   openPopup
// } from './components/modal.js'

import { Api } from './components/api.js'
import { PopupWithImage } from './components/PopUpWithImage';
import { UserInfo } from './components/userInfo';
import {Section} from './components/Section';
import PopupWithForm from './components/PopupWithForm';




export let userId = null
let cardElement;


const selectorUserName = '.profile__info-title';
const selectorUserAbout = '.profile__info-subtitle';
const selectorUserAvatar = '.profile__image';





const api = new Api(config)

// создание экземпляра класса c данными пользователя
const userInfo = new UserInfo({
  selectorUserName,
  selectorUserAbout,
  selectorUserAvatar
});
//


const imagePopup = new PopupWithImage('.popup_type_zoom-card');

const editProfilePopup = new PopupWithForm('.popup_type_profile', editProfileCallback);

const editAvatarPopup = new PopupWithForm('.popup_type_add__img-avatar', editAvatarCallback);

const addNewCardPopup = new PopupWithForm('.popup_type_add_new-cards', addNewCardCallback);

// функционал попапа с редактирования профиля
const editProfileCallback = data => {
  editProfilePopup.setStatusButton(true);
  api
    .setUserInfo(data)
    .then(res => {
      userInfo.setUserInfo(res);
      editProfilePopup.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      editProfilePopup.setStatusButton(false);
    });
};

// функционал попапа с редактирования аватара
const editAvatarCallback = data => {
  editAvatarPopup.setStatusButton(true);
  api
    .changeAvatarImg(data)
    .then(res => {
      userInfo.setUserInfo(res)
      editAvatarPopup.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      editAvatarPopup.setStatusButton(false);
    });
};

// функционал попапа с добавлением карточки
const addNewCardCallback = data => {
  addNewCardPopup.setStatusButton(true);
  api
    .addNewCard(data)
    .then(res => {
      cardList.setItem(res);
      addNewCardPopup.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      addNewCardPopup.setStatusButton(false);
    });
};

// вешаем обработчики на попапы

profileAddCardsButton.addEventListener('click', () => {
  addNewCardPopup.open();
} )

profileInfoEditButton.addEventListener('click', () => {
  editProfilePopup.open();
})


// доработать код когда будет UserInfo класс, этот код заменит Promise.all часть

api.initializeData()
.then(([user, initialCards]) =>{
  userInfo.setUserInfo(user);
  userId = user._id;
  const cardList = new Section({
    renderer: (item) => {
      cardElement = createCard(item);
      cardList.setItem(cardElement);
    }
  }, '.elements');
  cardList.renderItems(initialCards)
  })
  .catch((err) => console.log(err))

const createCard = (item) => {
  const cardCreate = new Card(item, userId, imagePopup,
    {deleteCard: (item) => {

      api.deleteCardFrom(item._id)
    .then(() => {
      cardCreate.deleteCard();
    })
    .catch((err) => {
      console.error(err);
    })
    },
    addLike: (item) => {
      api.addLike(item._id)
        .then((data) => {
          console.log(item._id)
          cardCreate.addLike(data);
        })
        .catch((err) => {
          console.error(err)
        })},
    removeLike: (item) => {
      api.removeLike(item._id)
        .then((data) => {
          cardCreate.removeLike(data);
        })
        .catch((err) => {
          console.error(err)
        })
    }});

    return cardCreate.generateNewCard();
}

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



// Promise.all([api.getUserInfo(), api.getAllCards()])
//   .then(([user, initialCards]) => {
//     nameInput.textContent = user.name;
//     jobInput.textContent = user.about;
//     popupImgAvatar.src = user.avatar;
//     userId = user._id
//     const newCards = initialCards.map(addCard);
//     listContainerEl.append(...newCards)
//   })
//   .catch(err => console.log(err))


// popups.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('popup_opened')) {
//       closePopup(popup)
//     }
//     if (evt.target.classList.contains('popup__close')) {
//       closePopup(popup)
//     }
//   })
// })


// ПРОВЕРКА
// formPopupNewCards.addEventListener('submit', handleFormAddNewCard);

// profileAddCardsButton.addEventListener('click', () => openPopup(popupAddNewCards));

// formPopupProfile.addEventListener('submit', handleProfileFormSubmit);

// profileInfoEditButton.addEventListener('click', () => {

//   popupProfileNameInput.value = nameInput.textContent;
//   popupProfilejobInput.value = jobInput.textContent
//   openPopup(popupProfile)
// });

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


