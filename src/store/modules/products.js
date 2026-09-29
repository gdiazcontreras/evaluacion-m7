import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),
  mutations: {
    SET_PRODUCTS(state, products) {
      state.items = products
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    async fetchProducts({ commit, dispatch }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      commit('SET_PRODUCTS', [])

      try {
        await dispatch('filters/resetCategory', null, { root: true })
        const response = await axios.get('https://dummyjson.com/products')
        commit('SET_PRODUCTS', response.data.products)
      } catch (error) {
        commit('SET_ERROR', 'No se pudieron cargar los productos. Inténtalo nuevamente más tarde.')
        console.error('Error al obtener los productos:', error)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },
  getters: {
    categories(state) {
      return [...new Set(state.items.map(product => product.category))]
    },
    filteredProducts(state, getters, rootState) {
      const category = rootState.filters.selectedCategory

      return category
        ? state.items.filter(product => product.category === category)
        : state.items
    }
  }
}
