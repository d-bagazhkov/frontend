import {ReproducingElement} from './ReproducingElement.js';
import {SidebarElement} from "./SidebarElement.js";
import {CatalogPhone} from "./CatalogPhone.js";

export default class PhonePage extends ReproducingElement {

  _render() {
    this._element.innerHTML = `
      <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        ${
          new SidebarElement({
            element: null
          })
        }
      </div>
      <!--Main content-->
      <div class="col-md-10">
        ${
        new CatalogPhone({
          element: null
        })
        }
      </div>
    </div>
  </div>
    `;
  }

}