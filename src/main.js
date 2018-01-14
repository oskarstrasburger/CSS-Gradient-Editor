// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHighlightJS from 'vue-highlightjs';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'highlight.js/styles/github-gist.css';

import App from './App';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueHighlightJS);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
