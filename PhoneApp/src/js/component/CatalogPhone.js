import {InnerElement} from "./InnerElement.js";
import {PhoneRepository} from "../repository";
import {PhoneElement} from "./PhoneElement.js";

export default class CatalogPhone extends InnerElement {

  constructor() {
    super();
    this.repository = new PhoneRepository();
    this.repository.getAllPhone((json) => {
      let txt = json
          .map(phoneInfo =>
              new PhoneElement({phoneInfo})
          )
          .join('');
      let elem = document.querySelector("ul.phones");
      elem.innerHTML = txt;
    });
  }

  _render() {
    return `
      <ul class="phones">
        
      </ul>
    `;
  }

}