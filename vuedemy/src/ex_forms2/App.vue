<template>
    <div class="container">
        <!-- <template v-if="!submitted"> -->
        <template>
            <form>
                <FullName v-model="userData.name"></FullName>
                        <!-- Exercise 1 -->
                        <!-- Create a Signup Form where you retrieve the following Information -->
                        <!-- Full Name (First Name + Last Name) -->
                        <!-- Mail -->
                        <!-- Password -->
                        <!-- Store Data? Yes/No -->

                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div class="form-group">
                            <label for="email">Mail</label>
                            <input
                                    type="text"
                                    id="email"
                                    class="form-control" 
                                    v-model="userData.email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input
                                    type="password"
                                    id="password"
                                    class="form-control"
                                    v-model="userData.password">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                        <label for="male">
                            <input
                                    type="radio"
                                    id="male"
                                    value="true"
                                    v-model="storeData"> Yes
                        </label>
                        <label for="female">
                            <input
                                    type="radio"
                                    id="female"
                                    value="false"
                                    v-model="storeData"> No
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <button
                                class="btn btn-primary"
                                @click.prevent="submitted = true">Submit!
                        </button>
                    </div>
                </div>
                        <!-- Exercise 3 -->
                        <!-- Edit the Example from above and create a custom "Full Name" Control -->
                        <!-- which still holds the First Name and Last Name Input Field -->
            </form>
        </template>
        <template>
            <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.name }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
        </template>
        
    </div>
</template>

<script>
import FullName from './FullName'
    export default {
        components: {
           FullName,
        },
        data() {
            return {
                userData: {
                    name: 'Philip Gutbrodt',
                    email: '',
                    password: '',
                },
                storeData: true,
                submitted: false,
                
            }
        }
    }
</script>

<style>
</style>
