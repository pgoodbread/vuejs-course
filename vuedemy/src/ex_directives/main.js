import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    
    console.log(binding)
    let delay = 0
    console.log(binding.modifiers.delayed)
    if (binding.modifiers.delayed) {
      delay = 3000
    }
    console.log(delay)
    setTimeout(() => {
      if(binding.arg == 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay); 
    el.style.backgroundColor = binding.value
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
