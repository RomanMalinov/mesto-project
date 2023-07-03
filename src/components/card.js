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
  popupFormBattonSaveProfile,
  popupFormBattonSavenewCards,
  popupFormBattonSaveAvatar,
  config
} from './constants.js'

import { closePopup, openPopup } from './modal.js';

import { setStatusButton } from './utils.js'

import { Api } from './api.js';

import { userId } from '../index.js';

// export { handleFormAddNewCard, addCard };

export { api }

// массив карточек для предудущей проектной работы
// const catOne = new URL('../images/element__img-cat-7.jpg', import.meta.url);
// const catTwo = new URL('../images/element__img-cat-3.jpg', import.meta.url);
// const catThree = new URL('../images/element__img-cat-1.jpg', import.meta.url);
// const catFour = new URL('../images/element__img-cat-4.jpg', import.meta.url);
// const catFive = new URL('../images/element__img-cat-5.jpg', import.meta.url);
// const catSix = new URL('../images/element__img-cat-6.jpg', import.meta.url);
// const initialCards = [
//   { name: 'Ландыши', link: catOne },
//   { name: 'Полевые цветы', link: catTwo },
//   { name: 'Незабудки', link: catThree },
//   { name: 'Розы', link: catFour },
//   { name: 'Пионы', link: catFive },
//   { name: 'Ромашки', link: catSix }
// ];
//функция рендеринга карточек
// function renderCards(addCard) {
//   // const newCards = initialCards.map(addCard);
//   //  listContainerEl.append(...newCards)
// }
// renderCards(addCard);

// объект конфигурации перенесен из api.js (перенесен в constants)



// создан экземпляр класса Api и передан объект конфигурации
const api = new Api(config)

// let userId = null  // перенес в index.js


// перенес в index.js
// Promise.all([api.getUserInfo(), api.getAllCards()])
//   .then(([user, initialCards]) => {
//     nameInput.textContent = user.name;
//     jobInput.textContent = user.about;
//     popupImgAvatar.src = user.avatar;
//     console.log(user)
//     userId = user._id
//     const newCards = initialCards.map(addCard);
//     listContainerEl.append(...newCards)
//   })
//   .catch(err => console.log(err))





// // свежий комм
// function addCard(item) {
//   const newItem = temlateEl.content.cloneNode(true);
//   const captionEl = newItem.querySelector('.element__img-caption');
//   const imageEl = newItem.querySelector('.element__img');
//   captionEl.textContent = item.name;
//   imageEl.src = item.link;
//   imageEl.alt = item.name;

//   // удаление карточек
//   const likeButtonEl = newItem.querySelector('.element__like-button');
//   const deleteButtonEl = newItem.querySelector('.element__delete-button');
//   if (item.owner._id !== userId) {
//     deleteButtonEl.remove()
//   } else {
//     deleteButtonEl.addEventListener('click', deleteCard);
//     function deleteCard(evt) {
//       api.deleteCardFrom(item._id)
//         .then(() => {
//           const targetEl = evt.target;
//           const targetItem = targetEl.closest('.element');
//           targetItem.remove();
//         })
//         .catch(err => console.log(err))
//     }
//   }
// // свежий комм
//   // лайк карточек
//   const likeCount = newItem.querySelector('.element__like-counter');
//   likeCount.textContent = item.likes.length;

// //-------- Исправил ошибку, лайки ставились и отображались неправильно

//   // if (item.likes.find((like) => like.id == userId)) {
//   //   likeButtonEl.classList.add('element__like-button_activ');
//   // }

// //-------- Ниже исправление
// // свежий комм
//   if(item.likes.some((like) => like._id === userId)){
//     likeButtonEl.classList.add('element__like-button_activ')
//   }

//   likeButtonEl.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('element__like-button_activ')) {
//       api.removeLike(item._id)
//         .then((res) => {
//           likeButtonEl.classList.remove('element__like-button_activ');
//           likeCount.textContent = res.likes.length;
//         })
//         .catch(err => console.log(err))
//     } else {
//       api.addLike(item._id)
//         .then((res) => {
//           likeButtonEl.classList.add('element__like-button_activ');
//           likeCount.textContent = res.likes.length;
//         })
//         .catch(err => console.log(err))
//     }
//   })
// // свежий комм
//   function handleClickImage() {
//     popupCardsImage.src = item.link;
//     popupCardsText.textContent = item.name;
//     popupCardsImage.alt = item.name
//     openPopup(popupCards);
//   }
//   imageEl.addEventListener('click', handleClickImage)
//   return newItem;
// }

// //функция добавление новой карточки через заполнение формы
// // свежий комм
// function handleFormAddNewCard(evt) {
//   setStatusButton({ buttonEl: popupFormBattonSavenewCards, text: 'Сохраняем..', disabled: true })
//   evt.preventDefault();
//   return api.addNewCard({ name: popupNewCardsNameInput.value, link: popupNewCardsLinkInput.value })  //?
//     .then(dataCard => {
//       const newCard = addCard(dataCard);
//       listContainerEl.prepend(newCard)
//       evt.target.reset();
//       popupFormBattonSave.setAttribute('disabled', true);
//       popupFormBattonSave.classList.add('button_inactive');
//       closePopup(popupAddNewCards);
//     })
//     .catch(err => console.log(err))
//     .finally(() => {
//       setStatusButton({ buttonEl: popupFormBattonSavenewCards, text: 'Добавить', disabled: false })
//     })
// }



// Card class ----------------------------------------------------------------------------------

export default class Card {
  constructor(item, userId, handleImageClick, { deleteCard, addLike, removeLike }) {
    this.item = item;
    this._likes = item.likes;
    this._name = item.name;
    this._owner = item.owner;
    this._id = item._id;
    this._link = item.link;
    this._userId = userId;

    this._handleImageClick = handleImageClick;
    this._deleteCard = deleteCard;
    this._addLike = addLike;
    this._removeLike = removeLike;



  }


  _getTemplate(){
    const cardElement = document.querySelector('.template').content.cloneNode(true);

    return cardElement
  }

  generateNewCard() {
    this._card = this._getTemplate()    ;

    this._captionEl = this._card.querySelector('.element__img-caption');
    this._imageEl = this._card.querySelector('.element__img');
    this._likeButtonEl = this._card.querySelector('.element__like-button');
    this._deleteButtonEl = this._card.querySelector('.element__delete-button');
    this._likeCount = this._card.querySelector('.element__like-counter');

    this._captionEl.textContent = this._name;
    this._imageEl.src = this._link;
    this._imageEl.alt = this._name;
    this._likeCount.textContent = this._likes.length;

    if (this._likes.some((like) => like._id === this._userId)) {
      this._likeButtonEl.classList.add('element__like-button_activ');
    }

    if (this._owner._id !== this._userId) {
      this._deleteButtonEl.remove();
    }

    this._setEventListeners();

    return this._card;
  }

  // не работает delete
  deleteCard() {
    this._card.remove();
  }

  addLike(data) {
    this._likeButtonEl.classList.add('element__like-button_activ');
    this._likeCount.textContent = data.likes.length;
  }

  removeLike(data) {
    this._likeButtonEl.classList.remove('element__like-button_activ');
    this._likeCount.textContent = data.likes.length;
  }

  _setEventListeners() {
    this._deleteButtonEl.addEventListener('click', () => {
      this._deleteCard(this.item);
    });
    this._likeButtonEl.addEventListener('click', () => {
      if (this._likeButtonEl.classList.contains('element__like-button_activ')) {
        this._removeLike(this.item);
      } else {
        this._addLike(this.item);
      }
    });
    this._imageEl.addEventListener('click', () => {
      this._handleImageClick.open(this._name, this._link);
    });
  }
}

