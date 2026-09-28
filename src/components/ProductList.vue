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
import axios from 'axios'
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
      loading: false,
      error: null,
      selectedCategory: ''
    }
  },
  computed: {
    categories() {
      return [...new Set(this.products.map(product => product.category))]
    },
    filteredProducts() {
      if (!this.selectedCategory) {
        return this.products
      }

      return this.products.filter(
        product => product.category === this.selectedCategory
      )
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      this.products = []
      this.selectedCategory = ''

      try {
        const response = await axios.get('https://dummyjson.com/products')
        this.products = response.data.products
      } catch (error) {
        this.error = 'No se pudieron cargar los productos. Inténtalo nuevamente más tarde.'
        console.error('Error al obtener los productos:', error)
      } finally {
        this.loading = false
      }
    }
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
