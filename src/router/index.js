import Vue from 'vue'
import Router from 'vue-router'
import Indexs from '@/components/views/index.vue'
import Home from '@/components/centre/home.vue'
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
import dynamic from '@/components/centre/dynamic.vue'
import articleCharacterDetails from '@/components/centre/articleCharacterDetails.vue'

import faction from '@/components/centre/faction.vue'
import characterDeatils from '@/components/centre/characterDetails.vue'
import characterElite from '@/components/centre/characterElite.vue'
import characterIntroduction from '@/components/centre/characterIntroduction.vue'
import test from '@/components/centre/test.vue'
import countyLevel from '@/components/centre/countyLevel.vue'

//  详情页
import notice from '@/components/particulars/detailsNotice.vue' // 公告
import dynamicDetails from '@/components/particulars/dynamicDetails.vue' // 动态
import theArticleDetails from '@/components/particulars/theArticleDetails.vue' // 首页文章详情




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
          // 支出明细
          {
            path: '/sum',
            component: county
          }, 
          // 慈善公益
          {
            path: '/county',
            component: county
          }, 
          // 家族名人
          {
            path: '/branch',
            component: branch,
          },
          // 县级公告
          {
            path: '/announcement',
            component: announcement
          },
          // 家族文化
          {
            path: '/culture',
            component: culture
          },  
          // 捐款列表金额时间 
          {
            path: '/personnel',
            component: personnel
          }, 
          // 家族产业
          {
            path: '/industry',
            component: industry
          },
          // 家族动态
          {
            path: '/dynamic',
            component: dynamic
          },
          // 慈善帮扶
          {
            path: '/articleCharacterDetails',
            component: articleCharacterDetails
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
      name: 'characterDeatils',
      component: characterDeatils
    },
    // 捐款名人文章详情
    {
      path: '/characterElite/:id',
      name: 'characterElite',
      component: characterElite
    },
    // 文章详情
    {
      path: '/characterIntroduction',
      component: characterIntroduction
    },
    // 公告详情
    {
      path: '/notice/:id',
      name:'notice',
      component: notice
    },
    // 动态详情
    {
      path: '/dynamicDetails/:id',
      name:'dynamicDetails',
      component: dynamicDetails
    },
    // 慈善帮扶详情
    {
      path: '/countyLevel',
      component: countyLevel
    },  
    // 首页文章详情
    {
      path: '/theArticleDetails',
      component: theArticleDetails
    }, 
    // 选择地址
    {
      path: '/region',
      component: region
    },
    // 聊天
    {
      path: '/chatting',
      component: Home
    }, 
    // 加号
    {
      path: '/add',
      component: Home
    },
    // 家族名人备案
    {
      path: '/celebrity',
      component: celebrity
    }

  ],
  // 页面回到最顶部
  scrollBehavior(to, from,savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }

})
