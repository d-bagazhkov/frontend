export default class PhonePage {

  constructor({element, catalogPhone, sidebar}) {
    this.element = element;
    this.sidebar = sidebar;
    this.catalogPhone = catalogPhone;
    this._render();
  }

  _render() {
    this.element.innerHTML = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            ${this.sidebar}
          </div>
          <!--Main content-->
          <div class="col-md-10">
            ${this.catalogPhone}
          </div>
        </div>
      </div>
    `;
  }

}