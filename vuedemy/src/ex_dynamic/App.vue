<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'Blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'Green'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'Red'">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">
                    <h2>Hello World!</h2>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            Blue,
            Green,
            Red
        },
        data() {
            return {
                selectedComponent: '',
            }
        }
    }
</script>

<style>
</style>
