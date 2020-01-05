<template>
  <div id="app">
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
export default {};
</script>
