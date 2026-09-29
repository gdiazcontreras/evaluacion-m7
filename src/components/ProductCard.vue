<template>
  <article class="product-card">
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <p class="price">Precio: ${{ product.price }}</p>
    <button
      type="button"
      class="favorite-button"
      :class="{ 'is-favorite': isFavorite }"
      @click="toggleFavorite"
    >
      <span aria-hidden="true">{{ isFavorite ? '♥' : '♡' }}</span>
      {{ isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos' }}
    </button>
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
  },
  computed: {
    isFavorite() {
      return this.$store.getters['favorites/isFavorite'](this.product.id)
    }
  },
  methods: {
    toggleFavorite() {
      this.$store.dispatch('favorites/toggleFavorite', this.product.id)
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

.favorite-button {
  margin-top: 16px;
  padding: 8px 12px;
  border: 1px solid #216747;
  border-radius: 4px;
  background: #fff;
  color: #216747;
  font: inherit;
  cursor: pointer;
}

.favorite-button.is-favorite {
  background: #216747;
  color: #fff;
}

.favorite-button:focus-visible {
  outline: 3px solid #2c3e50;
  outline-offset: 3px;
}
</style>
