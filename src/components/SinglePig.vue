<template>
<v-flex xs12 sm4 offset-sm4 class="SinglePig">
  <v-card color="accent lighten-1">

    <v-card-title primary-title>
      <div class="headline info--text">
        Pig name
      </div>
      <v-text-field
        label="description"
      />
    </v-card-title>

    <v-card-actions>
      <PigButts />
    </v-card-actions>

  </v-card>
</v-flex>
</template>

<script>
import PigButts from './PigButts'

export default {
  components: {
    PigButts,
  },
}
</script>


<style lang="scss" scoped>
.SinglePig {
  + .SinglePig {
    margin-top: 2rem;
  }
}

.v-card__ {
  &title {
    flex-direction: column;
    align-items: flex-start;
  }

  &actions {
    justify-content: flex-end;
  }
}

.headline {
  margin-bottom: 0.5rem;
}

.v-text-field {
  width: 100%;
}
</style>
