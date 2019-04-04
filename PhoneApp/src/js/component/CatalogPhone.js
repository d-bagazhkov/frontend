import {ReproducingElement} from "./ReproducingElement.js";

export class CatalogPhone extends ReproducingElement{
  _render() {
    this._element.innerHTML = `
      <ul class="phones">
        ${
          console.log("dumb")
          //get phones from api
        }
      </ul>
    `;
  }
}