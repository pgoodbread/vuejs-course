<template>
  <div class="container h-250">
    <p class="bg-gray-300 border rounded-t border-gray-500 font-bold text-center px-3 py-2 text-xl ">Question Text</p>
    <div class="container border-r border-b border-l rounded-b border-gray-500 py-5">
      <div class="container max-w-lg mx-auto py-5">
        <div class="flex flex-row flex-wrap justify-around">
          <button 
            class="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-4 rounded"
            @click="answer($el)"
            v-for="(value,index) in answers" 
            :key="index"
          >
            {{ value }}
          </button>
        </div>
</div>
    </div>
  </div> 
</template>

<script>
import AnswerButtons from './AnswerButtons'
export default {
  components: {
    AnswerButtons,
  },
  data() {
    return {
      answers: ['test1', 'test2', 'test3', 'test4']
    }
  },
  props: {
    answer: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>

</style>