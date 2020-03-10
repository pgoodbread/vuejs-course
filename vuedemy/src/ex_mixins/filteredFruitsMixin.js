export const fruitMixin = {
  data() {
    return {
      filteredText: '',
      fruits: ['Apple', 'Banana', 'Kiwi', 'Mango']
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => element.match(this.filteredText))
    }
  }
}