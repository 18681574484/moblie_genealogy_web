import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/index.vue'
import HomeCentre from '@/components/centre/homeCentre.vue'
import HomeList from '@/components/centre/homeList.vue'
import county from '@/components/centre/county.vue'
import personnel from '@/components/centre/personnel.vue'
import video from '@/components/centre/video.vue'
import celebrity from '@/components/centre/celebrity.vue'
import branch from '@/components/centre/branch.vue'
import culture from '@/components/centre/culture.vue'
import characterDeatils from '@/components/centre/characterDetails.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeList
    },
    {
      path: '/video',
      component: video
    },
    {
      path: '/chatting',
      component: county
    },
    {
      path: '/add',
      component: personnel
    },
    {
      path: '/personal',
      component: culture
    }
  ]
})
