<template>
  <div class="home">
    <HelloWorld />
    <MyName />  
    <vue-typed-js :strings="['Hello My Name is Edward Stern']">
    <h2 class="typing"></h2>
    </vue-typed-js>
    <vue-typed-js :strings="['I am a selftaught web developer']">
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
