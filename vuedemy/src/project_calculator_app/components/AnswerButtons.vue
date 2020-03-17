<template>
<div class="container max-w-lg mx-auto py-5">
  <div class="flex flex-row justify-around">
    <button 
      class="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-4 rounded"
      v-for="(value,index) in answers" 
      :key="index"
    >
      {{ value }}
    </button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    answers: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>

</style>