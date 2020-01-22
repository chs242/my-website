<template>
  <div class="home-router-wrapper">
    <div class="home">
      <typedMyName />
      <VideoBox class="vid-box" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import typedMyName from "@/components/typedMyName.vue";
import VideoBox from "@/components/VideoBox.vue";

export default {
  name: "home",
  components: {
    typedMyName,
    VideoBox
  }
};
</script>

<style scoped>
.home-router-wrapper{
  width: 100%;
  height: 100%;
  z-index: -1;
}

.vid-box {
  position: absolute;
  right: 1vw;
}
</style>
