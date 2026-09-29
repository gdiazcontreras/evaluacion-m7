import { mount, flushPromises } from '@vue/test-utils'
import { createStore } from 'vuex'
import { createVuetify } from 'vuetify'
import { VSelect, VRow, VCol } from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import axios from 'axios'
import ProductList from '@/components/ProductList.vue'
import ProductCard from '@/components/ProductCard.vue'
import products from '@/store/modules/products'
import filters from '@/store/modules/filters'
import favorites from '@/store/modules/favorites'

jest.mock('axios', () => ({ get: jest.fn() }))

it('muestra el error de API y finaliza la carga sin tarjetas', async () => {
  axios.get.mockRejectedValueOnce(new Error('Fallo de red simulado'))
  const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
  const store = createStore({ modules: { products, filters, favorites } })
  const vuetify = createVuetify({
    components: { VSelect, VRow, VCol },
    icons: { defaultSet: 'mdi', aliases, sets: { mdi } }
  })
  let wrapper
  try {
    wrapper = mount(ProductList, { global: { plugins: [store, vuetify] } })
    await flushPromises()
    expect(axios.get).toHaveBeenCalledWith('https://dummyjson.com/products')
    expect(wrapper.get('[role="alert"]').text()).toBe(
      'No se pudieron cargar los productos. Inténtalo nuevamente más tarde.'
    )
    expect(wrapper.findComponent(ProductCard).exists()).toBe(false)
    expect(wrapper.find('[role="status"]').exists()).toBe(false)
    expect(wrapper.get('#category-select').element.disabled).toBe(true)
  } finally {
    if (wrapper) wrapper.unmount()
    consoleError.mockRestore()
    axios.get.mockReset()
  }
})
