import { Popup } from "./popup";

export class PopupWithImage extends Popup{
    constructor(selectorPopup){
        super(selectorPopup);
        this._popupCardsImage = this.popup.querySelector('.popup__container-img');
        this._popupCardsText = this.popup.querySelector('.popup__container-text');
    }

    open(name, link){
        super.open();
        this._popupCardsImage.src = link;
        this._popupCardsImage.alt = name;
        this._popupCardsText.textContent = name;
    }
}
