<template>
 <div>
   <h3>New Quote</h3>
   <h4>{{ counter }}</h4>
   <button @click="counter++">Increase</button>
 </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  }, 
  deactivated() {
    console.log('deactivated')
  },
  activated() {
    console.log('activated')
  }
}
</script>

<style scoped>
</style>