<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Transitions & Animations</h1>
                <button class="btn btn-primary" @click="show = !show">
                  Alert
                </button>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">
                    This is an alert
                    </div>
                </transition>
                <br><br>
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">
                    This is an alert
                    </div>
                </transition>
                <transition 
                type="animation" 
                appear
                enter-class=""
                enter-active-class="animated bounce"
                leave-class=""
                leave-active-class="animated shake"
                >

                    <div class="alert alert-info" v-if="show">
                    This is an alert
                    </div>
                </transition>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        }
    }
</script>

<style>
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: 1s opacity;
}
.fade-leave{}
.fade-leave-active{
    transition: 1s opacity;
    opacity: 0;
}

.slide-enter {
    opacity: 0;
}
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 3s;
}
.slide-leave {

}
.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 3s;
    opacity: 0;
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
    } to {
        transform: translateY(0);
    }

}
@keyframes slide-out  {
    from {
        transform: translateY(0);
    } to {
        transform: translateY(20px);
    }
}
</style>
