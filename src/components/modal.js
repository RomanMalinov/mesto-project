export { closePopup, openPopup };

// функции открытия и закрытия модальных окон
// функции закрытия
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
// функции открытия
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

