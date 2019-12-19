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
  border: 2px solid white;
  height: 60vh;
  width: 85vw;
}
</style>
