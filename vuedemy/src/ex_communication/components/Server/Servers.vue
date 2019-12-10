<template>
   <div class="col-xs-12 col-sm-6">
     <ul class="list-group">
       <ServerInstance v-for="server in servers" :key="server.id" :id="server.id" :status="server.status" :clickHandler="showDetails" />
     </ul>
   </div>
</template>

<script>
import ServerInstance from './ServerInstance'

export default {
  components: {
    ServerInstance
  },
  props: {
    servers: {
      type: Array,
      required: true,
    }
  },
  methods: {
    showDetails(data) {
      this.$emit('serverDetails', this.servers[data-1])
    }
  }

}
</script>

<style>

</style>
