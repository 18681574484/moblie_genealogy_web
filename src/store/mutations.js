import api from '../config/api'
import state from './state'

export default {
    
    homeArr() {
        api.get(api.county.base + "genogram/fanIndex/index/getFanIndexSlidePicList?siteId=111")
        .then( res => {
            // 轮播图
            if(res.code == 200) {
                state.lunbo = res.data
                console.log('ok')
            }
            return api.get(api.county.base + "genogram/fanNewsFamilyRecord/selectRecortPage?showId=123")
        })
        .then( res => {
            // 家族动态
            state.dynamic = res.data
            return api.get(api.county.base + "genogram/fanNewsCharity/index/getFanIndexFund?siteId=111")
        })
        .then( res => {
            // 公益基金
            state.fund = res.data
            // console.log(res)     
        })
    },
    bulletin() {
        api.get(api.county.base + "/genogram/fanNewsFamilyRecord/selectRecortPage?showId=10024")
        .then( res => {
            // 县级公告
            state.announcement = res.data
            return api.get(api.county.base + "/genogram/fanIndex/index/getFanIndexInfo?siteId=111")
        })
        .then( res => {
            // 简介
            state.brief = res.data
            // console.log( state.brief)
        })
    },
    expenditure() {
        api.get(api.county.base + "genogram/fanNewsCharity/index/getFanNewsCharityOutPage?showId=10016")
        .then( res => {
            // 慈善公益
            state.wasteBook = res.data
        })
    },
    familyIndustry () {
        api.get(api.county.base + "genogram/fanMenu/getIndexMenuBySiteId?siteId=111")
        .then( res => {
            // 家族资产
            state.property = res.data
        })
    },
    family_celebrity() {
        api.get(api.county.base + "genogram/fanIndex/getFamilyStructureList?siteId=111")
        .then( res => {
            console.log(res)
        })
    }
}