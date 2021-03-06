// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import api from './config/api'
import store from './store/index'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.prototype.api = api

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');