import {PhonePage, SidebarElement, CatalogPhone} from './component/index.js';

new PhonePage({
  element: document.querySelector("[data-root]"),
  sidebar: new SidebarElement(),
  catalogPhone: new CatalogPhone()
});