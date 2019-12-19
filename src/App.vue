<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/test1">Test1</router-link>
      <router-link to="/test2">Test2</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
