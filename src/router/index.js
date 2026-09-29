import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import DetalleProducto from '../views/DetalleProducto.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', component: ProductList },
    { path: '/productos/:id', component: DetalleProducto }
  ]
})
