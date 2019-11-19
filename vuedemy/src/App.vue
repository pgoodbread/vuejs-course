<template>
    <div class="container">
        <Header />
        <hr>
        <div class="row">
        <ServerList />
        <Dashboard />
        </div>
        <hr>
        <Footer />
        </div>

</template>

<script>
import Header from './Header'
import Footer from './Footer'
import ServerList from './ServerGroup'
import Dashboard from './Dashboard'
export default {
    components: {
        Header,
        Footer,
        ServerList,
        Dashboard
    }
}
</script>

<style>

</style>
