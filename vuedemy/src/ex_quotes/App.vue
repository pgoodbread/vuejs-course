<template>
 <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'Quote'">Quote</button>
        <button @click="selectedComponent = 'Author'">Author</button>
        <button @click="selectedComponent = 'New'">New Quote</button>
        <p>{{ selectedComponent }}</p>
        <hr>
        <keep-alive>
          <component :is="selectedComponent">
            <template v-slot:title>
              <h2>Quote</h2>
            </template>
            <template v-slot:content>
              <p>A wonderful quote</p>
            </template>
            <template v-slot>
              <h2>default content</h2>
            </template>
          </component>
        </keep-alive>
        <!-- <Quote>
          <template v-slot:title>
            <h2>Quote</h2>
          </template>
          <template v-slot:content>
            <p>A wonderful quote</p>
          </template>
        </Quote> -->
      </div>
    </div>
  </div>

</template>

<script>
import Quote from './Quote/Quote'
import Author from './Quote/Author'
import New from './Quote/New'

export default {
    components: {
        Quote,
        Author,
        New
    }, 
    data() {
      return {
        quoteTitle: 'Bla',
        selectedComponent: 'Quote'
      }
    }
}
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
