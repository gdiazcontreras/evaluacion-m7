export default {
  namespaced: true,
  state: () => ({
    selectedCategory: ''
  }),
  mutations: {
    SET_CATEGORY(state, category) {
      state.selectedCategory = category
    }
  },
  actions: {
    setCategory({ commit }, category) {
      commit('SET_CATEGORY', category)
    },
    resetCategory({ commit }) {
      commit('SET_CATEGORY', '')
    }
  }
}
