// Создание класса Popup
export { Popup }

class Popup {
  constructor(selectorPopup) {
    this.popup = document.querySelector(selectorPopup)
  }

  // перенос и переписывание методов из modal.js и рефакторинг на ООП
  open() {
    this.popup.classList.add('popup_opened');
    document.addEventListener('keydown', this.closeByEscape);
  }

  close() {
    this.popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this.closeByEscape);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      // const openedPopup = document.querySelector('.popup_opened')
      // closePopup(openedPopup);
      this.close();
    }
  }

  //перенос метода из index.js и рефакторинг на ОПП
  //Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.
  setEventListeners() {
    this.popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }

}
