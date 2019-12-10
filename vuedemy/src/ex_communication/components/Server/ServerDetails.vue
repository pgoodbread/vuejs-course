<template>
  <section>
    <div class="col-xs-12 col-sm-6" v-if="server">
      <h2>Server Details</h2>
      <p>Server: {{server.id}}</p>
      <p>Status: <span :class="server.status.toLowerCase()">{{server.status}}</span></p>
      <p>Reset Status: </p>
      <button @click="changeStatus(server, 'Normal')" class="btn btn-normal">Normal</button>
      <button @click="changeStatus(server, 'Critical')" class="btn btn-critical">Critical</button>
      <button @click="changeStatus(server, 'Unknown')" class="btn btn-unknown">Unknown</button>
    </div>
    <div v-else>
      <p> Click any Server to show Details.</p>
    </div>
  </section>

</template>

<script>

export default {
  props: {
    server: {
      type: Object,
      required: true
    }
  }, 
  methods: {
    changeStatus(server, status) {
      server.status = status
      this.$emit('changeStatus', server)
    }
  }
}
</script>

<style>
p {
  font-size: 20px;
  
}

.normal {
  color: green;
}

.critical {
  color: red;
}

.unknown {
  color: grey;
}

.btn {
  
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 10px;
}

.btn-normal {
  background-color: #4CAF50; 
}

.btn-critical {
  background-color: #f44336; 
}

.btn-unknown {
  background-color: #e7e7e7;
  color: black;
}



</style>
