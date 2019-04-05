import {CatalogPhone, SidebarElement} from "./index.js";

export default class PhonePage {

  constructor({element}) {
    this.element = element;
    this._render();
  }

  _render() {
    this.element.innerHTML = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            ${new SidebarElement()}
          </div>
          <!--Main content-->
          <div class="col-md-10">
            ${new CatalogPhone}
          </div>
        </div>
      </div>
    `;
  }

}