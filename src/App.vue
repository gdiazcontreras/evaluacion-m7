<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container class="catalog-container py-8">
        <ProductList />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    ProductList
  }
}
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
