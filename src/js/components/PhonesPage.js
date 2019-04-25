'use strict';

import Component from "./Component.js";
import Sidebar from "./Sidebar.js";
import CatalogPhone from "./CatalogPhone.js";
import PhoneInfo from "./PhoneInfo.js";
import BasketElement from "./BasketElement.js";
import { getDetailsByIdPhone } from "../repository/PhoneRepository.js";

export default class PhonesPage extends Component {

    constructor(props) {
        super(props);

        this.on(
            'phoneSelected',
            '[data-component-catalog-phone]',
            this.toggleView.bind(this));
        this.on(
            'addToBasket',
            '[data-component-catalog-phone]',
            this.addToBasket.bind(this));

        this.on(
            'backButtonPress',
            '[data-component-phone-info]',
            this.toggleView.bind(this));
        this.on(
            'addToBasket',
            '[data-component-phone-info]',
            this.addToBasket.bind(this));

        this.on(
            'searchInput',
            '[data-component-sidebar]',
            this.search.bind(this));
        this.on(
            'selectSortKey',
            '[data-component-sidebar]',
            this.sort.bind(this));

        this.getChild(PhoneInfo).hide()
        this.getChild(CatalogPhone).show()
    }

    render() {
        return `
        <div data-component-sidebar class="col-md-2">
        </div>
        <div data-component-phone-info class="col-md-10"></div>
        <div data-component-catalog-phone class="col-md-10"></div>
        `;
    }

    afterRender() {
        this.connect({
            selector: '[data-component-sidebar]',
            component: Sidebar
        })

        this.connect({
            selector: '[data-component-catalog-phone]',
            component: CatalogPhone
        })

        this.connect({
            selector: '[data-component-phone-info]',
            component: PhoneInfo,
            props: { phoneId: this.selectedPhoneId }
        })

    }

    toggleView({ detail }) {
        let phoneInfo = this.getChild(PhoneInfo);
        let catalog = this.getChild(CatalogPhone);
        if (detail)
            getDetailsByIdPhone(detail, (phone) => {
                phoneInfo.setProps({ phone });
                catalog.hide();
                phoneInfo.show();
            });
        else {
            catalog.show();
            phoneInfo.hide();
        }
            

    }

    search(event) {
        let catalog = this.getChild(CatalogPhone);
        if (catalog) {
            catalog.setProps({ search: event.detail });
        }
    }

    sort(event) {
        let catalog = this.getChild(CatalogPhone);
        if (catalog) {
            catalog.setProps({ sort: event.detail });
        }
    }

    addToBasket(event) {
        let sidebar = this.getChild(Sidebar);
        if (sidebar) {
            let basket = sidebar.getChild(BasketElement);
            if (basket) {
                basket.setProps({ values: [...(basket.props.values || []), event.detail] });
            }
        }
    }

}