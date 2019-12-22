<template>
    <div class="video-container">
       <video src="../assets/gateshead-yeshiva.mp4" autoplay preload="metadata" muted loop>
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

    }
    video{
        position: absolute;
        left: 0;
        top: 0;
    }
</style>