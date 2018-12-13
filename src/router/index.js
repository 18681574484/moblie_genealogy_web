import Vue from 'vue'
import Router from 'vue-router'
import Indexs from '@/components/views/index.vue'
import Home from '@/components/centre/home.vue'
import HomeCentre from '@/components/centre/homeCentre.vue'
import HomeList from '@/components/centre/homeList.vue'
import county from '@/components/centre/county.vue'
import personnel from '@/components/centre/personnel.vue'
import video from '@/components/centre/video.vue'
import announcement from '@/components/centre/announcement.vue'
import culture from '@/components/centre/culture.vue'

import celebrity from '@/components/centre/celebrity.vue'
import branch from '@/components/centre/branch.vue'
import industry from '@/components/centre/industry.vue'
import region from '@/components/centre/region.vue'


import faction from '@/components/centre/faction.vue'
import characterDeatils from '@/components/centre/characterDetails.vue'
import characterElite from '@/components/centre/characterElite.vue'
import characterIntroduction from '@/components/centre/characterIntroduction.vue'
import countyLevel from '@/components/centre/countyLevel.vue'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      // 首页
      path: '/home',
      component: Home
    },
    {
      path: '/home',
      component: Indexs,
        children:[
          {
            path:'/HomeList',
            component: HomeList
          },
          // 家族视频
          {
            path:'/video',
            component: video
          },
          // 聊天
          {
            path: '/chatting',
            component: Home
          },
          // 支出明细
          {
            path: '/sum',
            component: county
          },
          // 慈善公益
          {
            path: '/famousperson',
            component: personnel
          }, 
          // 加号
          {
            path: '/add',
            component: Home
          },
          // 捐款名人
          // 慈善公益
          {
            path: '/public',
            component: county
          }, 
          {
            path: '/personal',
            component: branch
          },
          {
            path: '/announcement',
            component: announcement
          },
          {
            path: '/culture',
            component: culture
          },   
          {
            path: '/branch',
            component: branch
          },
          {
            path: '/personnel',
            component: personnel
          }, 
          {
            path: '/industry',
            component: industry
          }
        ]
    },
    // 家族字派
    {
      path: '/faction',
      component: faction
    },
    // 祖先人物详情
    {
      path: '/characterDeatils',
      component: characterDeatils
    },
    {
      path: '/characterElite',
      component: characterElite
    },
    {
      path: '/characterIntroduction',
      component: characterIntroduction
    },
    {
      path: '/countyLevel',
      component: countyLevel
    },   
    // 选择地址
    {
      path: '/region',
      component: region
    }

 
 
   
  ]
})
