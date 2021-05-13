import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { ThemeProvider } from 'vue-styled-components';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style/common.css';

Vue.config.productionTip = false;

Vue.component('theme-provider', ThemeProvider);

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
