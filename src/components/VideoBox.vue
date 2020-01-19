<template>
  <div class="video">
    <VideoEmt :urlList="urlList"></VideoEmt>
  </div>
</template>
<script>
import VideoEmt from "@/components/VideoEmt.vue";

export default {
  name: "VideoBox",
  components: {
    VideoEmt
  },
  data() {
    return {
      urlList: [
        "/typing-fast.mp4",
        "/emergency-emt.mp4",
        "/gateshead-yeshiva.mp4"
      ]
    };
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
