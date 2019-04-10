import {Component} from "./Component.js";

class AppRegistry {

  render({component, selector = '#'+component.id, element = document}) {
    if (!(component instanceof Component)) throw new Error("component will be extended Component");
    component.selector = selector;
    element.querySelector(selector).replaceWith(component.element);
  }


}

export default new AppRegistry();