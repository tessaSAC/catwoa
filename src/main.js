import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#E1F5FE',
    secondary: '#F8BBD0',
    accent: '#81C784',
    error: '#FFAB91',
    warning: '#FFE082',
    info: '#EEFF41',
    success: '#00B0FF',
  },
  options: {
    themeVariations: ['primary', 'secondary'],
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
