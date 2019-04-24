'use strict';

import Component from "./Component.js";
import { getAllPhone } from "../repository/PhoneRepository.js";

export default class CatalogPhone extends Component {

    eventPhoneSelected = new CustomEvent('phoneSelected', { bubbles: true });
    eventAddToBasket = new CustomEvent('addToBasket', { bubbles: true });

    constructor(props) {
        super(props);

        getAllPhone(this.loadPhones.bind(this));

        this.on('click', 'A[data-phone]', ({ target }) => {
            this.eventPhoneSelected.phoneId = target.closest('LI').id;
            this.element.dispatchEvent(this.eventPhoneSelected);
        });

        this.on('click', 'A[data-action-addToBasket]', ({ target }) => {
            this.eventAddToBasket.phoneId = target.closest('LI').id;
            this.element.dispatchEvent(this.eventAddToBasket);
        });
    }

    render() {
        let filterKey = this.state.filter || 'age';
        return `
        <ul class="phones">
        ${this.phones && this.phones.sort((a, b) => {
            
            if (a[filterKey] < b[filterKey]) {
                return -1;
            }
            if (a[filterKey] > b[filterKey]) {
                return 1;
            }
            return 0;
        }).map((phoneData) =>
            phoneData.name.toLowerCase().includes((this.state.search || '').toLowerCase()) ?
                `
            <li data-age="${phoneData.age}" id="${phoneData.id}" class="thumbnail">
                <a data-phone href="#!/phones/${phoneData.id}" class="thumb">
                    <img alt="${phoneData.name}" src="./src/${phoneData.imageUrl}">
                </a>

                <div class="phones__btn-buy-wrapper">
                    <a data-action-addToBasket class="btn btn-success">
                        Add
                    </a>
                </div>

                <a data-phone href="#!/phones/${phoneData.id}">${phoneData.name}</a>
                <p>${phoneData.snippet}</p>
            </li>
        ` : ''
        ).join('')
            || `Phone not found`}
        </ul>
        `;
    }

    loadPhones(phones) {
        this.phones = phones;
        this.drawing();
    }

}