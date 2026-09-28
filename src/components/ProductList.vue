<template>
  <section aria-labelledby="products-title">
    <h2 id="products-title">Productos</h2>
    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Mochila urbana',
          description: 'Mochila ligera con espacio para tus artículos de todos los días.',
          price: 24990
        },
        {
          id: 2,
          title: 'Audífonos inalámbricos',
          description: 'Audífonos cómodos para escuchar música mientras estudias.',
          price: 34990
        },
        {
          id: 3,
          title: 'Botella reutilizable',
          description: 'Botella de acero inoxidable para llevar tus bebidas.',
          price: 12990
        }
      ]
    }
  },
  mounted() {
    console.info(`ProductList montado con ${this.products.length} productos`)
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
</style>
