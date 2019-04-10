export default class ReproducingElement {

  constructor({element, components = []}) {
    this.element = element;
    this.components = components;
    this.paint();
  }

  render() {
    throw new Error("Need overwrite this function!");
  }

  paint() {
    let tmpElem = document.createElement("div");
    tmpElem.innerHTML = this.render();
    this.checkChildren(tmpElem);
    this.element.innerHTML = "";
    for (let i = 0; i < tmpElem.children.length; i++) {
      this.element.appendChild(tmpElem.children.item(i))
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
        let newElement = this.components[de].getElement();
        if (child.classList.length)
          newElement.classList.add(...child.classList);
        if (child.id)
          newElement.id = child.id;
        newElement.dataset.element = child.dataset.element;
        child.replaceWith(newElement);
      }
    }
  };

  repaint() {
    this.prepare(this.element.innerHTML);
  }

}