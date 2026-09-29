<template>
  <v-card tag="article" class="d-flex flex-column h-100" border elevation="1">
    <v-img :src="product.thumbnail" :alt="product.title" height="200" class="flex-grow-0" />
    <v-card-text class="flex-grow-1">
      <h3 class="text-h6 mb-3">{{ product.title }}</h3>
      <p class="mb-4">{{ product.description }}</p>
      <p class="text-primary font-weight-bold">Precio: ${{ product.price }}</p>
    </v-card-text>
    <v-card-actions class="pa-4 pt-0">
      <v-btn
        type="button"
        color="primary"
        :variant="isFavorite ? 'flat' : 'outlined'"
        class="favorite-button"
        block
        @click="toggleFavorite"
      >
        <v-icon :icon="favoriteIcon" aria-hidden="true" class="mr-2" />
        {{ isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mdiHeart, mdiHeartOutline } from '@mdi/js'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    favoriteIcon() {
      return this.isFavorite ? mdiHeart : mdiHeartOutline
    },
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
h3 {
  overflow-wrap: anywhere;
}

.favorite-button {
  text-transform: none;
}
</style>
