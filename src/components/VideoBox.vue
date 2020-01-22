<template>
  <div class="video-box-root-element">
    <transition>
      <div class="video">
        <Videos :urlList="urlList"></Videos>
      </div>
    </transition>
  </div>
</template>
<script>
import Videos from "@/components/Videos.vue";

export default {
  name: "VideoBox",
  components: {
    Videos
  },
  data() {
    return {
      urlList: [
      ],
      sources:[
        {
          src: "/typing-fast.mp4",
          time: 2800
        },
        {
          src: "/emergency-emt.mp4",
          time: 5000
        },
        {
          src: "/gateshead-yeshiva.mp4",
          time: 7800
        },
        
      ]
    };
  },
  methods: {
    toggle(){
      this.isTrue = !this.isTrue;
    },
    timeOut(value, time) {
      setTimeout(() => (this.urlList.push(value)), time);
    },
    executeSameFunctionXTimes(arr){
      arr.forEach(item => {
        this.timeOut(item.src, item.time);
      });
    }
  },
  mounted(){
    this.executeSameFunctionXTimes(this.sources);
  }
};
</script>

<style scoped>
.video {
  height: 60vh;
  width: 85vw;
  color: #111;
  opacity: 0.2;
  overflow: hidden;
}
</style>
