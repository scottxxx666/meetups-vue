// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/components/Globals';
import Vue from 'vue';
import App from './App';
import router from './router';

const isDebugMode = process.env.NODE_ENV !== 'production';

Vue.config.productionTip = false;
Vue.config.debug = isDebugMode;
Vue.config.devtools = isDebugMode;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
