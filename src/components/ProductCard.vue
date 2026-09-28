<template>
  <article class="product-card">
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <p class="price">Precio: ${{ product.price }} CLP</p>
  </article>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product-card {
  padding: 24px;
  border: 1px solid #dce3ea;
  border-radius: 8px;
  background: #fff;
}

h3 {
  margin: 0 0 12px;
}

p {
  line-height: 1.5;
}

.price {
  margin-bottom: 0;
  font-weight: bold;
  color: #216747;
}
</style>
