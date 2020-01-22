<template>
  <div class="container">
    <AddQuote @addQuote="addQuote" />
    <div class="quotes">
      <Quote v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote(index)">{{ quote }}</Quote>
    </div>
  </div>
</template>

<script>
import Quote from './Quote'
import AddQuote from './AddQuote'

export default {
  components: {
    Quote,
    AddQuote
  },
  data() {
    return {
      quotes: []
    }
  },
  methods: {
    addQuote(quote) {
      if (this.quotes.length < 10){
        this.quotes.push(quote)
        this.$emit('quotes',this.quotes.length)
      }
    },
    deleteQuote(quote){
      this.quotes.splice(quote, 1)
      this.$emit('quotes',this.quotes.length)
    }
  }

}
</script>

<style scoped>
.quotes {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 980px;
}
</style>