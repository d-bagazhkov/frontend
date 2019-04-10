import {Component} from "../../services/Component.js";
import AppRegistry from "../../services/AppRegistry.js";
import {SidebarElement, ShoppingCartElement, CatalogPhoneElement, PhoneDetailsElement} from "../index.js";

export default class PhonePage extends Component {

  render() {
    return `
      <div id="PhonePage" class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            <div id="SidebarElement"></div>
            <div id="ShoppingCartElement"></div>
          </div>
          <div data-element="CatalogPhone" class="col-md-10" /></div>
        </div>
      </div>
    `;
  }

  after() {
    AppRegistry.render({
      component: new SidebarElement(),
      element: this.element
    });
    AppRegistry.render({
      component: new ShoppingCartElement(),
      element: this.element
    });
    if (!this.state.selectedPhoneId)
      AppRegistry.render({
        component: new CatalogPhoneElement(),
        element: this.element
      });
    else
      AppRegistry.render({
        component: new PhoneDetailsElement(this.state.selectedPhoneId),
        element: this.element
      });
  }


}