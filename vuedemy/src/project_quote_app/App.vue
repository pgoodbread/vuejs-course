<template>
    <div class="container">
        <ProgressBar :quotes="quotes" />
        <QuoteArea @quotes="quoteCount"/>
        <InfoBox />
    </div>
</template>

<script>
import ProgressBar from './components/Header/ProgressBar.vue'
import InfoBox from './components/Footer/InfoBox.vue'
import QuoteArea from './components/Quotes/QuoteArea.vue'

export default {
  components: {
      ProgressBar,
      InfoBox,
      QuoteArea,
  },
  data() {
    return {
      quotes:0,
    }
  },
  methods: {
    quoteCount(quotes) {
      this.quotes = quotes
    }
  }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}
</style>
