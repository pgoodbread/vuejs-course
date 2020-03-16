<template>
<div class="container mx-auto px-4">
    <h1 class="text-orange-700">The Super Quiz</h1>
    <div class="container">
            <Question />
            <Answer />
    </div>
</div>

</template>

<script>
import Answer from './components/Answer'
import Question from './components/Question'

    export default {
        components: {
            Answer,
            Question,
        },
        data() {}
        }
</script>

<style>

</style>
