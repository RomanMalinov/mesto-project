import {
  listContainerEl, temlateEl, popupAddNewCards, popupCards, popupCardsImage, popupCardsText,
  formPopupNewCards, popupNewCardsNameInput, popupNewCardsLinkInput, popupFormBattonSave
} from './constants.js'
import { closePopup, openPopup } from './modal.js';
export { handleFormAddNewCard };
import  {onResponse, getAllTasks, addTask, additTasks, deleteTask, likesCards, deleteLikesCards} from './api.js'

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
function renderCards(addCard) {
  getAllTasks()
    .then(AllTasks => {
      const newCards = AllTasks.map(addCard);
      listContainerEl.append(...newCards)
    })
}
renderCards(addCard);
// function renderCards(addCard) {
//   const newCards = initialCards.map(addCard);
//   listContainerEl.append(...newCards)
// }
// renderCards(addCard);

function addCard(item) {
  const newItem = temlateEl.content.cloneNode(true);
  const captionEl = newItem.querySelector('.element__img-caption');
  const imageEl = newItem.querySelector('.element__img');
  captionEl.textContent = item.name;
  imageEl.src = item.link;
  imageEl.alt = item.name;

  // Лайк карточки
  const likeButtonEl = newItem.querySelector('.element__like-button');
  likeButtonEl.addEventListener('click', toggleLikeCard);
  function toggleLikeCard(evt) {
    likesCards(item._id).then (() => {
      evt.target.classList.toggle('element__like-button_activ');
    })
  };

  // const likeButtonEl = newItem.querySelector('.element__like-button');
  // likeButtonEl.addEventListener('click', toggleLikeCard);
  // function toggleLikeCard(evt) {
  //   evt.target.classList.toggle('element__like-button_activ');
  // };

  // Удаление карточки
  const deleteButtonEl = newItem.querySelector('.element__delete-button');
  deleteButtonEl.addEventListener('click', deleteCard);
  function deleteCard(evt) {
    deleteTask(item._id).then(() => {
      const targetEl = evt.target;
      const targetItem = targetEl.closest('.element');
      targetItem.remove();
    })
  }

  // const deleteButtonEl = newItem.querySelector('.element__delete-button');
  // deleteButtonEl.addEventListener('click', deleteCard);
  // function deleteCard(evt) {
  //   const targetEl = evt.target;
  //   const targetItem = targetEl.closest('.element');
  //   targetItem.remove();
  // }
  // слушатель функция открытия модального окна по клику на картинку элемента
  // функция открытия модального окна по клику на картинку элемента

  // проверяем владельца карточки и убираем кнопку Delete




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
  evt.preventDefault();
  addTask({name: popupNewCardsNameInput.value, link: popupNewCardsLinkInput.value})
  .then(dataTask => {
    const newName = popupNewCardsNameInput.value;
    const newLink = popupNewCardsLinkInput.value;
    const newCard = addCard({ name: newName, link: newLink });
    listContainerEl.prepend(newCard)
    evt.target.reset();
    popupFormBattonSave.setAttribute('disabled', true);
    popupFormBattonSave.classList.add('button_inactive');
    closePopup(popupAddNewCards);
  })
}

// function handleFormAddNewCard(evt) {
//   evt.preventDefault();
//   const newName = popupNewCardsNameInput.value;
//   const newLink = popupNewCardsLinkInput.value;
//   const newCard = addCard({ name: newName, link: newLink });
//   listContainerEl.prepend(newCard)
//   evt.target.reset();
//   popupFormBattonSave.setAttribute('disabled', true);
//   popupFormBattonSave.classList.add('button_inactive');
//   closePopup(popupAddNewCards);
// }
