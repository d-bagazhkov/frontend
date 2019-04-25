'use strict';

import Component from "./Component.js";
import { getAllPhone } from "../repository/PhoneRepository.js";

export default class CatalogPhone extends Component {

    constructor(props) {
        super(props);

        getAllPhone(this.loadPhones.bind(this));

        this.setAction({
            nameEvent: 'click',
            nameAction: 'phoneSelected',
            selector: '[data-action-phone]',
            detailCallback: ({target}) => {
                return target.closest('LI').id;
            }
        });

        this.setAction({
            nameEvent: 'click',
            nameAction: 'addToBasket',
            selector: '[data-action-addToBasket]',
            detailCallback: ({target}) => {
                return target.closest('LI').id;
            }
        });

    }

    render() {
        let sortKey = this.props.sort || 'age';
        return `
        <ul class="phones">
        ${this.phones && this.phones.sort((a, b) => {
            
            if (a[sortKey] < b[sortKey]) {
                return -1;
            }
            if (a[sortKey] > b[sortKey]) {
                return 1;
            }
            return 0;
        }).map((phoneData) =>
            phoneData.name.toLowerCase().includes((this.props.search || '').toLowerCase()) ?
                `
            <li data-age="${phoneData.age}" id="${phoneData.id}" class="thumbnail">
                <a data-action-phone href="#!/phones/${phoneData.id}" class="thumb">
                    <img alt="${phoneData.name}" src="./src/${phoneData.imageUrl}">
                </a>

                <div class="phones__btn-buy-wrapper">
                    <a data-action-addToBasket class="btn btn-success">
                        Add
                    </a>
                </div>

                <a data-action-phone href="#!/phones/${phoneData.id}">${phoneData.name}</a>
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