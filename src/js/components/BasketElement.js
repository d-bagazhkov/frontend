'use strict';

import Component from "./Component.js";
import { getDetailsByIdPhone, getAllPhone } from "../repository/PhoneRepository.js";

export default class BasketElement extends Component {

    phonesInfo = {};

    style = {
        item: `
            list-style-type: none
            `,
        press: `
            border: 1px black solid; 
            width: 2rem; 
            border-radius: 50%;
            text-align: center;
            cursor: pointer`
    }

    constructor(props) {
        super(props);

        getAllPhone((phones) => {
            phones.forEach(phone => {
                this.phonesInfo[phone.id] = phone.name;
            });
            this.drawing();
        });

        this.on("click", "[data-action-delete]", ({ target }) => {
            this.props.values = this.props.values.filter(id => id != target.closest("[data-phone-id]").dataset.phoneId);
            this.drawing();
        })

        this.on("click", "[data-action-add]", ({ target }) => {
            this.props.values.push(target.closest("[data-phone-id]").dataset.phoneId);
            this.drawing();
        })

        this.on("click", "[data-action-remove]", ({ target }) => {
            let id = target.closest("[data-phone-id]").dataset.phoneId;
            let indexId = this.props.values.indexOf(id);
            this.props.values.splice(indexId, 1);
            this.drawing();
        })
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
                ? this.uniqueArray(this.props.values).map(phoneId =>
                    `<li style="${this.style.item}"  data-phone-id="${phoneId}">
                        <label>${this.props.values.reduce((store, id) => {
                        if (id === phoneId)
                            return store + 1;
                        return store;
                    }, 0)}</label>
                        <label style="${this.style.press}" data-action-add>+</label>
                        <label style="${this.style.press}" data-action-remove>-</label>
                        <label style="${this.style.press}" data-action-delete>X</label>
                        ${this.phonesInfo[phoneId]}
                    </li>`
                ).join('')
                : '<li>Empty</li>'}
        </ul>
        `;
    }


}