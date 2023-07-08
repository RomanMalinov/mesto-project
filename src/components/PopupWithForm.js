import  Popup  from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(selectorPopup, formCallback){
        super(selectorPopup);
        this._formCallback = formCallback;

        this._popupForm = this._popup.querySelector('.popup__form');
        this._formInputs = this._popupForm.querySelectorAll('.popup__form-input');

        this._button = this._popupForm.querySelector('.popup__form-button-save');
        this._defaultText = this._button.textContent;

        this._inputValues = {};
        this._submitHandler = this._submitHandler.bind(this);

    }

    _getInputValues() {
        this._formInputs.forEach(input => {
          this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    _submitHandler(evt) {
        evt.preventDefault();
        this._formCallback(this._getInputValues());
      }

    setEventListeners(){
        super.setEventListeners();
        this._button.addEventListener('click', this._submitHandler);
    }

    setStatusButton(isLoading) {
        isLoading ? this._button.textContent = 'Делаем магию...' : this._button.textContent = this._defaultText;
      }

    close(){
        super.close();
        this._popupForm.reset();
    }
}

