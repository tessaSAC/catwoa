<template>
<v-speed-dial
  class="PigButts"
  v-model="fab"
  :top="top"
  :bottom="bottom"
  :right="right"
  :left="left"
  :direction="direction"
  :open-on-hover="hover"
  :transition="transition"
>
  <v-btn
    slot="activator"
    v-model="fab"
    color="secondary"
    dark
    fab
  >
    <v-icon>pets</v-icon>
    <v-icon>close</v-icon>
  </v-btn>
  <v-btn
    fab
    dark
    small
    color="warning"
    @click="$emit('edit')"
  >
    <v-icon>edit</v-icon>
  </v-btn>

  <v-btn
    fab
    dark
    small
    color="success"
    @click="$emit('adopt')"
  >
    <v-icon>home</v-icon>
  </v-btn>
</v-speed-dial>
</template>

<script>
export default {
  data: _ => ({
    direction: 'left',
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: 'slide-y-reverse-transition',
  }),

  computed: {},

  watch: {
    top(val) {
      this.bottom = !val
    },
    right(val) {
      this.left = !val
    },
    bottom(val) {
      this.top = !val
    },
    left(val) {
      this.right = !val
    },
  },
}
</script>

<style lang="scss" scoped>
.v-btn.v-btn--floating {
  margin-left: 0.5rem;
}
</style>
