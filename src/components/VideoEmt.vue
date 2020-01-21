<template>
  <div class="video-container-root-element">
    <transition-group name="fade">
      <div class="video-container" v-for="url in urlList" :key="url">
        <video
          :src="url"  
          autoplay
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
    };
  },
  props: {
    urlList: {
      type: Array
    }
  }
};
</script>

<style scoped>
.video-container {
  height: 50%;
  width: 33%;
  overflow: hidden;
  margin: 0 0.5vw;
  border-radius: 20px;
}

.video-container-root-element > span{
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
