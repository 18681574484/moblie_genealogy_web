import api from '@/config/api.js'

function resetUser(store, obj) {
    if (localStorage.user) {
        store.commit('updateUser', JSON.parse(localStorage.user))
    }
}

function getHomeApi(store, obj) {
    api.get(api.county.site_home, {
        siteId: store.state.id
    }).then(res => {
        store.commit('setApiList', res.data.index_show)
    })
}
export default {
    resetUser,
    getHomeApi,
}