export const reverseMixin = {
  computed: {
    reverse() {
      return this.text.split('').reverse().join('')
    }
  } 
}

export const lengthMixin = {
  computed: {
    length() {
      return this.text + ' (' + this.text.length + ')'
    }
  }
}