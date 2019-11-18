<template>
  <li>
    Server #{{ key }}
  </li>
</template>

<script>
export default {
  props: {
    key: {
      type: Number,
      default: () => 0
    }
  }, 
  data() {
    return { key: 0 }
  }

}
</script>

<style>

</style>