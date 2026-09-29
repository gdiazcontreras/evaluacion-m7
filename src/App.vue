<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container class="catalog-container py-8">
        <RouterView />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
.v-application {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.catalog-container {
  max-width: 1100px;
}

.v-btn:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
}
</style>
