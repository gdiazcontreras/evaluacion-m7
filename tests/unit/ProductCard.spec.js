import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createVuetify } from 'vuetify'
import { VCard, VCardText, VCardActions, VImg, VBtn, VIcon } from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import ProductCard from '@/components/ProductCard.vue'
import favorites from '@/store/modules/favorites'

it('renderiza los datos del producto y sus acciones', async () => {
  const product = {
    id: 1,
    title: 'Mochila de prueba',
    description: 'Mochila ligera para uso diario.',
    price: 25,
    category: 'accessories',
    thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"/%3E'
  }
  const store = createStore({ modules: { favorites } })
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/', component: { template: '<div />' } }]
  })
  await router.push('/')
  await router.isReady()
  const vuetify = createVuetify({
    components: { VCard, VCardText, VCardActions, VImg, VBtn, VIcon },
    icons: { defaultSet: 'mdi', aliases, sets: { mdi } }
  })
  const wrapper = mount(ProductCard, {
    props: { product },
    global: { plugins: [store, router, vuetify] }
  })
  try {
    expect(wrapper.get('h3').text()).toBe(product.title)
    expect(wrapper.text()).toContain(product.description)
    expect(wrapper.text()).toContain('Precio: $25')
    expect(wrapper.getComponent(VImg).props('src')).toBe(product.thumbnail)
    expect(wrapper.getComponent(VImg).props('alt')).toBe(product.title)
    const buttons = wrapper.findAll('button').map(button => button.text())
    expect(buttons).toContain('Agregar a favoritos')
    expect(buttons).toContain('Ver detalle')
  } finally {
    wrapper.unmount()
  }
})
