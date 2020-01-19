<template>
 <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <Quote>
          <template v-slot:title>
            <h2>Quote</h2>
          </template>
          <template v-slot:content>
            <p>A wonderful quote</p>
          </template>

        </Quote>
      </div>
    </div>
  </div>

</template>

<script>
import Quote from './Quote/Quote'

export default {
    components: {
        Quote
    }
}
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
