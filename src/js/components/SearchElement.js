'use strict';

import Component from "./Component.js";

export default class SearchElement extends Component {

    constructor(props) {
        super(props);

        this.setAction({
            nameEvent: 'input',
            nameAction: 'searchInput',
            selector: '[data-action-search]',
            detailCallback: ({ target }) => {
                return target.value;
            }
        }); 
    }

    render() {
        return `
            Search:
            <input data-action-search type="text" />
        `;
    }

}