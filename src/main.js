// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import 'common/style/same.css';
import 'common/style/common.css';
import 'common/style/animate.css';

/* import {
  imgload
} from 'common/js/general'; */
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, {
  error: require('../static/images/mzapp.png'),
  loading: require('../static/images/mzapp.png')
})
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
