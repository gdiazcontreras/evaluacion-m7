<template>
  <AppHeader />
  <main>
    <ProductList />
  </main>
  <AppFooter />
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
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f5f7fa;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 20px;
  flex: 1;
}
</style>
