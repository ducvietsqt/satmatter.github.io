import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import TextHighlighter from 'vue-text-highlight';
import VuetifyDaterangePicker from "vuetify-daterange-picker";
import "vuetify-daterange-picker/dist/vuetify-daterange-picker.css";


Vue.component('text-highlighter', TextHighlighter);
Vue.use(VuetifyDaterangePicker);

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#6d42c7",
    secondary: "#e57373",
    accent: "#8aacff",
    error: "#e85b48",
    warning: "#fbe4a0",
    info: "#626fe6",
    success: "#24b314",
    grey: "#757575"
  }
})
