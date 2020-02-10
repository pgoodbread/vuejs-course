<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p v-highlight:background.delayed.lifted.bobbed="'green'" >Test</p>
                <p id="test123" v-myOn:click="clicker" > My v-on directive</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                selectedComponent: '',
            }
        }, 
        directives: {
            myOn: {
                bind(el, binding, vnode) {
                    el.addEventListener(binding.arg, binding.value)
                }
            }
        },
        methods: {
            clicker() {
                console.log('success')
            }
        }, 
    }
</script>

<style>
#test123 {
    cursor: pointer;
    user-select: none;
}
</style>
