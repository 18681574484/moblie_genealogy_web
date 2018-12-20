const mutations = {
    updateUser(state, obj) {
        localStorage.user = JSON.stringify(obj)
        state.user = obj
    },
    setApiList(state, obj) {
        state.apiList = obj
    },
    updateCountyId(state, obj) {
        localStorage.county_id = obj
        state.apiList = null
        state.id = obj
    },
}

export default mutations