import Vue from "vue";
import VueSocketIO from "vue-socket.io";
import VueRouter from "vue-router";
import VueHeadful from "vue-headful";
import vSelect from "vue-select";
import VuePhoneNumberInput from "vue-phone-number-input";

import App from "./components/App";
import router from "./router";
import store from "./store";

// Prevent production tip on startup
Vue.config.productionTip = false;

// Use plugins
Vue.use(VueSocketIO, process.env.VUE_APP_SOCKET_ADDRESS);
Vue.use(VueRouter);

// Set up vue-headful
Vue.component("vue-headful", VueHeadful);

// Set up vue-select
Vue.component("v-select", vSelect);

// Set up vue-phone-number-input
Vue.component("vue-phone-number-input", VuePhoneNumberInput);

// Create Vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
