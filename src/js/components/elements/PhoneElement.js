import {InnerElement} from "./InnerElement.js";

export class PhoneElement extends InnerElement {

  constructor({phoneInfo}) {
    super();

    this._phoneInfo = phoneInfo;
    this._element.innerHTML = this._render();
  }

  _render() {
    return `
      <li class="thumbnail">
        <a href="#!/phones/${this._phoneInfo.id}" class="thumb">
          <img alt="${this._phoneInfo.name}" src="src/${this._phoneInfo.imageUrl}">
        </a>
        <a href="#!/phones/${this._phoneInfo.id}">${this._phoneInfo.name}</a>
        <p>${this._phoneInfo.snippet}</p>
      </li>
    `;
  }

}