import {Component} from "../../services/Component.js";

export class PhoneElement extends Component {

  constructor({phoneInfo}) {
    super();

    this._phoneInfo = phoneInfo;
    this._element.innerHTML = this._render();
  }

  render() {
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