import {CatalogPhone, SidebarElement} from "../index.js";
import ReproducingElement from "./ReproducingElement.js";

export default class PhonePage extends ReproducingElement {

  constructor(props) {
    super({
      ...props,
      components: {
        SidebarElement: new SidebarElement(),
        CatalogPhone: new CatalogPhone()
      }
    });
  }

  _render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <div data-element="SidebarElement" class="col-md-2"></div>
          <!--Main content-->
          <div data-element="CatalogPhone" class="col-md-10" /></div>
        </div>
      </div>
    `;
  }

}