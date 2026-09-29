<template>
  <section aria-labelledby="detail-title">
    <v-card tag="article" border elevation="1">
      <v-card-text>
        <h2 id="detail-title" class="text-h5 mb-4">{{ nombre ?? 'Nombre no disponible' }}</h2>
        <p class="mb-2">Categoría: {{ categoria ?? 'No disponible' }}</p>
        <p class="mb-2">Precio: {{ precio != null ? `$${precio}` : 'No disponible' }}</p>
        <p>ID del producto: {{ id }}</p>
      </v-card-text>
      <v-card-actions class="pa-4 pt-0">
        <v-btn type="button" color="primary" variant="outlined" @click="volverAlCatalogo">
          Volver al catálogo
        </v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = computed(() => Number(route.params.id))
const nombre = computed(() => route.query.nombre)
const categoria = computed(() => route.query.categoria)
const precio = computed(() => route.query.precio)

function volverAlCatalogo() {
  router.push('/')
}
</script>
