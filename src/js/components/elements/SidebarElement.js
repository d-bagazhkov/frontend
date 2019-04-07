import {InnerElement} from "./InnerElement.js";

export default class SidebarElement extends InnerElement {

  constructor() {
    super();

    this._element.innerHTML = this._render();
  }

  _render() {
    return `
      <section>
        <p>
          Search:
          <input>
        </p>
    
        <p>
          Sort by:
          <select>
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>
      </section>
    
      <section>
        <p>Shopping Cart</p>
        <ul>
          <li>Phone 1</li>
          <li>Phone 2</li>
          <li>Phone 3</li>
        </ul>
      </section>
    `;
  }

}