<template>
  <div class="home">
    <HelloWorld />
    <MyName /> 
    <!--infinite looping-->
    <vue-typed-js :strings="['Hello my name is Edward Stern ^1000 I am a ']" :showCursor="false" :loop="false">
    <h2 class="typing"></h2>
    </vue-typed-js>

  <!-- type pausing -->
  <vue-typed-js :strings="['self taught web developer', 'united Hatzola volunteer EMT', 'Rosh Kollel']" :showCursor="false" :startDelay="3800" :backDelay="1500" loop="true">
    <h2 class="typing"></h2>
  </vue-typed-js>
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
