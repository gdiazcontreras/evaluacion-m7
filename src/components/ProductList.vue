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

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  computed: {
    ...mapState('products', {
      products: 'items',
      loading: 'loading',
      error: 'error'
    }),
    ...mapGetters('products', ['categories', 'filteredProducts']),
    categoryOptions() {
      return [
        { title: 'Todas las categorías', value: '' },
        ...this.categories.map(category => ({ title: category, value: category }))
      ]
    },
    selectedCategory: {
      get() {
        return this.$store.state.filters.selectedCategory
      },
      set(category) {
        this.$store.dispatch('filters/setCategory', category)
      }
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions('products', ['fetchProducts'])
  }
}
</script>

<style scoped>
h2 {
  margin: 0 0 24px;
}
</style>
