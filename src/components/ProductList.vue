<template>
  <section aria-labelledby="products-title">
    <h2 id="products-title">Productos</h2>
    <v-select
      id="category-select"
      v-model="selectedCategory"
      label="Categoría"
      :items="categoryOptions"
      item-title="title"
      item-value="value"
      :disabled="loading || !!error || products.length === 0"
      variant="outlined"
      hide-details
      class="mb-6"
    />
    <p v-if="loading" role="status">
      Cargando productos...
    </p>
    <p v-else-if="error" role="alert">
      {{ error }}
    </p>
    <p v-else-if="products.length === 0" role="status">
      No hay productos disponibles
    </p>
    <p v-else-if="filteredProducts.length === 0" role="status">
      No hay productos en esta categoría
    </p>
    <v-row v-else>
      <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ProductCard from './ProductCard.vue'

const store = useStore()
const products = computed(() => store.state.products.items)
const loading = computed(() => store.state.products.loading)
const error = computed(() => store.state.products.error)
const categories = computed(() => store.getters['products/categories'])
const filteredProducts = computed(() => store.getters['products/filteredProducts'])
const categoryOptions = computed(() => [
  { title: 'Todas las categorías', value: '' },
  ...categories.value.map(category => ({ title: category, value: category }))
])
const selectedCategory = computed({
  get: () => store.state.filters.selectedCategory,
  set: category => store.dispatch('filters/setCategory', category)
})

onMounted(() => {
  store.dispatch('products/fetchProducts')
})
</script>

<style scoped>
h2 {
  margin: 0 0 24px;
}
</style>
