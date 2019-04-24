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
        })
    }

    beforeRender() {
        this.state.values = this.uniqueArray(this.state.values)
    }

    uniqueArray(list) {
        if (!list) return;

        let dumb = {};

        list.forEach(elem => dumb[elem] = null);

        return Object.keys(dumb);
    }

    render() {
        console.log(this.state);

        return `
        <p>Shopping Cart</p>
        <ul>
            ${this.state.values
                ? this.state.values.map(phoneId =>
                    `<li>${this.phonesInfo[phoneId]}</li>`
                ).join('')
                : '<li>Empty</li>'}
        </ul>
        `;
    }


}