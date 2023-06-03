// // Переменные
// const listContainerEl = document.querySelector('.elements');
// const temlateEl = document.querySelector('.template')
// // Открытие и закрытие модальных окон
// const popupProfile = document.querySelector('.popup_type_profile');
// const popupAddNewCards = document.querySelector('.popup_type_add_new-cards');
// const profileInfoEditButton = document.querySelector('.profile__info-edit-button');
// const profileAddCardsButton = document.querySelector('.profile__add-button');
// // Открытие попапа с картинкой
// const popupCards = document.querySelector('.popup_type_zoom-card');
// const popupCardsImage = popupCards.querySelector('.popup__container-img');
// const popupCardsText = popupCards.querySelector('.popup__container-text');
// // Все кнопки закрытия модальных окон
// const popups = document.querySelectorAll('.popup');
// const closeButtons = document.querySelectorAll('.popup__close');
// // Редактирование имени и информации о себе
// const formPopupProfile = document.forms['profile-form'];
// const nameInput = document.querySelector('.profile__info-title');
// const jobInput = document.querySelector('.profile__info-subtitle');
// // Находим поля формы в DOM
// const popupProfileNameInput = document.querySelector('.popup__form-input-name');
// const popupProfilejobInput = document.querySelector('.popup__form-input-job');
// //Форма добавления карточки
// const formPopupNewCards = document.forms['card-form'];
// const popupNewCardsNameInput = document.querySelector('.popup__form-input-img-name');
// const popupNewCardsLinkInput = document.querySelector('.popup__form-input-link')

// // Рендеринг карточек
// const initialCards = [
//   {
//     name: 'Ландыши',
//     link: './images/element__img-cat-7.jpg',
//   },
//   {
//     name: 'Полевые цветы',
//     link: './images/element__img-cat-3.jpg',
//   },
//   {
//     name: 'Незабудки',
//     link: './images/element__img-cat-8.jpg',
//   },
//   {
//     name: 'Розы',
//     link: './images/element__img-cat-4.jpg',
//   },
//   {
//     name: 'Пионы',
//     link: './images/element__img-cat-5.jpg',
//   },

//   {
//     name: 'Ромашки',
//     link: './images/element__img-cat-6.jpg',
//   }
// ];

// function renderCards(addCard) {
//   const newCards = initialCards.map(addCard);
//   listContainerEl.append(...newCards)
// }
// renderCards(addCard);

// function addCard(item) {
//   const newItem = temlateEl.content.cloneNode(true);
//   const captionEl = newItem.querySelector('.element__img-caption');
//   const imageEl = newItem.querySelector('.element__img');
//   captionEl.textContent = item.name;
//   imageEl.src = item.link;
//   imageEl.alt = item.name;

//   // Лайк карточки
//   const likeButtonEl = newItem.querySelector('.element__like-button');
//   likeButtonEl.addEventListener('click', toggleLikeCard);
//   function toggleLikeCard(evt) {
//     evt.target.classList.toggle('element__like-button_activ');
//   };

//   // Удаление карточки
//   const deleteButtonEl = newItem.querySelector('.element__delete-button');
//   deleteButtonEl.addEventListener('click', deleteCard);
//   function deleteCard(evt) {
//     const targetEl = evt.target;
//     const targetItem = targetEl.closest('.element');
//     targetItem.remove();
//   }
//   // слушатель функция открытия модального окна по клику на картинку элемента
//   // функция открытия модального окна по клику на картинку элемента
//   function handleClickImage() {
//     popupCardsImage.src = item.link;
//     popupCardsText.textContent = item.name;
//     popupCardsImage.alt = item.name
//     openPopup(popupCards);
//   }
//   imageEl.addEventListener('click', handleClickImage)
//   return newItem;
// }

// // функции открытия и закрытия модальных окон
// // функции закрытия
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
// }
// // функции открытия
// function openPopup(popup) {
//   popup.classList.add('popup_opened');
// }

// closeButtons.forEach((button) => {
//   // находим 1 раз ближайший к крестику попап
//   const popup = button.closest('.popup');
//   // устанавливаем обработчик закрытия на крестик
//   button.addEventListener('click', () => closePopup(popup));
// });


// //3. Функции закрытия модальных окон кликом на оверлей и нажатием на Esc

// popups.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('popup')) {
//       closePopup(popup)
//     }
//   })

//   document.addEventListener('keydown', function (evt) {
//     if (evt.key === "Escape") {
//       closePopup(popup);
//     }
//   });
// })

// //рабочий код для первого попапа
// //  const popupss = document.querySelector('.popup')
// //    document.addEventListener('keydown', function(evt) {
// //     if (evt.key === "Escape") {
// //       closePopup(popupss);
// //     }
// //    });




// //Функции открытия модальных окон
// profileInfoEditButton.addEventListener('click', () => {
//   popupProfileNameInput.value = nameInput.textContent;
//   popupProfilejobInput.value = jobInput.textContent
//   openPopup(popupProfile)
// });
// profileAddCardsButton.addEventListener('click', () => openPopup(popupAddNewCards));

// // Обработчик «отправки» формы
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//   nameInput.textContent = popupProfileNameInput.value;
//   jobInput.textContent = popupProfilejobInput.value;
//   closePopup(popupProfile);

// }
// formPopupProfile.addEventListener('submit', handleProfileFormSubmit);

// //Функции открытия модальных окон



// function handleFormAddNewCard(evt) {
//   evt.preventDefault();
//   const newName = popupNewCardsNameInput.value;
//   const newLink = popupNewCardsLinkInput.value;
//   const newCard = addCard({ name: newName, link: newLink });
//   listContainerEl.prepend(newCard)
//   evt.target.reset();
//   closePopup(popupAddNewCards);
// }
// formPopupNewCards.addEventListener('submit', handleFormAddNewCard);

// //Кнопки
// function hasInvalidInput(inputList) {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   })
// };

// function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.setAttribute('disabled', true);
//     buttonElement.classList.add(inactiveButtonClass);
//   } else {
//     buttonElement.removeAttribute('disabled');
//     buttonElement.classList.remove(inactiveButtonClass);
//   }
// }

// //Валидация
//   const showInputError = (formElement, inputElement, errorMessage,) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add('form__input-error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('form__input-error_active')
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('form__input-error');
//   errorElement.classList.remove('form__input-error_active');
//   errorElement.textContent = '';
// }

// const checkInputValidity = (formElement, inputElement) => {
//   const isInputNotValid = !inputElement.validity.valid;
//   if (inputElement.validity.patternMismatch) {
//     inputElement.setCustomValidity(inputElement.dataset.errorMessage)
//   } else {
//     inputElement.setCustomValidity("");
//   }
//   if (isInputNotValid) {
//     const errorMessage = inputElement.validationMessage
//     showInputError(formElement, inputElement, errorMessage)
//   } else {
//     hideInputError(formElement, inputElement)
//   };
// };

// const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass) => {
//   formElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//   });

//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   const buttonElement = formElement.querySelector(submitButtonSelector);

//   inputList.forEach(inputElement => {
//     inputElement.addEventListener('input', (evt) => {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement, inactiveButtonClass);
//     });
//   });

// };

// const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass
// }) => {
//   const formElements = document.querySelectorAll(formSelector);
//   const formList = Array.from(formElements);
//   formList.forEach((formElement) => {
//     setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass);
//   });
// };

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__form-input',
//   submitButtonSelector: '.popup__form-button-save',
//   inactiveButtonClass: 'button_inactive',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });












//
