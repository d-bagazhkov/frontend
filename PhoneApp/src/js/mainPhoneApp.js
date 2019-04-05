import {PhonePage, SidebarElement, CatalogPhone} from './component';

new PhonePage({
  element: document.querySelector("[data-root]"),
  sidebar: new SidebarElement(),
  catalogPhone: new CatalogPhone()
});