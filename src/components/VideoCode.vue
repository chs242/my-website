<template>
  <div class="video-container">
    <transition name="fade">
      <video
        id="video"
        src="../assets/typing-fast.mp4"
        autoplay
        v-show="isVisible"
        muted
        loop
        @pause="updatePause"
        @suspend="updateSuspend"
      ></video>
    </transition>
  </div>
</template>

<script>
export default {
  name: "VideoCode",
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    updatePause() {
      console.log("video has paused");
    },
    updateSuspend() {
      console.log("video is suspended");
    },
    timeOut() {
      setTimeout(() => (this.isVisible = true), 2800);
    },
    debug() {
      console.log(this.isVisible);
    }
  },
  mounted() {
    this.timeOut();
  }
};
</script>

<style scoped>
.video-container {
  width: 33%;
  position: relative;
  overflow: hidden;
}
#video {
  margin-left: -850px;
  margin-bottom: -250px;
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
