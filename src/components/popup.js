// Создание класса Popup
export { Popup }

class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup)
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // перенос и переписывание методов из modal.js и рефакторинг на ООП
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
}

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  //перенос метода из index.js и рефакторинг на ОПП
  //Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.
  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }
}
