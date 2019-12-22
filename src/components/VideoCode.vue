<template>
    <div class="video-container">
       <video src="../assets/World-1992.mp4" autoplay preload="metadata" muted loop>
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
        position: relative;
        height: 100%;
        width: 33%

    }
    video{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
</style>