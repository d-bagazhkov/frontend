import {CatalogPhone, PhoneDetails, SidebarElement} from "../index.js";
import ReproducingElement from "./ReproducingElement.js";

export default class PhonePage extends ReproducingElement {

  constructor(props) {
    super({
      ...props,
      components: {
        SidebarElement: new SidebarElement(),
        CatalogPhone: new CatalogPhone(),
        PhoneDetails: new PhoneDetails()
      }
    });
    this._element.addEventListener("click", this.details.bind(this));
  }

  _render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <div data-element="SidebarElement" class="col-md-2"></div>
          <!--Main content-->
          <div id="mainContent" data-element="CatalogPhone" class="col-md-10" /></div>
        </div>
      </div>
    `;
  }

  details(event) {
    console.log();
    switch (true) {
      case event.target.nodeName === "A"
      && event.target.parentElement.classList.contains("thumbnail")
      || event.target.nodeName === "IMG"
      && event.target.parentElement.parentElement.classList.contains("thumbnail"):
        this._element.querySelector('[data-element="CatalogPhone"]').dataset.element = "PhoneDetails";
        break;
      case event.target.dataset.backbutton !== undefined:
        this._element.querySelector('[data-element="PhoneDetails"]').dataset.element = "CatalogPhone";
        break;
      default:
        return;
    }
    this._repaint();
  }

}