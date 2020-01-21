<template>
  <div class="container">
    <AddQuote @addQuote="addQuote" />
    <div class="quotes">
      <Quote v-for="(quote, index) in quotes" :key="index" :quote="quote" :id="index" @deleteQuote="deleteQuote" />
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
    addQuote(event) {
      if (this.quotes.length < 10){
        this.quotes.push(event)
        this.$emit('quotes',this.quotes.length)
      }
    },
    deleteQuote(event){
      this.quotes.splice(event, 1)
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