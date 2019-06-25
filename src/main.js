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
import {getSESSION, SESSION} from "./utils";

Vue.prototype.$http = axios;
Vue.prototype.$underscore = _;
Vue.prototype.$moment = moment;
Vue.prototype.$uuid = uuid;

// setSESSION(SESSION.TOKEN, 'vlxx.tv');


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
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImR1Y3ZpZXRzcXRAZ21haWwuY29tIiwiZXhwIjoxNTYxMzQxNjk5LCJlbWFpbCI6ImR1Y3ZpZXRzcXRAZ21haWwuY29tIiwic2Vzc2lvbl9pZCI6IjdiNDM2YzUxLWNjOTQtNDk2Mi04MGU0LTc0NTVjOTcwMzA1NiIsIndvcmtzcGFjZSI6ImphdjEifQ.ugz5kM1b5SFrBJ9YZxMXhnqMJbAcL0hZQ4WqXnoMsyg';
if (token) {
  setAxiosAuthorizationHeader(token);
}
Vue.prototype.$eventHub = new Vue(); // Global event bus
Vue.prototype.$eventTypes = {
  toggleDrawer: "toggleDrawer",
  toggleRightDrawer: "toggleRightDrawer",
  setRightDrawer: "setRightDrawer",
  appClick: "appClick",
  snackNotify: "snackNotify",
  menuProjectSetting: "menuProjectSetting",
  profileUserDrawer: "profileUserDrawer",
  DeterminateProgress: "DeterminateProgress",
  ModalOnBoard: "ModalOnBoard",
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')