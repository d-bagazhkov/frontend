import AppRegistry from "./AppRegistry.js";

export class Component {

  _element = document.createElement("DIV");
  state = {};

  constructor() {
    this.beforeCreate && this.beforeCreate();
    this.exec();
    this.afterCreate && this.afterCreate();
  }

  render() {
    console.error("Need overwrite this function!");
    return "";
  }

  exec() {
    this.beforeMount && this.beforeMount();
    this._element.innerHTML = this.render();
    this.afterMount && this.afterMount();
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
    AppRegistry.render({selector: "#" + this.id, component: this, element: this._element});
  }

  getState() {
    return this.state;
  }

}