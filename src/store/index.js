import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import layout from "./modules/layout";
import createLogger from "vuex/dist/logger";
import auth from "./modules/auth";
import search from "./modules/search";


// DongA
import workspace from "./modules/workspace";
import ui from "./modules/ui";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    user,
    layout,
    auth,

    // DongA
    workspace,
    ui,
    search,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
