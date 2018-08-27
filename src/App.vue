<template>
<v-app>
  <v-toolbar app color="primary"></v-toolbar>
  <v-content>
    <v-container fluid>
      <VPig />
    </v-container>
  </v-content>
  <v-footer app color="secondary"></v-footer>
</v-app>
</template>

<script>
import VPig from './components/VPig.vue'

export default {
  name: 'app',
  components: {
    VPig,
  },
}
</script>

<style lang="scss">
#app {
  overflow: hidden;
}
</style>
