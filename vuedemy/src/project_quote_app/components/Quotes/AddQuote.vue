<template>
<div class="add-quote">
  <h4>Quote</h4>
  <textarea v-model="quoteText" rows="5" cols="122"></textarea>
  <div class="btn-container">
    <button class="btn btn-primary button" >Add Quote</button>
  </div>
</div>
  
</template>

<script>
export default {
  props: {
    quoteText: {
      type: String, 
      default: '',
    }
  },
}
</script>

<style scoped>
.add-quote {
  margin-top: 50px;
  display: inline-block;
}

textarea {
  margin: 5px auto 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
 }

h4 {
  font-size: 20px;
  font-weight: bold;
}

.btn-container {
  display: flex;
  justify-content: center;
}

.button {
  background-color: salmon;
  border: 1px solid #ff8c69;
}

</style>