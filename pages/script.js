console.log('test');

//Ренднринг карточек
const initialCards = [
  {
    name: 'Ландыши',
    link: './images/element__img-cat-7.jpg'
  },
  {
    name: 'Полевые цветы',
    link: './images/element__img-cat-3.jpg'
  },
  {
    name: 'Иваново',
    link: './images/element__img-cat-4.jpg'
  },
  {
    name: 'Розы',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const listContainerEl = document.querySelector('.elements');
const temlateEl = document.querySelector('.template');

function renderCards(getCard) {
  const newCards = initialCards.map(getCard);
  listContainerEl.append(...newCards)
}

function getCard(item) {
  const newItem = temlateEl.content.cloneNode(true);
  const captionEl = newItem.querySelector('.element__img-caption');
  const imageEl = newItem.querySelector('.element__img');
  captionEl.textContent = item.name;
  imageEl.src = item.link;
  return newItem;
}

renderCards(getCard);

// Открытие и закрытие модальных окон
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddNewCards = document.querySelector('.popup_type_add_new-cards');
const profileInfoEditButton = document.querySelector('.profile__info-edit-button');
const profileAddCardsButton = document.querySelector('.profile__add-button');
const popupProfileCloseButtone = document.querySelector('.popup__button-close-popup-profile');
const profileAddCardCloseButton = document.querySelector('.popup__button-close-add_new-cards');

// единая функция открытия и закрытия модаьных окон
function openPopup(popupElement) {
  popupElement.classList.toggle('popup_opened')
}

profileInfoEditButton.addEventListener('click', () => openPopup(popupProfile));
profileAddCardsButton.addEventListener('click', () => openPopup(popupAddNewCards));
popupProfileCloseButtone.addEventListener('click', () => openPopup(popupProfile));
profileAddCardCloseButton.addEventListener('click', () => openPopup(popupAddNewCards));

// Редактирование имени и информации о себе
// Находим форму в DOM
const formPopupProfile = document.querySelector('.popup__form-type-profile');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const popupProfileNameInput = document.querySelector('.popup__form-input-name');// Воспользуйтесь инструментом .querySelector()
const popupProfilejobInput = document.querySelector('.popup__form-input-job')// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    const nameInputForm = document.querySelector('.profile__info-title');
    const jobInputForm = document.querySelector('.profile__info-subtitle');
    nameInputForm.textContent = popupProfileNameInput.value;
    jobInputForm.textContent = popupProfilejobInput.value;
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    openPopup(popupProfile)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formPopupProfile.addEventListener('submit', handleFormSubmit);






///
