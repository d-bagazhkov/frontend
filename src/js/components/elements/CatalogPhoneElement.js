import {Component} from "../../services/Component.js";
import {PhoneRepository} from "../../repository/index.js";
import {PhoneElement} from "./PhoneElement.js";

export default class CatalogPhoneElement extends Component {

  constructor() {
    super();
    this.repository = new PhoneRepository();
    this._element.innerHTML = this._render();
    this.repository.getAllPhone((json) => {
      let content = json
          .map(phoneInfo =>
              new PhoneElement({phoneInfo})
          )
          .join('');
      let elem = this._element.querySelector("ul.phones");
      elem.innerHTML = content;
    });
  }

  _render() {
    return `<ul class="phones"></ul>`;
  }

}
