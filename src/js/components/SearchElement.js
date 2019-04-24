'use strict';

import Component from "./Component.js";

export default class SearchElement extends Component {

    eventSearchInput = new CustomEvent('searchInput', { bubbles: true });

    constructor(props) {
        super(props);

        this.on('input', 'INPUT[data-search]', ({ target }) => {
            this.eventSearchInput.inputValue = target.value;
            this.element.dispatchEvent(this.eventSearchInput);
        });
    }

    render() {
        return `
            Search:
            <input data-search type="text" />
        `;
    }

}