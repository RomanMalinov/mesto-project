import {listContainerEl} from '../components/constants'

export default class Section{
    constuctor({items, renderer}, selector){
        this._data = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    rederItems(){
        this._data.forEach((item) => {
            this.addCard(item)
        })
    }

    addCard(item){
        this._container.prepend(this._renderer(item))
    }
}


