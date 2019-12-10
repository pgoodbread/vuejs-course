<template>
   <li class="list-group-item" @click="clickHandler(id)"> Server #{{ id }} : {{status}} </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    clickHandler: {
      type: Function,
      required: true,
    }
  }, 
  methods: {
  }

}
</script>

<style>

</style>