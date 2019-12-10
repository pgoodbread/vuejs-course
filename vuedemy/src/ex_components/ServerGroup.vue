<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <ServerInstance v-for="index in 5" :key="index" :instanceNumber="index" />
        </ul>
    </div>
</template>

<script>
import ServerInstance from './ServerInstance'

export default {
  components: {
    ServerInstance
  }
}
</script>

<style>

</style>