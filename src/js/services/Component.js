import AppRegistry from "./AppRegistry.js";

export class Component {

  _element = document.createElement("DIV");
  state = {};

  constructor() {
    this.exec();
  }

  render() {
    console.error("Need overwrite this function!");
    return "";
  }

  exec() {
    this.before && this.before();
    this._element.innerHTML = this.render();
    this.after && this.after();
  }

  get element() {
    return this._element.firstElementChild
  }

  get id() {
    return this.element.id;
  }

  setState(newState = {}) {
    this.state = newState;
    this.exec();
    AppRegistry.render({selector: "#" + this.id, component: this});
  }

  getState() {
    return this.state;
  }

}