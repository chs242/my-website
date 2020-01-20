<template>
  <div class="video-container-root-element">
    <transition-group name="fade">
      <div class="video-container" v-for="url in urlList" :key="url">
        <video
          :src="url"
          autoplay
          v-show="isVisible"
          muted
          loop
        ></video>
      </div>
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
  width: 30%;
  position: relative;
  overflow: hidden;
}

#video {
  margin-left: -370px;
  width: 100%;
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
