<template>
  <section aria-labelledby="products-title">
    <h2 id="products-title">Productos</h2>
    <div class="category-filter">
      <label for="category-select">Categoría</label>
      <select
        id="category-select"
        v-model="selectedCategory"
        :disabled="loading || !!error || products.length === 0"
      >
        <option value="">Todas las categorías</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
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
    <div v-else class="product-list">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
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

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 20px;
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

select {
  max-width: 100%;
  padding: 8px 12px;
  border: 1px solid #dce3ea;
  border-radius: 4px;
  background: #fff;
  color: inherit;
  font: inherit;
}
</style>
