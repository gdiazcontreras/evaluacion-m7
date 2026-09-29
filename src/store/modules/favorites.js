export default {
  namespaced: true,
  state: () => ({
    ids: []
  }),
  mutations: {
    TOGGLE_FAVORITE(state, productId) {
      const index = state.ids.indexOf(productId)

      if (index === -1) {
        state.ids.push(productId)
      } else {
        state.ids.splice(index, 1)
      }
    }
  },
  actions: {
    toggleFavorite({ commit }, productId) {
      commit('TOGGLE_FAVORITE', productId)
    }
  },
  getters: {
    isFavorite: state => productId => state.ids.includes(productId),
    favoriteCount: state => state.ids.length
  }
}
