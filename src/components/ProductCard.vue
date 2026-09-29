<template>
  <v-card tag="article" class="d-flex flex-column h-100" border elevation="1">
    <v-img :src="product.thumbnail" :alt="product.title" height="200" class="flex-grow-0" />
    <v-card-text class="flex-grow-1">
      <h3 class="text-h6 mb-3">{{ product.title }}</h3>
      <p class="mb-4">{{ product.description }}</p>
      <p class="text-primary font-weight-bold">Precio: ${{ product.price }}</p>
    </v-card-text>
    <v-card-actions class="pa-4 pt-0 flex-column align-stretch ga-2">
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
      <v-btn type="button" color="primary" variant="text" block @click="verDetalle">
        Ver detalle
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { mdiHeart, mdiHeartOutline } from '@mdi/js'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
const store = useStore()
const router = useRouter()
const isFavorite = computed(() => store.getters['favorites/isFavorite'](props.product.id))
const favoriteIcon = computed(() => isFavorite.value ? mdiHeart : mdiHeartOutline)

function toggleFavorite() {
  store.dispatch('favorites/toggleFavorite', props.product.id)
}

function verDetalle() {
  router.push({
    path: `/productos/${props.product.id}`,
    query: {
      nombre: props.product.title,
      categoria: props.product.category,
      precio: props.product.price
    }
  })
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
