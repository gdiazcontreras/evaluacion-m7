<template>
  <v-app-bar color="secondary" height="96">
    <v-app-bar-title>
      <h1>Vue Product Showcase</h1>
    </v-app-bar-title>
    <v-btn type="button" class="theme-button mr-3" @click="toggleTheme">
      <v-icon :icon="themeIcon" aria-hidden="true" class="mr-2" />
      <span>{{ isDark ? 'Activar tema claro' : 'Activar tema oscuro' }}</span>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { mdiWeatherSunny, mdiWeatherNight } from '@mdi/js'

const theme = useTheme()
const isDark = computed(() => theme.current.value.dark)
const themeIcon = computed(() => isDark.value ? mdiWeatherSunny : mdiWeatherNight)

function toggleTheme() {
  theme.change(isDark.value ? 'light' : 'dark')
}
</script>

<style scoped>
h1 {
  font-size: clamp(1rem, 3vw, 1.75rem);
  line-height: 1.3;
  white-space: normal;
}

.theme-button {
  text-transform: none;
}

@media (max-width: 599px) {
  .theme-button {
    max-width: 150px;
    height: auto;
    min-height: 48px;
  }

  .theme-button span {
    white-space: normal;
  }
}
</style>
