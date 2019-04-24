'use strict';

import Component from "./Component.js";
import Sidebar from "./Sidebar.js";
import CatalogPhone from "./CatalogPhone.js";
import PhoneInfo from "./PhoneInfo.js";
import BasketElement from "./BasketElement.js";

export default class PhonesPage extends Component {

    constructor(props) {
        super(props);

        this.on(
            'phoneSelected',
            '[data-catalog-phone]',
            this.toggleView.bind(this));

        this.on(
            'backButtonPress',
            '[data-phone-info]',
            this.toggleView.bind(this));

        this.on(
            'searchInput',
            '[data-sidebar]',
            this.search.bind(this));

        this.on(
            'selectFilter',
            '[data-sidebar]',
            this.filter.bind(this));

        this.on(
            'addToBasket',
            '[data-catalog-phone]',
            this.addToBasket.bind(this));

        this.on(
            'addToBasket',
            '[data-phone-info]',
            this.addToBasket.bind(this));
    }

    render() {
        return `
        <div data-sidebar class="col-md-2">
        </div>
        ${this.selected
                ? ` <div data-phone-info class="col-md-10"></div>`
                : ` <div data-catalog-phone class="col-md-10"></div>`}
        `;
    }

    afterRender() {
        this.connect({
            selector: '[data-sidebar]',
            component: Sidebar
        })

        this.connect({
            selector: '[data-catalog-phone]',
            component: CatalogPhone
        })

        this.connect({
            selector: '[data-phone-info]',
            component: PhoneInfo,
            props: { phoneId: this.selectedPhoneId }
        })

    }

    toggleView(event) {
        this.selected = !this.selected;
        this.selectedPhoneId = event.phoneId;
        this.drawing();
    }

    search(event) {
        let catalog = this.getChild(CatalogPhone);
        if (catalog) {
            console.log("update catalog phone (sort)");
            catalog.setState({ search: event.inputValue });
            catalog.drawing();
        }
    }

    filter(event) {
        let catalog = this.getChild(CatalogPhone);
        if (catalog) {
            console.log("update catalog phone (filter)");
            catalog.setState({ filter: event.selectValue });
            catalog.drawing();
        }
    }

    addToBasket(event) {
        let sidebar = this.getChild(Sidebar);
        if (sidebar) {
            let basket = sidebar.getChild(BasketElement);
            if (basket instanceof Component) {
                basket.setState({ values: [...(basket.state.values || []), event.phoneId] });
                console.log("update sidebar. add to basket '" + event.phoneId + "'");
                basket.drawing();
            }
        }
    }

}