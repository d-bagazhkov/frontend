import {ReproducingElement} from "./ReproducingElement.js";

export class SidebarElement extends ReproducingElement {

  _render() {
    this._element.innerHTML = `
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