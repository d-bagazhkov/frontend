export class ReproducingElement {

  constructor({element}) {
    this._element = element;
    this._render();
  }

  _render() {
    throw new Error("Needs overwrite this function");
  }

}