<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <ServerInstance v-for="index in 5" :key="index"  />
        </ul>
    </div>
  </div>
</template>

<script>
import ServerInstance from './ServerInstance'
export default {
  component: {
    ServerInstance
  }
}
</script>

<style>

</style>