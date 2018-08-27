<template>
<v-app>

  <v-toolbar app color="primary darken-2" dark>
    <v-toolbar-title>catwoa</v-toolbar-title>
    <v-spacer />
    <v-btn outline color="warning" @click="addPig">
      add new pig <v-icon right>library_add</v-icon>
    </v-btn>
  </v-toolbar>

  <v-content>
    <v-container
      fluid
      align-content-space-around
    >
      <SinglePig
        v-for="({ name, desc }) in currentPigs"
        :key="name"
        :desc="desc"
        :name="name"
        @pigHomed="adopt"
        @descChanged="changeDesc"
      />
    </v-container>
  </v-content>

  <v-footer app color="secondary" height="50">
    <div class="counter">
      <p class="count secondary--text">{{ numAdopted }}</p>
      <v-icon class="icon" color="white">home</v-icon>
    </div>
  </v-footer>

</v-app>
</template>

<script>
import SinglePig from './components/SinglePig'

export default {
  name: 'app',

  components: {
    SinglePig,
  },

  data: _ => ({
    currentPigs: [ { name: 'beepo', desc: 'a very good boy' } ],

    numAdopted: 0,

    pigNames: ['Fufbey', 'Spackles', 'After Pie', 'Dab', 'Pugger P', 'Snifket', 'Fuzzable', 'Fabsy', 'Dilrus', 'Gooper', 'Rockass', 'Bless', 'Hanger Dan', 'Nuzzy', 'Spockers', 'Mumkle', 'Splanky', 'Fubby', 'Dandan', 'Fleury White', 'Stargoon', 'Princess Pow', 'Popchop', 'Buzzberry', 'Me', 'Madly Mean', 'Pot', 'Mucky', 'Fusty', 'Fleshy', 'Trickles', 'Butty Brlomy', 'Moonyhen', 'Boooy',  'Bho8otteeddeeceul', ],

    selectedNames: [],
  }),

  computed: {
    availableNames() {
      return this.shuffle(this.except(this.pigNames, this.selectedNames))
    },
  },

  methods: {
    addPig() {
      if (!this.pigNames.length) return alert('outta names! <(○｀（●●）´○)>')

      const name = this.pigNames.pop()
      this.currentPigs.push({ name, desc: '' })
      this.selectedNames.push(name)
    },

    adopt(name) {
      this.currentPigs.splice(this.findPig(name), 1)
      this.selectedNames.splice(this.selectedNames.indexOf(name), 1)
      ++this.numAdopted
    },

    changeDesc({ name, desc }) {
      this.currentPigs[this.findPig(name)].desc = desc
    },

    except(original, unwanted) {
      const set = new Set(unwanted)
      return original.filter(v => !set.has(v))
    },

    findPig(name) {
      return this.currentPigs.findIndex(pig => pig.name === name)
    },

    shuffle(arr) {
      let currentIndex = arr.length,
        tempVal,
        randomIdx

      while (currentIndex) {
        // Pick a remaining element...
        randomIdx = Math.floor(Math.random() * currentIndex)
        --currentIndex
        // And swap it with the current element.
        tempVal = arr[currentIndex]
        arr[currentIndex] = arr[randomIdx]
        arr[randomIdx] = tempVal
      }
      return arr
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  overflow: hidden;
}

.v-footer {
  justify-content: flex-end;
  padding: 0 16px;
}

.counter {
  height: 100%;
  display: flex;

  .count {
    position: relative;
    float: left;
    top: 0.9rem;
    right: -50%;
    font-weight: 900;
    font-size: 0.8rem;
  }

  .icon {
    color: white;
    font-size: 3rem;
  }
}
</style>
