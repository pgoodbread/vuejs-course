<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers @serverDetails="passDetails" :servers="servers"></servers>
            <app-server-details :server="server" @changeStatus="changeServerStatus"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        data() {
            return {
                server: null,
                 servers: [
                  {id: 1, status: 'Normal'},
                  {id: 2, status: 'Critical'},
                  {id: 3, status: 'Unknown'},
                  {id: 4, status: 'Normal'},
        ]
            }
        },
        methods: {
            passDetails(data) {
                this.server = data
            }, 
            changeServerStatus(server) {
              this.servers[server.id-1].status = server.status
            }
        }
    }
</script>

<style>

</style>
