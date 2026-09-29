import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import {
  VApp, VMain, VContainer, VAppBar, VAppBarTitle, VFooter,
  VSelect, VRow, VCol, VCard, VImg, VCardText, VCardActions, VBtn, VIcon
} from 'vuetify/components'
import { Ripple } from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { es } from 'vuetify/locale'

export default createVuetify({
  components: {
    VApp, VMain, VContainer, VAppBar, VAppBarTitle, VFooter,
    VSelect, VRow, VCol, VCard, VImg, VCardText, VCardActions, VBtn, VIcon
  },
  directives: { Ripple },
  icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
  locale: { locale: 'es', messages: { es } },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#F5F7FA', surface: '#FFFFFF', primary: '#216747',
          secondary: '#2C3E50', 'on-background': '#2C3E50',
          'on-surface': '#2C3E50', 'on-primary': '#FFFFFF', 'on-secondary': '#FFFFFF'
        }
      },
      dark: {
        dark: true,
        colors: {
          background: '#121820', surface: '#202A35', primary: '#8AD5AE',
          secondary: '#263747', 'on-background': '#E8EEF4',
          'on-surface': '#E8EEF4', 'on-primary': '#123524', 'on-secondary': '#E8EEF4'
        }
      }
    }
  }
})
