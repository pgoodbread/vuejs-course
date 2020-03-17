<template>
<div class="container max-w-lg mx-auto px-4">
    <h1 class="font-bold text-center text-3xl mx-auto py-3 leading-loose">The Super Quiz</h1>
    <hr/>
    <div class="container">
        <component :is="side" :answer="answer"></component>
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
        data() {
            return {
                side: 'Question'
            }
        },
        methods: {
            answer(el) {
                console.log(el)
                alert(el.text)
            }
        }
        }
</script>

<style>

</style>
