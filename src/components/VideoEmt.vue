<template>
    <div class="video-container">
        <transition name="fade">
            <video id="video" src="../assets/emergency-emt.mp4" autoplay v-show="isVisible" muted loop> </video>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'VideoCode',
    data(){
        return{
            isVisible: false
        }
    },
    methods:{
        timeOut(){
            setTimeout(() => this.isVisible = true, 8000)
        },
        debug() {
            console.log(this.isVisible)
        }
    },
    mounted(){
        this.timeOut()
    }
}
</script>

<style scoped>

   .video-container{        
        width: 33%;
        position: relative;
        overflow: hidden;

    }
    #video{
     margin-left: -500px;   
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active{
        transition: 3.5s;
        

    }

    .fade-enter-to{
        opacity: 1;
    }
</style>