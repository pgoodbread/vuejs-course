<template>
  <div class="container">
      <AnswerButtons :answers="['test', 'test2']" />
      <AnswerButtons :answers="['test3']" />
  </div> 
</template>

<script>
import AnswerButtons from './AnswerButtons'
export default {
  components: {
    AnswerButtons,
  }
}
</script>

<style>

</style>