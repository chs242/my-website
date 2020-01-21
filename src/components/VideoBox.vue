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
div {
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
  overflow: hidden;
}
</style>
