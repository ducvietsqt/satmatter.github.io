import Vue from 'vue'
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

import './plugins/vuetify'
import axios from './plugins/axios'
import './plugins/filter'
import './plugins/veevalidate'
import App from './App.vue'
import router from "./router/index";
import store from './store'
import _ from 'lodash';
import moment from 'moment';
import uuid from 'uuid/v4';


import { setAxiosAuthorizationHeader } from "./store/modules/auth";
import {getSESSION, SESSION,setSESSION} from "./utils"; // eslint-disable-line

Vue.prototype.$http = axios;
Vue.prototype.$underscore = _;
Vue.prototype.$moment = moment;
Vue.prototype.$uuid = uuid;

// setSESSION(SESSION.TOKEN, 'vlxx.tv');
// setSESSION

Vue.config.productionTip = false;
// Auto import all layout components
const requireComponent = require.context(
  // The relative path of the components folder
  "./layouts"
);
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Strip the leading `./` and extension from the filename
      fileName.replace(/^\.\/(.*)\.\w+$/, "$1")
    )
  );
// Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});
const token = getSESSION(SESSION.TOKEN);
if (token) {
  setAxiosAuthorizationHeader(token);
}
Vue.prototype.$eventHub = new Vue(); // Global event bus
Vue.prototype.$eventTypes = {
  appClick: "appClick",
  snackNotify: "snackNotify",
  profileUserDrawer: "profileUserDrawer",
  DeterminateProgress: "DeterminateProgress",
  ModalOnBoard: "ModalOnBoard",
  ModalAdvanceQuery: "ModalAdvanceQuery",
  DrawerMyAccount: "DrawerMyAccount",

};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
