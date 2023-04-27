console.log('test');

// Ренднринг карточек
const initialCards = [
  {
    name: 'Ландыши',
    link: './images/element__img-cat-7.jpg',
  },
  {
    name: 'Полевые цветы',
    link: './images/element__img-cat-3.jpg',
  },
  {
    name: 'Незабудки',
    link: './images/element__img-cat-8.jpg',
  },
  {
    name: 'Розы',
    link: './images/element__img-cat-4.jpg',
  },
  {
    name: 'Пионы',
    link: './images/element__img-cat-5.jpg',
  },

  {
    name: 'Ромашки',
    link: './images/element__img-cat-6.jpg',
  }
];
const listContainerEl = document.querySelector('.elements');
const temlateEl = document.querySelector('.template');

function renderCards(addCard) {
  const newCards = initialCards.map(addCard);
  listContainerEl.append(...newCards)
}

function addCard(item) {
  const newItem = temlateEl.content.cloneNode(true);
  const captionEl = newItem.querySelector('.element__img-caption');
  const imageEl = newItem.querySelector('.element__img');
  captionEl.textContent = item.name;
  imageEl.src = item.link;
  imageEl.alt = item.name;

  // Лайк карточки
  const likeButtonEl = newItem.querySelector('.element__like-button');
  likeButtonEl.addEventListener('click', likeCard);
  function likeCard(evt) {
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

  function imageClickHandler() {
    popupCardsImage.src = item.link;
    popupCardsText.textContent = item.name;
    popupCardsImage.alt = item.name;
    togglePopup(popupCards)
  }

  imageEl.addEventListener('click', imageClickHandler)
  return newItem;
}
renderCards(addCard);

// Открытие и закрытие модальных окон
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddNewCards = document.querySelector('.popup_type_add_new-cards');
const profileInfoEditButton = document.querySelector('.profile__info-edit-button');
const profileAddCardsButton = document.querySelector('.profile__add-button');
const popupProfileCloseButtone = popupProfile.querySelector('.popup__button-close');
const profileAddCardCloseButton = popupAddNewCards.querySelector('.popup__button-close');

// Открытие попапа с картинкой
const popupCards = document.querySelector('.popup_type_zoom-card');
const popupCardsCloseButtone = popupCards.querySelector('.popup__button-close');
const popupCardsImage = popupCards.querySelector('.popup__container-img');
const popupCardsText = popupCards.querySelector('.popup__container-text');

// единая функция открытия и закрытия модаьных окон
function togglePopup(popupElement) {
  popupElement.classList.toggle('popup_opened')
}

profileInfoEditButton.addEventListener('click', () => togglePopup(popupProfile));
profileAddCardsButton.addEventListener('click', () => togglePopup(popupAddNewCards));
popupProfileCloseButtone.addEventListener('click', () => togglePopup(popupProfile));
profileAddCardCloseButton.addEventListener('click', () => togglePopup(popupAddNewCards));
popupCardsCloseButtone.addEventListener('click', () => togglePopup(popupCards));

// Редактирование имени и информации о себе
const formPopupProfile = popupProfile.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const popupProfileNameInput = document.querySelector('.popup__form-input-name');// Воспользуйтесь инструментом .querySelector()
const popupProfilejobInput = document.querySelector('.popup__form-input-job')// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  evt.target.reset();
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  const nameInputForm = document.querySelector('.profile__info-title');
  const jobInputForm = document.querySelector('.profile__info-subtitle');
  nameInputForm.textContent = popupProfileNameInput.value;
  jobInputForm.textContent = popupProfilejobInput.value;
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  togglePopup(popupProfile)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formPopupProfile.addEventListener('submit', handleProfileFormSubmit);

//Форма добавления карточки
const formPopupNewCards = document.querySelector('.popup__form_type_new-card');
const popupNewCardsNameInput = document.querySelector('.popup__form-input-img-name');
const popupNewCardsLinkInput = document.querySelector('.popup__form-input-link')

function handleFormAddNewCard(evt) {
  evt.preventDefault();
  evt.target.reset();
  const newName = popupNewCardsNameInput.value;
  const newLink = popupNewCardsLinkInput.value;
  const newCard = addCard({ name: newName, link: newLink });
  listContainerEl.prepend(newCard)

  togglePopup(popupAddNewCards)
}
formPopupNewCards.addEventListener('submit', handleFormAddNewCard);



