<template>
  <div class="quote" @click="$emit('deleteQuote', id)">
    <p class="quote-text">{{ quote }}</p>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: String, 
      required: true,
    }, 
    id: {
      type: Number,
      default: '',
    }
  }
}
</script>

<style scoped>
.quote{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  border: 1px solid salmon;
  margin: 10px;
}
.quote:hover{
  border: 1px solid red;
}

.quote-text{
  color: black;
  font-size: 30px;
}

</style>