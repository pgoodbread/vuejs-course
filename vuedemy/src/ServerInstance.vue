<template>
  <li>
    Server #{{ instanceNumber }}
  </li>
</template>

<script>
export default {
  props: {
    instanceNumber: {
      type: Number,
      default: () => 0
    }
  }, 
  data() {
    return { key }
  }

}
</script>

<style>

</style>