import AppRegistry from "./AppRegistry.js";

export class Component {

  state = {};

  constructor() {
    this.beforeCreate && this.beforeCreate();
    this.exec();
    this.afterCreate && this.afterCreate() && this.exec();
  }

  _element = document.createElement("DIV");

  get element() {
    return this._element.firstElementChild
  }

  get id() {
    return this.element.id;
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

  setState(newState = {}) {
    this.state = newState;
    this.exec();

    AppRegistry.render({
      component: this,
      element: this._element
    });
  }

  getState() {
    return this.state;
  }

}