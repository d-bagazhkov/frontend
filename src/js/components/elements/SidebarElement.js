import {Component} from "../../services/Component.js";

export default class SidebarElement extends Component {

  render() {
    return `
      <section id="SidebarElement">
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
    `;
  }

}