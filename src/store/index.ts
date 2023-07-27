import { createStore } from 'vuex'

export default createStore({
  state: {
    isCollapse: false
  },
  getters: {
  },
  mutations: {
    changeIsCollapse (state,payload) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
  },
  modules: {
  }
})
