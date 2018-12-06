import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/index.vue'
// import Index from '@/components/views/index.vue'
import HomeCentre from '@/components/centre/homeCentre.vue'
import HomeList from '@/components/centre/homeList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeCentre
    }
  ]
})
