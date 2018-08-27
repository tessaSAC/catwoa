<template>
<v-flex xs12 sm4 offset-sm4 class="SinglePig">
  <v-card color="accent lighten-1">

    <v-card-title primary-title>

      <div class="headline info--text">
        {{ name }}
      </div>

      <v-text-field
        v-if="edit"
        v-model="currentDesc"
        label="description"
        @keyup.enter="changeDesc"
      />

      <p v-else @click="edit = true">
        {{ desc }}
      </p>

    </v-card-title>

    <v-card-actions>
      <PigButts
        @adopt="adopt"
        @edit="_ => edit = true"
      />
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

  props: {
    desc: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
  },

  data: _ => ({
    edit: false,
    currentDesc: '',
  }),

  created() {
    this.currentDesc = this.desc
  },

  methods: {
    adopt() {
      this.$emit('pigHomed', this.name)
    },

    changeDesc() {
      this.edit = false
      this.$emit('descChanged', { name: this.name, desc: this.currentDesc })
    },
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
