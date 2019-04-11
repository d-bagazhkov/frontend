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
          <div id="CatalogPhoneElement"  /></div>
        </div>
      </div>
    `;
  }

  afterMount() {
    AppRegistry.render({
      element: this.element,
      component: new SidebarElement()
    });
    AppRegistry.render({
      element: this.element,
      component: new ShoppingCartElement()
    });
    if (!this.state.selectedPhoneId)
      AppRegistry.render({
        element: this.element,
        component: new CatalogPhoneElement()
      });
    else
      AppRegistry.render({
        element: this.element,
        component: new PhoneDetailsElement(this.state.selectedPhoneId)
      });
  }


}