import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'
import './plugins/axios'
import './plugins/highlight'
import './plugins/global'

const Stick = require('vue-stick')
import './styles.scss'
import './styles/style.scss'
import './assets/iconfont/iconfont.css'
Vue.use(ElementUI)
Vue.use(Stick)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
