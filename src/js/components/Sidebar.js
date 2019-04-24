'use strict';

import Component from "./Component.js";
import SearchElement from "./SearchElement.js";
import SortElement from "./SortElement.js";
import BasketElement from "./BasketElement.js";

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return `
        <section>
            <p data-search></p>
            <p data-sort></p>
        </section>

        <section data-basket></section>
        `;
    }

    afterRender() {
        this.connect({
            selector: '[data-search]',
            component: SearchElement
        })
        this.connect({
            selector: '[data-sort]',
            component: SortElement
        })
        this.connect({
            selector: '[data-basket]',
            component: BasketElement
        })
    }

}