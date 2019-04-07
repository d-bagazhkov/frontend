export default class ReproducingElement {

  constructor({element, components}) {
    this._element = element;
    this._components = components;
    this._prepare(this._render());
  }

  _render() {
    throw new Error("Need overwrite this function!");
  }

  _prepare(landing) {
    let tmpElem = document.createElement("div");
    tmpElem.innerHTML = landing;
    this.checkChildren(tmpElem);
    this._element.innerHTML = "";
    for (let i = 0; i < tmpElem.children.length; i++) {
      this._element.appendChild(tmpElem.children.item(i))
    }
  }

  checkChildren(elem) {
    for (let i = 0; i < elem.children.length; i++) {
      let child = elem.children.item(i);
      let de = child.dataset.element;
      if (!de) {
        if (child.children.length) {
          this.checkChildren(child);
        }
      } else {
        let newElement = this._components[de].getElement();
        if (child.classList.length)
          newElement.classList.add(...child.classList);
        if (child.id)
          newElement.id = child.id;
        newElement.dataset.element = child.dataset.element;
        child.replaceWith(newElement);
      }
    }
  };

  _repaint() {
    this._prepare(this._element.innerHTML);
  }

}