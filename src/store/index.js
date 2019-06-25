import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import layout from "./modules/layout";
import createLogger from "vuex/dist/logger";
import auth from "./modules/auth";

// DongA
import projectDetail from "./modules/projectdetail";
import workspace from "./modules/workspace";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    user,
    layout,
    auth,

    // DongA
    projectDetail,
    workspace
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
