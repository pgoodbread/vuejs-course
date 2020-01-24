<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <div class="form-group">
        <label for="name">First Name</label>
        <input
          type="text"
          id="name"
          class="form-control" 
          :value="first"
          @input="update(true, $event)">
      </div>
      <div class="form-group">
        <label for="name">Last Name</label>
        <input
          type="text"
          id="name"
          class="form-control" 
          :value="last"
          @input="update(false,$event)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    first() {
      return this.value.split(' ')[0]
    },
    last() {
      return this.value.split(' ')[1]
    }
  },
  methods: {
    update(isFirst, event) {
      let name = ''
      if (isFirst) {
        name = event.target.value + ' ' + this.last
      } else {
        name = this.first + ' ' + event.target.value
      }
      this.value = name
      this.$emit('input', name)
    }
  }
}
</script>

<style>

</style>