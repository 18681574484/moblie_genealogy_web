import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/index.vue'
// import Index from '@/components/views/index.vue'
import HomeCentre from '@/components/centre/homeCentre.vue'
import HomeList from '@/components/centre/homeList.vue'
import HeaderTake from '@/components/Header/HeaderTake.vue'
import county from '@/components/centre/county.vue'
import personnel from '@/components/centre/personnel.vue'
import video from '@/components/centre/video.vue'
import celebrity from '@/components/centre/celebrity.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/personnel'
    },
    {
      path: '/home',
      component: celebrity
    }
  ]
})
