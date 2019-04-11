import {Component} from "../../services/Component.js";
import {PhoneRepository} from "../../repository/index.js";

export default class PhoneDetailsElement extends Component {

  constructor() {
    super();
    this.repository = new PhoneRepository();
  }

  setPhoneId(id) {
    console.log(id);
    this.repository.getDetailsByIdPhone(id, (json) => {
      this.detailsPhone = json;
      this._element.innerHTML = this._render();
    });
  }

  render() {
    return `
      <div>
        <div>
      
          <img class="phone" src="src/${this.detailsPhone.images[0]}">
      
          <button data-backButton>Back</button>
          <button>Add to basket</button>
      
      
          <h1>${this.detailsPhone.name}</h1>
      
          <p>${this.detailsPhone.description}</p>
      
          <ul class="phone-thumbs">
            ${
              this.detailsPhone.images.map(value => `
              <li>
                <img src="src/${value}">
              </li>
            `).join("")
            }
            <li>
              <img src="src/img/phones/motorola-xoom-with-wi-fi.5.jpg">
            </li>
          </ul>
      
          <ul class="specs">
            <li>
              <span>Availability and Networks</span>
              <dl>
                <dt>Availability</dt>
                
                ${
                  this.detailsPhone.availability
                  .map(value => `
                  <dd>${value}</dd>
                `).join("")
                }
                </dl>
              </li>
              <li>
                <span>Battery</span>
                <dl>
                  <dt>Type</dt>
                  <dd>${this.detailsPhone.battery.type}</dd>
                <dt>Talk Time</dt>
                <dd>${this.detailsPhone.battery.talkTime}</dd>
                <dt>Standby time (max)</dt>
                <dd>${this.detailsPhone.battery.standbyTime}</dd>
              </dl>
            </li>
            <li>
              <span>Storage and Memory</span>
              <dl>
                <dt>RAM</dt>
                <dd>${this.detailsPhone.storage.flash}</dd>
                <dt>Internal Storage</dt>
                <dd>${this.detailsPhone.storage.ram}</dd>
              </dl>
            </li>
            <li>
              <span>Connectivity</span>
              <dl>
                <dt>Network Support</dt>
                <dd>${this.detailsPhone.connectivity.cell}</dd>
                <dt>WiFi</dt>
                <dd>${this.detailsPhone.connectivity.wifi}</dd>
                <dt>Bluetooth</dt>
                <dd>${this.detailsPhone.connectivity.bluetooth}</dd>
                <dt>Infrared</dt>
                <dd>${this.detailsPhone.connectivity.infrared && "✓" || "✘"}</dd>
                <dt>GPS</dt>
                <dd>${this.detailsPhone.connectivity.gps && "✓" || "✘"}</dd>
              </dl>
            </li>
            <li>
              <span>Android</span>
              <dl>
                <dt>OS Version</dt>
                <dd>${this.detailsPhone.android.os}</dd>
                <dt>UI</dt>
                <dd>${this.detailsPhone.android.ui}</dd>
              </dl>
            </li>
            <li>
              <span>Size and Weight</span>
              <dl>
                <dt>Dimensions</dt>
                ${this.detailsPhone.sizeAndWeight.dimensions
                    .map(value => `<dd>${value}</dd>`).join("")}
                <dt>Weight</dt>
                <dd>${this.detailsPhone.sizeAndWeight.weight}</dd>
              </dl>
            </li>
            <li>
              <span>Display</span>
              <dl>
                <dt>Screen size</dt>
                <dd>${this.detailsPhone.display.screenSize}</dd>
                <dt>Screen resolution</dt>
                <dd>${this.detailsPhone.display.screenResolution}</dd>
                <dt>Touch screen</dt>
                <dd>${this.detailsPhone.display.touchScreen && "✓" || "✘"}</dd>
              </dl>
            </li>
            <li>
              <span>Hardware</span>
              <dl>
                <dt>CPU</dt>
                <dd>${this.detailsPhone.hardware.cpu}</dd>
                <dt>USB</dt>
                <dd>${this.detailsPhone.hardware.usb}</dd>
                <dt>Audio / headphone jack</dt>
                <dd>${this.detailsPhone.hardware.audioJack}</dd>
                <dt>FM Radio</dt>
                <dd>${this.detailsPhone.hardware.fmRadio && "✓" || "✘"}</dd>
                <dt>Accelerometer</dt>
                <dd>${this.detailsPhone.hardware.accelerometer && "✓" || "✘"}</dd>
              </dl>
            </li>
            <li>
              <span>Camera</span>
              <dl>
                <dt>Primary</dt>
                <dd>${this.detailsPhone.camera.primary}</dd>
                <dt>Features</dt>
                <dd>${this.detailsPhone.camera.features.join(", ")}</dd>
              </dl>
            </li>
            <li>
              <span>Additional Features</span>
              <dd>${this.detailsPhone.additionalFeatures}</dd>
            </li>
          </ul>
        </div>
      </div>
    `;
  }

}