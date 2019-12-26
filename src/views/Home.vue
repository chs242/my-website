<template>
  <div class="home">
    <HelloWorld class="hello-world" />
    <typedMyName />
    <VideoBox class="vid-box" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import typedMyName from "@/components/typedMyName.vue"
import VideoBox from "@/components/VideoBox.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    typedMyName,
    VideoBox
  }
};
</script>

<style scoped>
.hello-world {
  float: right;
  top: 2vh;
}

.vid-box {
  position: absolute;
  right: 1vw;
}
</style>
