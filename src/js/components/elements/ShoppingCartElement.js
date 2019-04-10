import {Component} from "../../services/Component.js";

export default class ShoppingCartElement extends Component {

  render() {
    return `
      <section id="ShoppingCartElement">
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