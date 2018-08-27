<template>
<v-app>
  <v-toolbar app color="primary"></v-toolbar>
  <v-content>
    <v-container fluid>
    </v-container>
  </v-content>
  <v-footer app color="secondary"></v-footer>
</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
