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

}
</script>

<style>

</style>