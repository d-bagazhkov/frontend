'use strict';

import Component from "./Component.js";
import { getDetailsByIdPhone } from "../repository/PhoneRepository.js";

export default class PhoneInfo extends Component {

  eventBackButtonPress = new CustomEvent('backButtonPress', { bubbles: true });
  eventAddToBasket = new CustomEvent('addToBasket', { bubbles: true });

  constructor(props) {
    super(props);

    getDetailsByIdPhone(this.props.phoneId, (phone) => {
      this.phone = phone;
      this.drawing();
    });

    this.on('click', 'BUTTON[data-backButton]', ({ target }) => {
      this.element.dispatchEvent(this.eventBackButtonPress);
    });

    this.on('click', 'BUTTON[data-action-addToBasket]', ({ target }) => {
      this.eventAddToBasket.phoneId = this.phone.id;
      this.element.dispatchEvent(this.eventAddToBasket);
    });
  }

  render() {

    return this.phone ? `
        <img class="phone" src="./src/${this.phone.images[0]}">

    <button data-backButton>Back</button>
    <button data-action-addToBasket>Add to basket</button>


    <h1>${this.phone.name}</h1>

    <p>${this.phone.description}</p>

    <ul class="phone-thumbs">
    ${this.phone.images.map(image => `
      <li>
        <img src="./src/${image}">
      </li>`).join('')}
    </ul>

    <ul class="specs">
      <li>
        <span>Availability and Networks</span>
        <dl>
          <dt>Availability</dt>
          ${this.phone.availability.map(data => `
            <dd>${data}</dd>`).join('')}
        </dl>
      </li>
      <li>
        <span>Battery</span>
        <dl>
          <dt>Type</dt>
          <dd>${this.phone.battery.type}</dd>
          <dt>Talk Time</dt>
          <dd>${this.phone.battery.talkTime}</dd>
          <dt>Standby time (max)</dt>
          <dd>${this.phone.battery.standbyTime}</dd>
        </dl>
      </li>
      <li>
        <span>Storage and Memory</span>
        <dl>
          <dt>RAM</dt>
          <dd>${this.phone.storage.ram}</dd>
          <dt>Internal Storage</dt>
          <dd>${this.phone.storage.flash}</dd>
        </dl>
      </li>
      <li>
        <span>Connectivity</span>
        <dl>
          <dt>Network Support</dt>
          <dd>${this.phone.connectivity.cell}</dd>
          <dt>WiFi</dt>
          <dd>${this.phone.connectivity.wifi}</dd>
          <dt>Bluetooth</dt>
          <dd>${this.phone.connectivity.bluetooth}</dd>
          <dt>Infrared</dt>
          <dd>${this.phone.connectivity.infrared ? '✓' : '✘'}</dd>
          <dt>GPS</dt>
          <dd>${this.phone.connectivity.gps ? '✓' : '✘'}</dd>
        </dl>
      </li>
      <li>
        <span>Android</span>
        <dl>
          <dt>OS Version</dt>
          <dd>${this.phone.android.os}</dd>
          <dt>UI</dt>
          <dd>${this.phone.android.ui}</dd>
        </dl>
      </li>
      <li>
        <span>Size and Weight</span>
        <dl>
          <dt>Dimensions</dt>
          ${this.phone.sizeAndWeight.dimensions.map(data => `
            <dd>${data}</dd>`).join('')}
          <dt>Weight</dt>
          <dd>${this.phone.sizeAndWeight.weight}</dd>
        </dl>
      </li>
      <li>
        <span>Display</span>
        <dl>
          <dt>Screen size</dt>
          <dd>${this.phone.display.screenSize}</dd>
          <dt>Screen resolution</dt>
          <dd>${this.phone.display.screenResolution}</dd>
          <dt>Touch screen</dt>
          <dd>${this.phone.display.touchScreen ? '✓' : '✘'}</dd>
        </dl>
      </li>
      <li>
        <span>Hardware</span>
        <dl>
          <dt>CPU</dt>
          <dd>${this.phone.hardware.cpu}</dd>
          <dt>USB</dt>
          <dd>${this.phone.hardware.usb}</dd>
          <dt>Audio / headphone jack</dt>
          <dd>${this.phone.hardware.audioJack}</dd>
          <dt>FM Radio</dt>
          <dd>${this.phone.hardware.fmRadio ? '✓' : '✘'}</dd>
          <dt>Accelerometer</dt>
          <dd>${this.phone.hardware.physicalKeyboard ? '✓' : '✘'}</dd>
        </dl>
      </li>
      <li>
        <span>Camera</span>
        <dl>
          <dt>Primary</dt>
          <dd>${this.phone.camera.primary}</dd>
          <dt>Features</dt>
          <dd>${this.phone.camera.features.join(', ')}</dd>
        </dl>
      </li>
      <li>
        <span>Additional Features</span>
        <dd>${this.phone.additionalFeatures}</dd>
      </li>
    </ul>
        `:
      `<div data-loading>Loading</div>`;
  }


}