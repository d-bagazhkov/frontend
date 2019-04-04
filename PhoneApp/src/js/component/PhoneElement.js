import {ReproducingElement} from "./ReproducingElement.js";

export class PhoneElement extends ReproducingElement {

  _render() {
    this._element = `
      <li class="thumbnail">
        <a href="#!/phones/samsung-gem" class="thumb">
          <img alt="Samsung Gem™" src="img/phones/samsung-gem.0.jpg">
        </a>
        <a href="#!/phones/samsung-gem">Samsung Gem™</a>
        <p>The Samsung Gem™ brings you everything that you would expect and more from a touch display smart phone – more apps, more features and a more affordable price.</p>
      </li>
    `;
  }

}