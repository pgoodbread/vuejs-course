<template>
    <div class="container">
        <Header />
        <hr>
        <ServerList />
        <Dashboard />
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
