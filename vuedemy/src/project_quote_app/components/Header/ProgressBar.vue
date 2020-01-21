<template>
  <div class="header">
    <h2>Quotes Added</h2>
    <div class="progress-bar-area">
      <div class="progress-bar" :style="{width: quotes*100+'px'}">
        <span class="num-quotes">{{ quotes }} / 10</span>
      </div>
      </div>
      <button @click="quotes++">Increase Quotes</button>
  </div>
</template>

<script>
export default {
  props: {
    quotes: {
      type: Number, 
      default: 0,
    }
  },
}
</script>

<style scoped>

h2 {
  color: salmon;
}

.progress-bar-area {
  width: 1000px;
  height: 32px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #ff511d;
}

.progress-bar {
  height: 30px;
  border-radius: 7px;
  background-color: salmon;
  box-shadow: 0 0;
}

.colored-bar {
  width:100%;
  background-color: salmon;
}

.num-quotes {
  line-height: 30px;
  font-size: 20px;
  
}
</style>