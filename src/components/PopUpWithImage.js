import { Popup } from "./popup";
import { popups } from "./constants";

export class PopupWithImage extends Popup{
    constructor(selectorPopup){
        super(selectorPopup);
        this._popupCardsImage = this._popup?.querySelector('.popup__container-img');
        this._popupCardsText = this._popup?.querySelector('.popup__container-text');
    }

    open(data){
        super.open();
        this._popupCardsImage.src = `${data.link}`
        this._popupCardsImage.alt = `${data.name}`
        this._popupCardsText.textContent = `${data.name}`
    }
}