<template>
  <div class="flex flex-row justify-around h-50 w-500">
    <button 
      class="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-4 rounded"
      v-for="(value,index) in answers" 
      :key="index"
    >
      {{ value }}
    </button>
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