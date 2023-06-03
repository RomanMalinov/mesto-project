import './pages/index.css';
import {
  listContainerEl, temlateEl, popupProfile, popupAddNewCards, profileInfoEditButton, profileAddCardsButton, popupCards,
  popupCardsImage, popupCardsText, popups, closeButtons, formPopupProfile, nameInput, jobInput, popupProfileNameInput,
  popupProfilejobInput, formPopupNewCards, popupNewCardsNameInput, popupNewCardsLinkInput
} from './components/utils.js'


const catOne = new URL('./images/element__img-cat-7.jpg', import.meta.url);
const catTwo = new URL('./images/element__img-cat-3.jpg', import.meta.url);
const catThree = new URL('./images/element__img-cat-8.jpg', import.meta.url);
const catFour = new URL('./images/element__img-cat-4.jpg', import.meta.url);
const catFive = new URL('./images/element__img-cat-5.jpg', import.meta.url);
const catSix = new URL('./images/element__img-cat-6.jpg', import.meta.url);

const initialCards = [
  { name: 'Ландыши', link: catOne },
  { name: 'Полевые цветы', link: catTwo },
  { name: 'Незабудки', link: catThree },
  { name: 'Розы', link: catFour },
  { name: 'Пионы', link: catFive },
  { name: 'Ромашки', link: catSix }
];

function renderCards(addCard) {
  const newCards = initialCards.map(addCard);
  listContainerEl.append(...newCards)
}
renderCards(addCard);

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
    evt.target.classList.toggle('element__like-button_activ');
  };
  // Удаление карточки
  const deleteButtonEl = newItem.querySelector('.element__delete-button');
  deleteButtonEl.addEventListener('click', deleteCard);
  function deleteCard(evt) {
    const targetEl = evt.target;
    const targetItem = targetEl.closest('.element');
    targetItem.remove();
  }
  // слушатель функция открытия модального окна по клику на картинку элемента
  // функция открытия модального окна по клику на картинку элемента
  function handleClickImage() {
    popupCardsImage.src = item.link;
    popupCardsText.textContent = item.name;
    popupCardsImage.alt = item.name
    openPopup(popupCards);
  }
  imageEl.addEventListener('click', handleClickImage)
  return newItem;
}

import { closePopup, openPopup } from './components/modal.js';

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

// //3. Функции закрытия модальных окон кликом на оверлей и нажатием на Esc
popups.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup)
    }
  })
  document.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  });
})

//Функции открытия модальных окон
profileInfoEditButton.addEventListener('click', () => {
  popupProfileNameInput.value = nameInput.textContent;
  popupProfilejobInput.value = jobInput.textContent
  openPopup(popupProfile)
});
profileAddCardsButton.addEventListener('click', () => openPopup(popupAddNewCards));

// Обработчик «отправки» формы
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameInput.textContent = popupProfileNameInput.value;
  jobInput.textContent = popupProfilejobInput.value;
  closePopup(popupProfile);
}
formPopupProfile.addEventListener('submit', handleProfileFormSubmit);

//Функции открытия модальных окон
function handleFormAddNewCard(evt) {
  evt.preventDefault();
  const newName = popupNewCardsNameInput.value;
  const newLink = popupNewCardsLinkInput.value;
  const newCard = addCard({ name: newName, link: newLink });
  listContainerEl.prepend(newCard)
  evt.target.reset();
  closePopup(popupAddNewCards);
}
formPopupNewCards.addEventListener('submit', handleFormAddNewCard);

import { hasInvalidInput, toggleButtonState, showInputError, hideInputError, checkInputValidity, setEventListeners } from './components/validate.js';

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass
}) => {
  const formElements = document.querySelectorAll(formSelector);
  const formList = Array.from(formElements);
  formList.forEach((formElement) => {
    setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-button-save',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
