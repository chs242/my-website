<template>
  <div class="video-container">
    <transition-group name="fade">
      <video
        v-for="url in urlList"
        :src="url"
        :key="url"
        autoplay
        v-show="isVisible"
        muted
        loop
      ></video>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "VideoEmt",
  data() {
    return {
      isVisible: false
    };
  },
  props: {
    urlList: {
      type: Array
    }
  },
  methods: {
    timeOut() {
      setTimeout(() => (this.isVisible = true), 5000);
    }
  },
  mounted() {
    this.timeOut();
  }
};
</script>

<style scoped>
.video-container {
  /* width: 33%; */
  position: relative;
  /* overflow: hidden; */
}
video {
  /* height: 300px; */
  width: 30%;
  /* margin-left: -500px; */
}

.video-container{
  display: flex;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: 3.5s;
}

.fade-enter-to {
  opacity: 1;
}
</style>
