import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueTypedJs from "vue-typed-js";
import "./assets/Global.css";

Vue.config.productionTip = false;
Vue.use(VueTypedJs);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
