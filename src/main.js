import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui"
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/reset.scss'
import './mock/index.js'

Vue.config.productionTip = false;
Vue.use(Element);
Vue.prototype.axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
