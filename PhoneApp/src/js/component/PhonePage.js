import {ReproducingElement} from './ReproducingElement.js';

export default class PhonePage extends ReproducingElement {

  _render() {
    console.log("this will be render page in element", this._element)
  }

}