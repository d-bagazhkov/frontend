'use strict';

import Component from "./Component.js";
import SearchElement from "./SearchElement.js";
import SortElement from "./SortElement.js";
import BasketElement from "./BasketElement.js";

export default class Sidebar extends Component {

    render() {
        return `
        <section>
            <p data-component-search></p>
            <p data-component-sort></p>
        </section>

        <section data-component-basket></section>
        `;
    }

    afterRender() {
        this.connect({
            selector: '[data-component-search]',
            component: SearchElement
        })
        this.connect({
            selector: '[data-component-sort]',
            component: SortElement
        })
        this.connect({
            selector: '[data-component-basket]',
            component: BasketElement
        })
    }

}