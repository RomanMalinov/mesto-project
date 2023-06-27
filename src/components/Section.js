import {listContainerEl} from '../components/constants'

export default class Section{
    constuctor({renderer}, selectors){
        this._selectors = selectors;
        this._renderer = renderer;
        this.container = listContainerEl;
    }

    addCard(item){
        this.container.prepend(this._renderer(item))
    }
}


