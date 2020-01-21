<template>
    <div class="container">
        <ProgressBar />
        <QuoteArea />
        <InfoBox />
    </div>
</template>

<script>
import ProgressBar from './components/Header/ProgressBar.vue'
import InfoBox from './components/Footer/InfoBox.vue'
import QuoteArea from './components/Quotes/QuoteArea.vue'

export default {
    components: {
        ProgressBar,
        InfoBox,
        QuoteArea,
    }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}
</style>
