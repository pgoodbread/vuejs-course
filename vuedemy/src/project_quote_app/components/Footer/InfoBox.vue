<template>
  <div class="info-box">
    <p class="quote-text">Info: Click on a Quote to delete it</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.info-box{
  background-color: rgba(255,140,105,0.5);
  border-radius: 5px;
  width: 1000px;
  height: 100px;
  margin: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quote-text {
  color: #ff511d;
  font-size: 20px;
}
</style>