<template>
  <div class="video-container-root-element">
    <transition-group name="lovely">
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
  name: "Videos",
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
  width: 32%;
  overflow: hidden;
  margin: 0 0.5vw;
  border-radius: 20px;
}

.video-container-root-element > span{
  display: flex;
}

.lovely-enter {
  opacity: 0;
}

.lovely-enter-active {
  transition: 3.5s;
}

.lovely-enter-to {
  opacity: 1;
}
</style>
