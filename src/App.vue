<template>
  <div id="app">
    <HelloWorld class="hello-world" />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">My Projects</router-link>
      <router-link to="/technologies">Technologies</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components: {
    HelloWorld
  }
};
</script>
<style scoped>
.hello-world {
  float: right;
  top: 2vh;
}
</style>
