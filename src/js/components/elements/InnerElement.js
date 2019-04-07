export class InnerElement {

  constructor(props) {
    this._element = document.createElement("DIV");
    if (props && props.classes) {
      this._element.classList.add(props.classes);
    }
  }

  getElement() {
    return this._element;
  }

  toString() {
    return this._element.outerHTML;
  }

}