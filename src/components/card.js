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

  _getTemplate() {
    const cardElement = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  generateNewCard() {
    this._card = this._getTemplate();
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

