export class Section {
    constructor({renderer}, selector) {
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    setItem(item) {
      console.log(item)
      this._container.prepend(item);
    }

    renderItems(cards) {
      cards.reverse().forEach((item) => {
        this._renderer(item)
      })
    }
  }
