import {Component} from "../../services/Component.js";
import {PhoneRepository} from "../../repository/index.js";

export default class CatalogPhoneElement extends Component {

  state = {
    phones: []
  };

  render() {
    let phones;
    return `
      <div id="CatalogPhoneElement" class="col-md-10">
        <ul class="phones">
          ${(phones = this.state.phones) && phones.map(phone => `
            <li id="${phone.id}" class="thumbnail">
              <a href="#!/phones/${phone.id}" class="thumb">
                <img alt="${phone.name}" src="src/${phone.imageUrl}">
              </a>
              <a href="#!/phones/${phone.id}">${phone.name}</a>
              <p>${phone.snippet}</p>
            </li>
          `).join('') || ""}
        </ul>
      </div>
    `;
  }

  afterCreate() {
    this.repository = new PhoneRepository();
    this.repository.getAllPhone(this.updateState.bind(this));
  }

  updateState(phones) {
    this.setState({phones});
    console.log(this.state)
  }

}
