'use strict';

import PageHeader from './components/PageHeader.js';
import PhonesPage from './components/PhonesPage.js';
import PageFooter from './components/PageFooter.js';

new PageHeader({
  selector: '[data-pageHeader]'
})

new PhonesPage({
  selector: '[data-pageData]'
})

new PageFooter({
  selector: '[data-pageFooter]'
})


