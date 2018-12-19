import api from '../config/api'
import state from './state'

export default {
    
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