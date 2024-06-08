// state
export const state = () => ({
  // sliders
  sliders: [],
  // page
  page: 1,
})
// mutations
export const mutations = {
  // mutation "SET_SLIDERS_DATA"
  SET_SLIDERS_DATA(state, payload) {
    // set value state "sliders"
    state.sliders = payload
  },
  // mutation "SET_PAGE"
  SET_PAGE(state, payload) {
    // set value state "page"
    state.page = payload
  },
}
// actions
export const actions = {
  // get sliders data
  getSlidersData({ commit, state }, payload) {
    // search
    const search = payload || ''
    // set promise
    return new Promise((resolve, reject) => {
      // fetching Rest API "/api/admin/sliders" with method "GET"
      this.$axios
        .get(`/api/admin/sliders?q=${search}&page=${state.page}`)
        // success
        .then((response) => {
          // commit ti mutation "SET_SLIDERS_DATA"
          commit('SET_SLIDERS_DATA', response.data.data)
          // resolve promise
          resolve()
        })
    })
  },
}
