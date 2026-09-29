import { createRouter, createWebHashHistory } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import DetalleProducto from '../views/DetalleProducto.vue'

export default createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [
    { path: '/', component: ProductList },
    { path: '/productos/:id', component: DetalleProducto }
  ]
})
