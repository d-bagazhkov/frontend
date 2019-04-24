'use strict';

import Component from "./Component.js";

export default class SortElement extends Component {

    eventSelectFilter = new CustomEvent('selectFilter', { bubbles: true });

    constructor(props) {
        super(props);

        this.on('change', 'SELECT[data-filter]', ({ target }) => {
            this.eventSelectFilter.selectValue = target.value;
            this.element.dispatchEvent(this.eventSelectFilter);
        });
    }

    render() {
        return `
            Sort by:
            <select data-filter>
                <option value="name">Alphabetical</option>
                <option value="age" selected>Newest</option>
            </select>
        `;
    }

}