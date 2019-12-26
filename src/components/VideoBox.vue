<template>
  <div class="video">
    <VideoCode></VideoCode>
    <VideoEmt></VideoEmt>
    <VideoLearn></VideoLearn>
  </div>
</template>
<script>
import VideoCode from "@/components/VideoCode.vue";
import VideoEmt from "@/components/VideoEmt.vue";
import VideoLearn from "@/components/VideoLearn.vue";

export default {
  name: "VideoBox",
  components:{
    VideoCode,
    VideoEmt,
    VideoLearn
  }
};
</script>

<style scoped>
div {
  display: flex;
  height: 60vh;
  width: 85vw;
  /*position absolute otherwise box jumps up and down in sync with the second
  typed.js element*/
  position: absolute;
  bottom: 1vh;
  color: #000;
  z-index: 1;
  opacity: 0.5;
  border-radius: 10px;
}
</style>
