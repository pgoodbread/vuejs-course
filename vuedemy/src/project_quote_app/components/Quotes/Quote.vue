<template>
  <div class="quote" >
    <p class="quote-text">
      <slot></slot>
      </p>
  </div>
</template>

<script>
export default {
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
  cursor: pointer;
}
.quote:hover{
  border: 1px solid red;
  background-color: rgba(255,0,0,0.3)
}

.quote-text{
  color: black;
  font-size: 30px;
  line-height: 45px;
  margin: 0;
}

</style>