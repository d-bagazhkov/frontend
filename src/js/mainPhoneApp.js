'use strict';

import PageHeader from './components/PageHeader.js';
import PhonesPage from './components/PhonesPage.js';
import PageFooter from './components/PageFooter.js';

new PageHeader({
  selector: '[data-component-header]'
})

new PhonesPage({
  selector: '[data-component-main]'
})

new PageFooter({
  selector: '[data-component-footer]'
})


