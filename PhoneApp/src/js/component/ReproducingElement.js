export class ReproducingElement {

  constructor({element}) {
    if (element) {
      this._element = element;
    } else {
      this._element = document.createElement("div");
    }
    this._render();
  }

  _render() {
    throw new Error("Needs overwrite this function");
  }

  toString() {
    return this._element.innerHTML;
  }

}