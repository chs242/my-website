<template>
  <div class="home">
    <HelloWorld class="hello-world" />
     
    <div class="typed1">
      <vue-typed-js :strings="['Hello my name is Edward Stern ^1000 I am a ']" :showCursor="false" :loop="false">
        <h2 class="typing"></h2>
      </vue-typed-js>
    </div>
    <div class="typed2">    
      <vue-typed-js :strings="['Self taught web developer', 'United Hatzola volunteer EMT', 'Kollel financial secretary']" :showCursor="false" :startDelay="3800" :backDelay="1500" loop="true">
        <h2 class="typing"></h2>
      </vue-typed-js>
    </div>

    <MyName class="my-name"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyName from "@/components/MyName.vue";


export default {
  name: "home",
  components: {
    HelloWorld,
    MyName
  }
};
</script>

<style scoped>
  .hello-world{
    width: 100%;
    position: absolute;
    top: 2vh;
    
  }

  .typed1{
    position: absolute;
    top:20vh;
  }
  .typed2{
    position: absolute;
    top: 25vh;
  }

  .my-name{
    border: 2px solid white;
    position: absolute;
    bottom: 2vh;
    right: 1vw;
  }
</style>
