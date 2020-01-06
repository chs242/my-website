<template>
  <div class="home">
    <typedMyName />
    <VideoBox class="vid-box" />
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
.vid-box {
  position: absolute;
  right: 1vw;
}
</style>
