<template>
    <div class="video-container">
       <video id="video" src="../assets/emergency-emt.mp4" autoplay preload="metadata" muted loop>
        </video>
    </div>
</template>

<script>
export default {
    name: 'VideoCode'
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