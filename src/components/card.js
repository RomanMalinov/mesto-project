import {
  listContainerEl, temlateEl, popupProfile, popupAddNewCards, profileInfoEditButton, profileAddCardsButton, popupCards,
  popupCardsImage, popupCardsText, popups, formPopupProfile, nameInput, jobInput, popupProfileNameInput,
  popupProfilejobInput, formPopupNewCards, popupNewCardsNameInput, popupNewCardsLinkInput, popupFormBattonSave, popupImgAvatar, popupFormBattonSaveProfile, popupFormBattonSavenewCards, popupFormBattonSaveAvatar
} from './constants.js'
import { closePopup, openPopup } from './modal.js';
import { setStatusButton } from './utils.js'

export { handleFormAddNewCard, addCard };
import { Api } from './api.js';
export { api }
import { data } from 'jquery';

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

// объект конфигурации перенесен из api.js
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-25',
  headers: {
    'content-type': 'application/json',
    authorization: '4795c652-4f69-4cb4-b309-abc01e676f2c',
  }
}

// создан экземпляр класса Api и передан объект конфигурации
const api = new Api(config)

let userId = null

Promise.all([api.getUserInfo(), api.getAllCards()])
  .then(([user, initialCards]) => {
    nameInput.textContent = user.name;
    jobInput.textContent = user.about;
    popupImgAvatar.src = user.avatar;
    console.log(user)
    userId = user._id
    const newCards = initialCards.map(addCard);
    listContainerEl.append(...newCards)
  })
  .catch(err => console.log(err))

function addCard(item) {
  console.log(userId)
  const newItem = temlateEl.content.cloneNode(true);
  const captionEl = newItem.querySelector('.element__img-caption');
  const imageEl = newItem.querySelector('.element__img');
  captionEl.textContent = item.name;
  imageEl.src = item.link;
  imageEl.alt = item.name;

  // удаление карточек
  const likeButtonEl = newItem.querySelector('.element__like-button');
  const deleteButtonEl = newItem.querySelector('.element__delete-button');
  if (item.owner._id !== userId) {
    deleteButtonEl.remove()
  } else {
    deleteButtonEl.addEventListener('click', deleteCard);
    function deleteCard(evt) {
      api.deleteCardFrom(item._id)
        .then(() => {
          const targetEl = evt.target;
          const targetItem = targetEl.closest('.element');
          targetItem.remove();
        })
        .catch(err => console.log(err))
    }
  }

  // лайк карточек
  const likeCount = newItem.querySelector('.element__like-counter');
  likeCount.textContent = item.likes.length;
  if (item.likes.find((like) => like.id == userId)) {
    likeButtonEl.classList.add('element__like-button_activ');
  }
  likeButtonEl.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('element__like-button_activ')) {
      api.removeLike(item._id)
        .then((res) => {
          likeButtonEl.classList.remove('element__like-button_activ');
          likeCount.textContent = res.likes.length;
        })
        .catch(err => console.log(err))
    } else {
      api.addLike(item._id)
        .then((res) => {
          likeButtonEl.classList.add('element__like-button_activ');
          likeCount.textContent = res.likes.length;
        })
        .catch(err => console.log(err))
    }
  })

  function handleClickImage() {
    popupCardsImage.src = item.link;
    popupCardsText.textContent = item.name;
    popupCardsImage.alt = item.name
    openPopup(popupCards);
  }
  imageEl.addEventListener('click', handleClickImage)
  return newItem;
}

//функция добавление новой карточки через заполнение формы
function handleFormAddNewCard(evt) {
  setStatusButton({ buttonEl: popupFormBattonSavenewCards, text: 'Сохраняем..', disabled: true })
  evt.preventDefault();
  return api.addNewCard({ name: popupNewCardsNameInput.value, link: popupNewCardsLinkInput.value })  //?
    .then(dataCard => {
      const newCard = addCard(dataCard);
      listContainerEl.prepend(newCard)
      evt.target.reset();
      popupFormBattonSave.setAttribute('disabled', true);
      popupFormBattonSave.classList.add('button_inactive');
      closePopup(popupAddNewCards);
    })
    .catch(err => console.log(err))
    .finally(() => {
      setStatusButton({ buttonEl: popupFormBattonSavenewCards, text: 'Добавить', disabled: false })
    })
}



// Артём коммит

export default class Card{
  constructor(){

  }

  addNewCard(){

  }

  isLiked(){

  }

  setLike(){

  }

  setDeleteButtonState(){

  }

  deleteCard(){

  }

}
