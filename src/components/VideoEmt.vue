<template>
    <div class="video-container">
       <video id="video" playDelay src="../assets/emergency-emt.mp4" autoplay preload="metadata" muted loop>
        </video>
    </div>
</template>

<script>
export default {
    name: 'VideoCode'
};
computed:{
    playDelay: function (){
       return setTimout(this.video.play(), 5000);
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
</style>