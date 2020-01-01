<template>
    <div class="video-container">
        <transition name="fade">
            <video :="isVisible" id="video" src="../assets/typing-fast.mp4" autoplay preload="metadata" muted loop></video>
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
            setTimeout(function(){this.isVisible = true}, 3000)
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
     margin-left: -850px;   
     margin-bottom: -250px;   
    }

    video{
        position: absolute;
        left: 0;
        top: 0;
    }
    .fade-enter {
    opacity: 0;
    }

    .fade-enter-active{
    transition: 0.5s;
    }
</style>