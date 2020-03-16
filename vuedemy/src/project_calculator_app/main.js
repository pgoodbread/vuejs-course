import Vue from 'vue'
import App from './App.vue'
import '../assets/tailwind.css'

Vue.filter('length', (text) => {
  return text + ' (' + text.length + ')'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
