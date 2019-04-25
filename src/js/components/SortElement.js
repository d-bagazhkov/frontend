'use strict';

import Component from "./Component.js";

export default class SortElement extends Component {

    constructor(props) {
        super(props);

        this.setAction({
            nameEvent: 'change',
            nameAction: 'selectSortKey',
            selector: '[data-action-select]',
            detailCallback: ({ target }) => {
                return target.value;
            }
        });
    }

    render() {
        return `
            Sort by:
            <select data-action-select>
                <option value="name">Alphabetical</option>
                <option value="age" selected>Newest</option>
            </select>
        `;
    }

}