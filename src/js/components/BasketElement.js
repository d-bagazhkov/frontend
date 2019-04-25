'use strict';

import Component from "./Component.js";
import { getDetailsByIdPhone, getAllPhone } from "../repository/PhoneRepository.js";

export default class BasketElement extends Component {

    phonesInfo = {};

    constructor(props) {
        super(props);

        getAllPhone((phones) => {
            phones.forEach(phone => {
                this.phonesInfo[phone.id] = phone.name;
            });
            this.drawing();
        });

        this.on("click", "[data-phone-id]", ({ target }) => {
            this.props.values = this.props.values.filter(id => id != target.dataset.phoneId);
            this.drawing();
        })
    }

    beforeRender() {
        this.props.values = this.uniqueArray(this.props.values)
    }

    uniqueArray(list) {
        if (!list) return;

        let dumb = {};

        list.forEach(elem => dumb[elem] = null);

        return Object.keys(dumb);
    }

    render() {
        return `
        <p>Shopping Cart</p>
        <ul>
            ${this.props.values && this.props.values.length
                ? this.props.values.map(phoneId =>
                    `<li class=".addedItem" data-phone-id="${phoneId}">${this.phonesInfo[phoneId]}</li>`
                ).join('')
                : '<li>Empty</li>'}
        </ul>
        `;
    }


}