import {PhonePage} from './components/index.js';
import AppRegistry from "./services/AppRegistry.js";

AppRegistry.render({
  selector: "[data-root]",
  component: new PhonePage()
});
