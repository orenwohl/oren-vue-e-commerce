import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import AOS from "aos";
import "aos/dist/aos.css";

Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faShoppingCart);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  moounted() {},
}).$mount("#app");
